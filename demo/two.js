// 2.2.1 ^和$
// var str = 'hello';  // replace方法不会改变原变量
// var result = str.replace(/^|$/g, '#');
// console.log(result);

// 匹配多行的开头和结尾
// var str = 'hello\nworld\ni\nam\nfine';
// console.log(str.replace(/^|$/gm, '#'));
/* 
#hello#
#world#
#i#
#am#
#fine#
*/

// 2.2.2 \b（单词边界）和\B（除了单词边界以外的所有边界）
// console.log('[apple] test.mp4'.replace(/\b/g, '#'));  // [#apple#] #test#.#mp4#
// console.log('[apple] test.mp4'.replace(/\B/g, '#'));  // #[a#p#p#l#e]# t#e#s#t.m#p#4

// 2.2.3 (?=p)（正向先行断言：即该位置后面的字符要匹配p） 和 (?!p)（负向先行断言：即该位置后面的字符不能匹配p）
// console.log('hello'.replace(/(?=l)/g, '#'));  // he#l#lo
// console.log('hello'.replace(/(?!l)/g, '#'));  // #h#ell#o#

// 2.3 对于位置的理解，我们可以理解成空字符""
// console.log(/^^hello$$$/.test('hello'));  // true
// console.log(/(?=he)^^he(?=\w)llo$\b\b$/.test('hello'));  // true

// 2.4.1 不匹配任何东西的正则
// /.^/
// 因为此正则要求只有一个字符，但该字符后面是开头，而这样的字符串是不存在的

// 2.4.2 数字的千位分隔符表示法（123456789 => 123,456,789）
// var str = '123456789';
// var regex = /(?!^)(?=(\d{3})+$)/g;
// console.log(str.replace(regex, ','));

// 2.4.2.4 支持其他形式（"12345678 123456789" 替换成 "12,345,678 123,456,789"）
// var str = '12345678 123456789';
// var regex = /\B(?=(\d{3})+\b)/g;
// console.log(str.replace(regex, ','));  // 12,345,678 123,456,789

// 2.4.2.5 货币格式化（1888 => $ 1,888.00）
// var num = 1888;
// function format(num) {
//     return num.toFixed(2).replace(/\B(?=(\d{3})+\b)/g, ',').replace(/^/, '$ ');
// };
// console.log(format(num));

// 验证密码 有点难 后面看