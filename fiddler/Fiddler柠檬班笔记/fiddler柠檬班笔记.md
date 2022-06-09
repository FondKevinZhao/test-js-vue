### 一、初始Fiddler，深入理解HTTP

#### Fiddler简介

[视频地址](https://www.bilibili.com/video/BV1c4411c7zH?spm_id_from=333.999.0.0)

fiddler字面意思：1. 拉小提琴的人。2. 骗子。

1. Fiddler 是位于客户端和服务端的HTTP代理。

2. 目前最常用的http抓包工具之一。

3. 功能非常强大，是web调试的利器：
   - 监控浏览器所有的HTTP/HTTPS流量(浏览器和服务器通信过程中)
   - 查看、分析请求内容细节
   - 伪造客户端和服务器响应
   - 测试网络的性能
   - 解密HTTPS的web会话
   - 全局、局部断点功能
   - 第三方插件

使用场景：

- 接口调试、接口测试、线上环境调试、web性能分析
- 判断前后端bug、开发环境hosts配置、mock、弱网断网测试

#### 抓包原理

B/S架构：（Browser/Server，浏览器/伺服器模式），是WEB兴起后的一种网路结构模式，WEB浏览器是客户端最主要的套用软体。这种模式统一了客户端，将系统功能实现的核心部分集中到伺服器上，简化了系统的开发、维护和使用。客户机上只要安装一个浏览器，如Netscape Navigator或Internet Explorer，伺服器安装SQL Server、Oracle、MYSQL等资料库。浏览器通过Web Server 同资料库进行数据互动。

1. 编写程序部署到web服务器。

2. web服务器运行在服务器上，绑定ip地址并监听某端口，接收和处理http请求。

3. 客户端通过http协议获取服务器上的网页、文档等资源。

   ![image-20220606223430683](fiddler柠檬班笔记.assets/image-20220606223430683.png)

[柠檬班测试地址](http://test.lemonban.com/ningmengban/app/login/login.html)

柠檬班图片地址用来分析：http://test.lemonban.com/ningmengban/images/logo.png

- `http://`：协议名

- `test.lemonban.com`：域名，域名最终还是会转成IP地址。(域名是方便记忆，IP地址不好记忆)。

  如何通过`域名`找到对应的`IP地址`？

  1. 打开CMD。
  2. 输入命令：`ping test.lemonban.com`回车
  3. IP地址为：`8.129.91.152`

  ![image-20220606225852152](fiddler柠檬班笔记.assets/image-20220606225852152.png)



**fiddler工作原理**

![image-20220607200330380](fiddler柠檬班笔记.assets/image-20220607200330380.png)

不管是客户端给服务器发请求，还是服务器给服务器响应，这个中间的过程fiddler都能够监听到。

**fiddler劫持原理**

fiddler直接代理的端口号`8888`

![image-20220607200723624](fiddler柠檬班笔记.assets/image-20220607200723624.png)



我们可以通过下面的方式验证：

打开fiddler的情况下

1. 找到谷歌浏览器的设置 --》高级--》系统--》打开您计算机的代理设置(点击一下)

   ![image-20220607201226376](fiddler柠檬班笔记.assets/image-20220607201226376.png)

2. 点击以后，我们可以看到当前电脑中的设置：这个端口也是`8888`

   ![image-20220607201347213](fiddler柠檬班笔记.assets/image-20220607201347213.png)



关闭fiddler的情况下

1. 找到谷歌浏览器的设置 --》高级--》系统--》打开您计算机的代理设置(点击一下)

   ![image-20220607201226376](fiddler柠檬班笔记.assets/image-20220607201226376.png)

2. 本机计算机，并不会被代理

   ![image-20220607201723622](fiddler柠檬班笔记.assets/image-20220607201723622.png)

#### HTTP协议详解

- HTTP：Hyper Text Transfer Protocal 超文本传输协议
- 用于从万维网服务器传输超文本到本地浏览器的传送协议
- HTTP协议是就TCP的应用层写协议，它不关心数据传输的细节，主要是用来`规定客户端和服务端的数据传输格式`，最初是用来向客户端传输HTML页面的内容。默认端口是80
- HTTP是基于请求与响应模式的、无状态的、应用层的协议

![image-20220607202542988](fiddler柠檬班笔记.assets/image-20220607202542988.png)

#### HTTP请求报文

http请求报文主要由**请求首行**、**请求头**、**请求空行**、**请求正文**(也叫请求体)4部分组成，请求体在get请求中是没有的。

![image-20220608222010997](fiddler柠檬班笔记.assets/image-20220608222010997.png)

##### HTTP请求方法

![image-20220608224515489](fiddler柠檬班笔记.assets/image-20220608224515489.png)

##### URL

![image-20220608224858812](fiddler柠檬班笔记.assets/image-20220608224858812.png)

##### 请求头

![image-20220608225702488](fiddler柠檬班笔记.assets/image-20220608225702488.png)

#### HTTP响应报文

![image-20220609200753826](fiddler柠檬班笔记.assets/image-20220609200753826.png)



##### 状态码

![image-20220609201107481](fiddler柠檬班笔记.assets/image-20220609201107481.png)





##### 响应头

![image-20220609203150102](fiddler柠檬班笔记.assets/image-20220609203150102.png)





### 二、Fiddler工具详解及应用实战

#### 界面介绍

![image-20220609210024865](fiddler柠檬班笔记.assets/image-20220609210024865.png)

#### 请求分析

#### 请求修改

#### 响应修改

#### 网络限速

#### 断点调试

#### 设计请求

#### 自动响应

#### mock测试

### 三、HTTPS及手机APP抓包

#### HTTPS抓包

#### APP抓包





### 四、fiddler快捷键

1. shift + delete：删除其他的请求(在内容中会请求到很多的结果，当你只想保留当前的结果的时候)

2. 到处请求内容：把某一条信息导入到一个文本文件中：右击--》save--》Selected Sessions –> as Text…

   ![image-20220607203737257](fiddler柠檬班笔记.assets/image-20220607203737257.png)

   请求和响应

   ![image-20220608223731218](fiddler柠檬班笔记.assets/image-20220608223731218.png)

3. 双击某一条就能得到请求和响应，在右边展示：

   ![image-20220608222530371](fiddler柠檬班笔记.assets/image-20220608222530371.png)

4. 双击某一条，右边都选raw，表示以原生文本的形式来查看：

   ![image-20220608222726545](fiddler柠檬班笔记.assets/image-20220608222726545.png)

5. 阻塞css请求：点击filter --》Block CSS files

   ![image-20220609201510250](fiddler柠檬班笔记.assets/image-20220609201510250.png)

   设置后的样子：css的样式都是404

   ![image-20220609202323239](fiddler柠檬班笔记.assets/image-20220609202323239.png)

   可以看这个网址：直接没有css样式了

   ![image-20220609202350063](fiddler柠檬班笔记.assets/image-20220609202350063.png)

6. 设置请求头：filter --》Set request header

   设置后，会出现在请求头中

   ![image-20220609201555864](fiddler柠檬班笔记.assets/image-20220609201555864.png)

   设置后的样子：

   ![image-20220609201722634](fiddler柠檬班笔记.assets/image-20220609201722634.png)

3. 











































