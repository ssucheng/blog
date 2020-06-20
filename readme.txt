最近一直在做的这个前后交互的项目中用到了bcrypt加密,总结一下
我是在window操作系统下安装的
0. python 2.x 这个我也不知道用来干嘛的
1. window下安装bcrypt必须先安装node-gyp

npm install --save node-gyp
1
2.安装bcryptjs

npm install --save  bcryptjs

3.windows-build-tools
 npm install --global --production windows-build-tools   //需要用管理员身份安装


 安装 express-session
    npm install express-session

&& || 的基本操作
var a=3;  
var b="test";  
var c={name:'test'};  
var d={};  
  
a || b      // => 3  
c || b      // => {name:'test'}  
d || b      // => {}  
true || b      // => true  
false || b      // => 'test'  
NaN || b       // => 'test'  
'' || b           // => 'test'

a && b         // => 'test'  
c && b         // => 'test'  
d && b         // => 'test'  
true && b     // => 'test'  
false && b     // => fasle  
NaN && b     // => NaN  
'' && b         // =>''