## 基于react开发的多页面应用！

本项目基于react开发，由于是开发移动端页面，所以配置了多入口文件，与spa有区别


### `后台交互`
在后台交互方面用到了`n-zepto`进行交互


(1)在页面中引入n-zepto

```
import $ from 'n-zepto'

```

(2)在需要发起请求的地方调用引入的n-zepto库,如下例子,其中setState是react的语法

```
toggleLanguage(){
   $.ajax({
      type:"get",
      url:"http://www.baidu.com",
      success:data=>{
         this.setState({
            data
          })
      }
    })
 }
```

(3)如需给元素绑定时间，从而触发请求，可以按照如下方法进行绑定（注意：这是react的语法）

```
 <span className="tip_icon" onClick={this.toggleLanguage.bind(this)}>{isEnglish?'中文':'EN'}</span>
```
### `开发启动操作`

（1）首先运行
```
cnpm i 
```
下载依赖文件（如果没有安装`cnpm`,直接运行命令 `npm i -g cnpm`安装）(如果提示`npm`命令不存在，直接下载到`nodejs`官网进行下载安装`nodejs`即可，nodejs自带npm命令！)


（2）下载完成依赖以后，运行命令npm start即可在端口8081上启动服务，进行测试，修改保存后页面会自动更新

  

### `打包部署操作`
 
 （1）在本地开发完毕后，需要把服务部署到服务器上，这是可以调用命令：
 ```
npm run build
```
  (2)命令执行完毕后会在根目录生成一个dist目录，该目录下的文件就是服务部署时需要的文件



