// 3.1.1 分组
// var regex = /(ab)+/g;
// var str = 'ababa abbb ababab';
// console.log(str.match(regex));  // [ 'abab', 'ab', 'ababab' ]

// 3.1.2 分支结构
// var regex = /^i love (js|css)$/;
// console.log(regex.test('i love css'));  // true
// console.log(regex.test('i love js'));  // true

// 3.2.1 提取数据

// 方法1：字符串的match
// var regex = /(\d{4})-(\d{2})-(\d{2})/;
// var str = '2020-09-20';
// console.log(str.match(regex));
/* 
[
  '2020-09-20',
  '2020',  // 组
  '09',  // 组
  '20',  // 组
  index: 0,
  input: '2020-09-20',
  groups: undefined
]
*/

// 方法2：正则对象的exec
// var regex = /(\d{4})-(\d{2})-(\d{2})/;
// var str = '2020-09-20';
// console.log(regex.exec(str));
/* 
[
  '2020-09-20',
  '2020',  // 组
  '09',  // 组
  '20',  // 组
  index: 0,
  input: '2020-09-20',
  groups: undefined
]
*/

// 方法3：构造函数的全局属性$1至$9来获取（注意：获取之前必须先进行正则操作。否则取不到值）。
// var regex = /(\d{4})-(\d{2})-(\d{2})/;
// var str = '2020-09-20';
// // 获取之前必须先进行正则操作，例如：
// // regex.test(str);
// // regex.exec(str);
// str.match(regex);
// console.log(RegExp.$1);  // 2020
// console.log(RegExp.$2);  // 09
// console.log(RegExp.$3);  // 20

// 3.2.2 替换 （yyyy-mm-dd => mm/dd/yyyy）

// var regex = /(\d{4})-(\d{2})-(\d{2})/;
// var str = '2020-09-20';
// 1.
// console.log(str.replace(regex, '$2/$3/$1'));  // 09/20/2020
// 2.
// console.log(str.replace(regex, function() {
//     return RegExp.$2 + '/' + RegExp.$3 + '/' + RegExp.$1;
// }));
// 3.
// console.log(str.replace(regex, function(match, year, month, day) {
//     console.log(match);  // 2020-09-20
//     return month + '/' + day + '/' + year;
// }));

// 3.3 反向引用
// var str1 = '2020-09-20';
// var str2 = '2020/09/20';
// var str3 = '2020.09.20';
// var str4 = '2020-09/20';
// var regex = /\d{4}(-|\/|\.)\d{2}\1\d{2}/;
// console.log(regex.test(str1));  // true
// console.log(regex.test(str2));  // true
// console.log(regex.test(str3));  // true
// console.log(regex.test(str4));  // false

// 3.3.1 括号嵌套以左括号为准
// var regex = /^((\d)(\d(\d)))\1\2\3\4$/;
// var str = '1231231233';
// console.log(regex.test(str));  // true
// console.log(RegExp.$1);  // 123
// console.log(RegExp.$2);  // 1
// console.log(RegExp.$3);  // 23
// console.log(RegExp.$4);  // 3

// 3.3.2 \10表示第十个分组
// var regex = /(1)(2)(3)(4)(5)(6)(7)(8)(9)(#) \10+/;
// var string = "123456789# ######"
// console.log( regex.test(string) );  // true
// 注意：想要匹配\1和0的话，使用(?:\1)0或者\1(?:0)

// 3.3.3 引用不存在的分组则匹配反向引用的字符本身
// var regex = /\1\2\3\4\5\6/;
// console.log(regex.test('\1\2\3\4\5\6'));  // true

// 3.3.4 分组后面有量词的话，最终捕获到的数据是最后一次的匹配

// var regex = /(\d)+/;
// var str = '12345';
// console.log(str.match(regex));  // [ '12345', '5', index: 0, input: '12345', groups: undefined ]

// 同理，反向引用也是如此
// var regex = /(\d)+ \1/;
// console.log(regex.test('12345 1'));  // false
// console.log(regex.test('12345 5'));  // true

// 3.4 非捕获括号 (?:p)和(?:p1|p2|p3)
// 如果只想要括号最原始的功能，但不会引用它，即，既不在api里面引用，也不在正则里面反向引用的话可以使用非捕获括号。
// 之前说的匹配\10匹配的是第十个分组，想要匹配\1和0的话，使用(?:\1)0或者\1(?:0)。就是反向引用.

// var regex = /(?:ab)+/g;
// var string = "ababa abbb ababab";
// console.log( string.match(regex) );  // [ 'abab', 'ab', 'ababab' ]

// 3.5.1 字符串trim方法模拟
// 1. 匹配到开头和结尾的空白符，然后替换成空字符。
// function trim(str) {
//     return str.replace(/^\s+|\s+$/g, '');
// };
// console.log(trim(' he ').length);  // 2

// 2. 匹配整个字符串，然后用引用来提取出相应的数据。
// 这里使用了惰性匹配 *?，不然也会匹配最后一个空格之前的所有空格的
// function trim(str) {
//     return str.replace(/^\s*(.*?)\s*$/g, '$1');
// };
// console.log(trim(' he ').length);  // 2

// 3.5.2 将每个单词的首字母转换成大写
// function uppercase(str) {
//     return str.toLowerCase().replace(/(^|\s)\w/g, function(c) {
//         console.log(c);  // m n i a
//         return c.toUpperCase();
//     })
// }
// console.log(uppercase('my name is apple'));  // My Name Is Apple

// 3.5.3 驼峰化
// function camelize(str) {
//     return str.replace(/[-_\s]+(\w)?/g, function(match, c) {
//         console.log(match);  // -m -t
//         console.log(c);  // m t
//         return c ? c.toUpperCase() : '';
//     });
// };
// console.log(camelize('-moz-transform'));  // MozTransform

// 3.5.4 中划线化
// function dasherize (str) {
//     return str.replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
// }
// console.log(dasherize('MozTransform a'));  // -moz-transform-a
