jquery注意的问题:
安装nodejs
打开CMD命令行工具, windows+R ==> 输入 cmd 回车
输入代码: npm install -g less 回车执行, 就会安装less工具
打开webStorm, File-->Settings-->Tools-->File Watchers
右边有一列, 找到一个"+"号的图标, 点击, 选中里面的"less", 看看是不是和下图一样, 不同版本的WebStorm可能会有区别,
点击"OK", 应该就可以了。
webstorm 里的file watcher就是用来将less文件自动生成css文件的，在使用file watcher之前你需要安装node.js并在node环境下安装less，安装完毕后webstorm会自动捕捉到lessc.cmd的安装路径，你也可以在settings→Tools→file Watcher下添加新的watcher，配置好之后，你编写的less文件就会自动转译成css文件


1，配置
2,要引入的js
3,文字和图片居中vertical-align:middle;
4,json-server的使用 全局安装后，启动它，
$.get('http://localhost:3000/comment', (data) => {
    let datasss = JSON.parse(data);
    $('.commentDiv').append(template('comments', {data: datasss}))
  });
5,art-templete的使用方式,而且template里面放的是对象
可以用JSON.parse进行转换