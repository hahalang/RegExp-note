// 7.1.1 验证
// search、test、match、exec
// var regex = /\d/;
// var string = 'abc123';
// console.log(!!~string.search(regex));  // true
// console.log(regex.test(string));  // true
// console.log(!!string.match(regex));  // true
// console.log(!!regex.exec(string));  // true

// 7.1.2 切分
// split
// var regex = /,/;
// var str = 'html,css,js';
// console.log(str.split(regex));  // [ 'html', 'css', 'js' ]

// 7.1.3 提取
// match、exec、test、search、replace
// var regex = /^(\d{4})\D(\d{2})\D(\d{2})$/;
// var string = '2020-06-26';
// // match
// console.log(string.match(regex).slice(1, 4));  // [ '2020', '06', '26' ]
// // exec
// console.log(regex.exec(string).slice(1, 4));  // [ '2020', '06', '26' ]
// // test
// regex.test(string);
// console.log([RegExp.$1, RegExp.$2, RegExp.$3]);  // [ '2020', '06', '26' ]
// // search
// string.search(regex);
// console.log([RegExp.$1, RegExp.$2, RegExp.$3]);  // [ '2020', '06', '26' ]
// // replace
// var date = [];
// string.replace(regex, function(match, year, month, day) {
//     date.push(year, month, day);
// });
// console.log(date);  // [ '2020', '06', '26' ]

// 7.1.4 替换
// replace
// var string = '2020-09-26';
// console.log(string.replace(/-/g, '/'));  // 2020/09/26

// 7.2.1 search和match参数问题
// var string = '2017.06.27';
// // search
// console.log(string.search('.'));  // 0
// // 需要替换成如下形式之一
// console.log(string.search('\\.'));  // 4
// console.log(string.search(/\./));  // 4
// // match
// console.log(string.match('.'));  // [ '2', index: 0, input: '2017.06.27', groups: undefined ]
// // 需要替换成如下形式之一
// console.log(string.match('\\.'));  // [ '.', index: 4, input: '2017.06.27', groups: undefined ]
// console.log(string.match(/\./));  // [ '.', index: 4, input: '2017.06.27', groups: undefined ]
// // split、replace
// console.log(string.split('.'));  // [ '2017', '06', '27' ]
// console.log(string.replace('.', '/'));  // 2017/06.27

// 7.2.2 match返回结果的格式问题
// var string = '2017-9-26';
// console.log(string.match(/\b(\d+)\b/));  // [ '2017', '2017', index: 0, input: '2017-9-26', groups: undefined ]
// console.log(string.match(/\b(\d+)\b/g));  // [ '2017', '9', '26' ]

// 7.2.3 exec比match更强大
// var string = '2020.9.26';
// var regex = /\b(\d+)\b/g;
// console.log(regex.exec(string));  // [ '2020', '2020', index: 0, input: '2020.9.26', groups: undefined ]
// console.log(regex.lastIndex);  // 4
// console.log(regex.exec(string));  // [ '9', '9', index: 5, input: '2020.9.26', groups: undefined ]
// console.log(regex.lastIndex);  // 6
// console.log(regex.exec(string));  // [ '26', '26', index: 7, input: '2020.9.26', groups: undefined ]
// console.log(regex.lastIndex);  // 9
// console.log(regex.exec(string));  // null

// exec经常需要while循环配合使用
// var string = '2020.9.26';
// var regex = /\b(\d+)\b/g;
// var result;
// while(result = regex.exec(string)) {
//     console.log(result, regex.lastIndex);
// }
/*
[ '2020', '2020', index: 0, input: '2020.9.26', groups: undefined ] 4
[ '9', '9', index: 5, input: '2020.9.26', groups: undefined ] 6
[ '26', '26', index: 7, input: '2020.9.26', groups: undefined ] 9
*/

// 7.2.4 修饰符g对exec和test的影响
// var regex = /a/g;
// var regex = /a/;
// console.log(regex.test('a'), regex.lastIndex);  // true 0
// console.log(regex.test('aba'), regex.lastIndex);  // true 0
// console.log(regex.test('ababc'), regex.lastIndex);  // true 0

// 7.2.6 split两点注意事项
// split第二个参数表示数组的最大长度
// var string = 'html,css,js';
// console.log(string.split(/,/, 2));  // [ 'html', 'css' ]
// // 正则使用分组时，结果数组中是包含分隔符的
// console.log(string.split(/(,)/));  // [ 'html', ',', 'css', ',', 'js' ]

// 7.2.7 replace第二个参数有两种表示方式
// 1. 字符串

// 把'2,3,5'变成'5=2+3'
// var str = '2,3,5';
// console.log(str.replace(/(\d+),(\d+),(\d+)/, '$3=$1+$2'));  // 5=2+3

// 把'2,3,5'变成'222,333,555'
// var str = '2,3,5';
// console.log(str.replace(/(\d+)/g, '$&$&$&'));  // 222,333,555

// 把2+3=5变成2+3=2+3=5=5
// var str = '2+3=5';
// console.log(str.replace(/=/, "$&$`$&$'$&"));  // 2+3=2+3=5=5

// 2. 函数
// var str = '1234 5678 3579';
// str.replace(/(\d)\d{2}(\d)/g, function(match, $1, $2, index, input) {
//     console.log([match, $1, $2, index, input]);
// });
/*
[ '1234', '1', '4', 0, '1234 5678 3579' ]
[ '5678', '5', '8', 5, '1234 5678 3579' ]
[ '3579', '3', '9', 10, '1234 5678 3579' ]
*/

// 7.2.8 使用构造函数生成正则
// var string = '2020-9-26 2020.9.26 2020/9/26';
// // var regex = /\d{4}(-|\.|\/)\d{1}\1\d{2}/g;
// var regex = new RegExp('\\d{4}(-|\\.|\\/)\\d{1}\\1\\d{2}', 'g');
// console.log(string.match(regex));  // [ '2020-9-26', '2020.9.26', '2020/9/26' ]

// 7.2.9 修饰符
// var regex = /\w/img;
// console.log(regex.global);  // true
// console.log(regex.multiline);  // true
// console.log(regex.ignoreCase);  // true

// 7.2.10 source属性可以查看具体的正则
// 对于动态的正则表达式，可以通过source属性去查看具体的内容
// var className = 'high';
// var regex = new RegExp(`(^|\\s)${className}(\\s|$)`);
// console.log(regex.source);  // (^|\s)high(\s|$)

// 7.3.2 使用字符串保存数据
// var utils = {};
// 'Boolean|Number|String|Function|Array|Date|RegExp|Object|Error'.split('|').forEach(item => {
//     utils[`is${item}`] = function(obj) {
//         return {}.toString.call(obj) === `[object ${item}]`;
//     }
// });
// console.log(utils.isArray([1, 2, 3]));  // true