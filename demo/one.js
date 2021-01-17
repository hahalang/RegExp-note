// 1.1

// var regex = /hello/;
// console.log(regex.test('hello'));  // true

// 1.1.1 横向模糊匹配

// var regex = /ab{2,5}c/g;
// var regex1 = /ab{2,5}c/;
// var str = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc';
// console.log(str.match(regex));  // [ 'abbc', 'abbbc', 'abbbbc', 'abbbbbc' ]
// console.log(str.match(regex1));

/*
[
  'abbc',
  index: 4,
  input: 'abc abbc abbbc abbbbc abbbbbc abbbbbbc',
  groups: undefined
]
*/

// 1.1.2 纵向模糊匹配

// var regex = /a[123]b/g;
// var str = 'a0b a1b a2b a3b a4b';
// console.log(str.match(regex));  // [ 'a1b', 'a2b', 'a3b' ]

// 1.3.2 贪婪匹配和惰性匹配

// 贪婪匹配
// var regex = /\d{2,5}/g;
// var regex1 = /\d{2,5}?/g;
// var str = '123 1234 12345 123456';
// console.log(str.match(regex));  // [ '123', '1234', '12345', '12345' ]
// // 惰性匹配
// console.log(str.match(regex1));
/* 
[
  '12', '12', '34',
  '12', '34', '12',
  '34', '56'
]
*/

// 1.4 多选分支

// var regex = /good|nice/g;
// var str = 'good idea, nice try';
// console.log(str.match(regex));  //  ['good', 'nice' ]

// 多选分支匹配时是惰性的
// var regex = /good|goodbye/g;
// var str = 'goodbye';
// console.log(str.match(regex));  // ['good']

// var regex = /goodbye|good/g;
// var str = 'goodbye';
// console.log(str.match(regex));  // ['goodbye']

// 1.5.1 匹配16进制颜色值
// 注意点：1. 多选分支是惰性匹配的；2. ()

// var str = '#ffbbad #Fc01DF #FFF #ffE';
// var regex = /#([a-zA-Z0-9]{6}|[a-zA-Z0-9]{3})/g
// console.log(str.match(regex));  // [ '#ffbbad', '#Fc01DF', '#FFF', '#ffE' ]

// 1.5.2 匹配时间（要求匹配23:59、02:07这种形式的时间）

// var regex = /^([01][0-9]|2[0-4]):[0-5][0-9]$/;
// // 如果也要求匹配"7:9"这种形式
// var regex = /^(0?[0-9]|1[0-9]|2[0-4]):(0?|[1-5])[0-9]$/
// console.log(regex.test('23:59'));  // true
// console.log(regex.test('02:07'));  // true
// console.log(regex.test('7:9'));  // true

// 1.5.3 匹配日期（yyyy-mm-dd：2017-06-10）

// var regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
// console.log(regex.test('2017-06-10'));  // true

// 1.5.5 匹配id
// 要求从'<div id="container" class="main"></div>'中取出id="container"。

// var str = '<div id="container" class="main"></div>';
// var regex = /id=".*?"/;
// console.log(str.match(regex)[0]);  // id="container"