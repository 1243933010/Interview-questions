## 1) pc和移动端端碰到的兼容问题，哪些浏览器出现哪些意外问题
  ### IOS手机测试时会发现加了margin-bottom的属性无效。
  >  ***解决：替换为padding-bottom或者放个空盒子有高度宽度占位即可。***
  ### IOS手机的输入框出现未知的内阴影。
  >  ***解决：input: {-webkit-appearance: none;}***
  ### new Date的ios兼容问题：当使用new Date(‘2020-1-20’)这种方法的时候安卓和PC端都是没问题的，IOS手机不支持
  > ***IOS支持new Date(‘2020/1/20’)***

### img下的留白
> ***解决方案：给img设定display:block***

### 如果图片加a标签在IE9-中会有边框
> ***解决方案:给img设定border:none。***

### rgba不支持IE8
> ***解决方案:可以用 opacity***

### 背景透明问题
> ***IE: filter: alpha(opacity=10);***
> 
> ***FF: opacity:0.6;***
 *** 

 ### 获取页面滚动的距离
 > ***var scrollTop = document.documentElement.scrollTop || document.body.scrolltop;***

###  老版本浏览器兼容 innerText 和 textContent
```javascript
 if (element.textContent) {
    return element.textContent ;
 } else {
    return element.innerText;
 }
```
## .CSS3前缀  

> ***-webkit-  webkit渲染引擎  chrome/safari***  
> ***-moz-   gecko渲染引擎   firefox***  
> ***-ms-    trident渲染引擎  IE***  
> ***-o-  　opeck渲染引擎　opera***　

***　






## 2) DNS解析
<!-- 第一步：客户机提出域名解析请求,并将该请求发送给本地的域名服务器.
第二步：当本地的域名服务器收到请求后,就先查询本地的缓存,如果有该纪录项,则本地的域名服务器就直接把查询的结果返回.
第三步：如果本地的缓存中没有该纪录,则本地域名服务器就直接把请求发给根域名服务器,然后根域名服务器再返回给本地域名服务器一个所查询域(根的子域)的主域名服务器的地址.
第四步：本地服务器再向上一步返回的域名服务器发送请求,然后接受请求的服务器查询自己的缓存,如果没有该纪录,则返回相关的下级的域名服务器的地址.
第五步：重复第四步,直到找到正确的纪录.
第六步：本地域名服务器把返回的结果保存到缓存,以备下一次使用,同时还将结果返回给客户机. -->

  - *1、客户端通过浏览器访问域名为 www.baidu.com (http://www.baidu.com) 的网站，发起查询该域名的 IP 地址的 DNS 请求。该请求发送到了本地 DNS 服务器上。本地 DNS 服务器会首先查询它的缓存记录，如果缓存中有此条记录，就可以直接返回结果。如果没有，本地 DNS 服务器还要向 DNS 根服务器进行查询*

  - *2、本地 DNS 服务器向根服务器发送 DNS 请求，请求域名为 www.baidu.com (http://www.baidu.com) 的 IP 地址。*

 - *3、根服务器经过查询，没有记录该域名及 IP 地址的对应关系。但是会告诉本地 DNS 服务器，可以到域名服务器上继续查询，并给出域名服务器的地址(.com 服务器)。*

 - *4、本地 DNS 服务器向 .com 服务器发送 DNS 请求，请求域名 www.baidu.com (http://www.baidu.com) 的 IP 地址。*

 - *5、com 服务器收到请求后，不会直接返回域名和 IP 地址的对应关系，而是告诉本地DNS 服务器，该域名可以在 baidu.com 域名服务器上进行解析获取 IP 地址，并告诉 baidu.com 域名服务器的地址。*

 - *6、本地 DNS 服务器向 baidu.com 域名服务器发送 DNS 请求，请求域名 www.baidu.com (http://www.baidu.com) 的 IP 地址。*

 - *7、baidu.com 服务器收到请求后，在自己的缓存表中发现了该域名和 IP 地址的对应关系，并将 IP 地址返回给本地 DNS 服务器*

 - *8、本地 DNS 服务器将获取到与域名对应的 IP 地址返回给客户端，并且将域名和 IP 地址的对应关系保存在缓存中，以备下次别的用户查询时使用。*

***

## 3) new发生了什么
<!-- 1.创建一个空对象
2.设置原型链。把构造函数的prototype属性 作为空对象的原型，同时也有了prototype的方法
3.改变this指向。this赋值给这个空对象，执行构造函数函数，完成赋值
4.如果函数没有返回值 就返回这个this对象 -->
  - **创建一个空对象**
```javascript
 let obj = new Object()
```
  - **设置原型链,把函数的显式原型指向新创建的对象上(指向隐式原型)**
```javascript
obj.__proto__= Fn.prototype;
```

  - **改变this指向，使Fn的this指向新创建的对象上，并执行Fn函数体**
```javascript
let result =Fn.call(obj);
```

  4）判断Fn的返回值类型：如果是值类型，返回fn。如果是引用类型，就返回这个引用类型的对象
``` javascript
return result instanceof Object? result: obj;
```

***

## 4) 原型链
 - 每个对象拥有一个原型对象，对象以其原型为模板、从原型继承方法和属性。原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链
  
 - 实例对象有_proto_，指向构造实例的构造函数的prototype
 
 - new 出来的普通对象是没有原型的
 
 - 构造出来的Function的原型的类型是对象
 
 - 函数的prototype.construtor就是指的是函数本身



## 5) 闭包
 严格来说，闭包需要满足三个条件：
 > **【1】访问所在作用域；**  
 **【2】函数嵌套；**  
 **【3】在所在作用域外被调用**

  **可以持久保存变量状态，防止全局变量污染**

  ***由于闭包会携带包含它的函数的作用域，因此会比其他函数占用更多的内存。因此可以手动解除对匿名函数的引用，以便释放内存。***



 ## 6) es6常用api

   - **let所声明的变量一定在声明后使用，否则报错**  
   - **var命令会发生变量提升现象，即变量可以在声明之前使用，值为undefined。**  
   - **模板字符串**  
   - **解构赋值**  
   - **带参数默认值的函数  rest参数  箭头函数(箭头函数不能使用new关键字来实例化对象)**  
   - **promise await class**
   - **this关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字super，指向当前对象的原型对象**




## 7) await为什么可以阻塞
 > - **await的阻塞方式并不是阻塞同步代码所在的主线程，await其实是阻塞的当前异步函数的异步线程.**
 > - **虽然await会阻塞async异步函数，但是并没有阻塞同步代码的主线程，同步和异步之间仍然相互不阻塞。**
 > - **虽然await阻塞异步函数向后执行，看起来像是同步的，但是它本质还是异步的，我们同样可以并行执行其他的不关联的异步操作，而同步函数不能并行执行。**


## 8) vue的11个生命周期都是什么

   ### **创建阶段的四个：**
 - **beforeCreate：实例创建之前。**
 - **created：实例创建之后。**
 - **beforeMount：组件挂载之前。**
 - **mounted：组件挂载之后。**

 ### **运行阶段的两个：**

 - **beforeUpdate：数据改变，视图更新之前。**
 - **updated：试图更新之后。**

 ### **销毁阶段的两个：**
 - **beforeDestroy：实例销毁之前。**
 - **destroyed：实例销毁之后。**

 ### **其他三个：**

 - **activated  被 keep-alive 缓存的组件激活时调用。**
 - **deactivated 被 keep-alive 缓存的组件停用时调用。**
 - **errorCaptured 2.5.0+ 新增当捕获一个来自子孙组件的错误时被调用**

***


 ## 9)vue的路由周期
 ### ***分3块：全局守卫、路由独立守卫、组件内守卫***

#### **全局守卫**
 - **router.beforeEach 全局前置守卫**
 - **beforeResolve  全局解析守卫**
 - **afterEach   全局后置守卫、钩子**

#### **路由独立守卫**
 - **beforeEnter**

#### **组件内守卫**
 - **beforeRouteEnter 路由跳转，使用此组件时触发**
 - **beforeRouteUpdate 组件被复用时，触发此方法**
 - **beforeRouteLeave 路由跳转，不适用此组件时触发**

***

 ## 10) vue的两种路由形式是什么，通过什么实现就是什么api的
 ### hash模式
> **#后面 hash 值的变化，并不会导致浏览器向服务器发出请求，浏览器不发出请求，也就不会刷新页面。每次 hash 值的变化，会触发hashchange 这个事件，通过这个事件我们就可以知道 hash 值发生了哪些变化。然后我们便可以监听hashchange来实现更新页面部分内容的操作：=**

### history模式
 > **因为HTML5标准发布，多了两个 API，pushState() 和 replaceState()。通过这两个 API （1）可以改变 url 地址且不会发送请求，（2）不仅可以读取历史记录栈，还可以对浏览器历史记录栈进行修改。**

 > ***除此之外，还有popState().当浏览器跳转到新的状态时，将触发popState事件.***

***

 ## 11) 项目的性能优化

### **js的优化**
 >  ***1、注意内存消耗，不需要时注意销毁闭包状态***  
 > ***2、留意防抖节流的使用***  
 > ***3、循环中for(in)的效率最差，因为它需要查询Hash键，因此应尽量少用for(in)循环，for(;;)、while()循环的性能基本持平***  
 > ***对字符串进行循环操作，例如替换、查找，就使用正则表达式。因为JS的循环速度比较慢，而正则表达式的操作是用C写成的API，性能比较好。***  



### **vue的优化**
> ***1、vue2的vfor优先级比vif大，不要放同一层级***  
> ***2、合理使用路由懒加载、异步组件***  
> ***3、第三方插件按需加载或者使用cdn***

### **webpack的优化**
> ***1、使用多线程打包happypack***  
> ***2、利用浏览器缓存，只改变已修改的文件的hash文件名，可以大大提升项目更新加载速度***  
> ***3、利用TerserPlugin压缩js代、OptimizeCSSAssetsPlugin压缩css代码、HtmlWebpackPlugin压缩html代码***  
> ***4、利用 tree shaking也就是数摇，对没用到的代码进行删减，缩小项目体积***

***

## 12) 说一下浏览器的协商缓存和强缓存区别
**浏览器缓存的优点有：**
> ***1.减少了冗余的数据传输，节省了网费  
> 2.减少了服务器的负担，大大提升了网站的性能  
> 3.加快了客户端加载网页的速度***

### 浏览器缓存主要有两类：缓存协商和彻底缓存，也有称之为协商缓存和强缓存。

- 1.强缓存：不会向服务器发送请求，直接从缓存中读取资源，在chrome控制台的network选项中可以看到该请求返回200的状态码;

- 2.协商缓存：向服务器发送请求，服务器会根据这个请求的request header的一些参数来判断是否命中协商缓存，如果命中，则返回304状态码并带上新的response header通知浏览器从缓存中读取资源；

> 两者的共同点是，都是从客户端缓存中读取资源；区别是强缓存不会发请求，协商缓存会发请求。

- 强缓存：两个字段控制： Expires 和 Cache-Control
Expires 是以前用来控制缓存的http头，Cache-Control是新版的API。 现在首选Cache-Control。 如果在Cache-Control响应头设置了"max-age" 或者"s-max-age" 指令，那么Expires 头会被忽略

- 协商缓存：两个字段控制：Last-Modified 和 ETag
Last-Modified 和 ETag 的区别：一个是具体的修改时间 一个是一个状态码，通过该状态码访问服务器是否是最近资源 如果是就返回304

> ***不同点：执行时间不同，一开始是强缓存（本地缓存）如果 强缓存过期 然后才是协商缓存（304）***

***


## 13) seesion、cookie、localstore区别

相同点：
> cookie、sessionStorage和localStorage都用在客户端存储数据，每一个都有自己的存储和到期限制

不同点：
>一、存储大小  
cookie数据大小不能大于4K；
localStorage和sessionStorage则可以达到5M

>二、有效时间  
具体来说，Web Storage又分为两种:  
***1、sessionStorage：将数据保存在session对象中。所谓session，是指用户在浏览某个网站时，从进入网站到浏览器关闭所经过的这段时间，也就是用户浏览这个网站所花费的时间。session对象可以用来保存在这段时间内所要求保存的任何数据。  
2、localStorage：将数据保存在客户端本地的硬件设备(通常指硬盘，也可以是其他硬件设备)中，即使浏览器被关闭了，该数据仍然存在，下次打开浏览器访问网站时仍然可以继续使用。***
这两者的区别在于，sessionStorage为临时保存，而localStorage为永久保存。

总结：

> cookie在设置的有效期内一直有效；  
> localStorage存储持久数据，只要不手动清除则一直存在；  
> sessionStorage数据在当前浏览器关闭后就会被自动清除


***

## 14)  webpack概念

> webpack是模块打包机，处理依赖关系，压缩合并，请求合并。
-  entry :入口 webpack在打包或构建时，就是从入口开始，可以理解输入。
- module :模块 在webpack看来，一切都是模块，一个文件就是一个模块，webpack会从入口开始查找出所有模块有些模块webpack并不能处理，需要交给不同的loader来处理。
- loader: 模块转换器 用于将模块中原始的内容转换成新的内容。
- plugin : 扩展插件 在webpack构建流程中，需要在特定的时机注入扩展逻辑，来改变构建结构或做我们想做的事件。
- output : 输出结果 给过webpack处理完，得到一个新的打包文件。


###   执行过程
> webpack在启动后从Entry开始，递归解析出所有依赖的Module，每找到一个Module,就会根据我们配置的loader去找对应的转化规则，对Module进行转化换后，再解析出当前Module依赖的其它的Modul,这些Module会以Entry为单位进行分组，一个Entry及其它所有依赖的Module被分到一个组，这一组，也叫chunk，最后webpack会将所有的chunk转换成文件输出。在整个过程中，webpack会在合适的时机，执行plugin里面定义的逻辑。

***

## 15) 什么是bundle? 什么是chunk？ 什么是module？

- chunk: 代码块 一个chunk可能有很多的模块构造 用于代码的合并和分割
- module：模块 在webpack世界中，一切都是模块 一个文件就是一个模块 webpack会从 entry开始查找出项目所有的依赖的模块
- bundle: webpack打包后生成的文件

***

## 16) 什么是loader ? 什么是Plugin ? loader和plugin有什么区别？

### webapck默认只能打包JS和JOSN模块，要打包其它模块，需要借助loader，loader就可以让模块中的内容转化成webpack或其它laoder可以识别的内容。
> loader就是模块转换化，或叫加载器。不同的文件，需要不同的loader来处理。

> plugin是插件，可以参与到整个webpack打包的流程中，不同的插件，在合适的时机，可以做不同的事件。


###   常见的loader有哪些？ 你用的loader有哪些？它们有解决什么问题？

> - css-loader:加载css模块 转换成模块化的css 让webpack识别它  
> - style-loader:把css代码注入到js中，通过DOM操作去加载CSS 把css代码放到了header标签中style标签中  
> - babel-loader ?*把JS高阶转成JS低阶 pollyfill  
> - eslint-loader:检查JS代码是否符合某个规则  
> - file-loader:把文件输出到一个文件夹中，在代码中通过URL引用输出的文件
> - url-loader:和file-loader类似，比file-loader强大一个，让小图片直接生成base64  
> - less-loader:把less代码转化css代码  
> - html-loader:处理html模块中的插件图片等

***

## 17) webpack中都有哪些插件plugin，这些插件有什么作用？

> - html-webpack-plugin自动创建一个HTML文件，并把打包好的JS插入到HTML文件中  
> - clean-webpack-plugin在每一次打包之前，删除整个输出文件夹下所有的内容  
> - mini-css-extrcat-plugin抽离CSS代码，放到一个单独的文件中  
> - optimize-css-assets-plugin压缩css

***

## 18) 前端安全防范

  ### (18-1) 请简述XSS的原理
  > 跨站脚本攻击, 用户的数据, 数据可能是文章或评论或浏览器访问时候的某个参数, 总之是来自用户的数据, 最后被当做脚本在页面中执行, 执行的地方可能在script标签或其他标签的属性或富文本中等等… 最根本的是本来是个数据被当成了脚本变成了程序

  ### (18-2) 请简述XSS的防御方法
  > 两种思路: 不要让其变成程序, 这个数据变成程序的话不让它执行

  > 浏览器内置了对反射型XSS的防御, 当它检测到有反射型xss的时候会进行拦截
对数据进行适当转义, 包括在正文中的转义, 属性中的转义, 脚本中的转义, 转义的字符包括大于号小于号单双引号以及and号等等
针对不能对html标签全部过滤或转义的情况, 比如富文本, 因为富文本的样式是靠html标签产生的, 这种情况只能使用白名单进行过滤, 就是把这段代码解析成具体的html树, 对树进行分析哪些可以保留, 最后变成html字符串
使用csp指定哪些内容可以执行, 哪些不能执行

 ### (18-3) CSRF的原理及其危害是什么
 > 浏览器在访问服务器的时候会带上cookie, 而第三方网站通过图片或表单提交方式也会带上cookie, 带上的过程中表示我知道用户身份, 利用身份进行操作, 而这个过程中用户不知情. 危害是冒名发帖, 冒名消费等等

 ### (18-4) CSRF如何防御
 > - 不让第三方请求带cookie, 主要通过same-site这个属性, 但是会有兼容性问题  
 > - 第二种方式是增加用户的感知, 比如验证码, 不让静默操作  
 > - 第三种方式增加token, 第三方访问时没法读取cookie  
 > - 第四种方式判断refer, 来源是否来自第三方网站

***

 ## 19) jq的链式和promise的链式有什么不同
 > jq的链式函数最后return的都是this，返回当前作用域，promise的then链式都是返回一个新的promise

***

## 20) 说一下事件循环
 > js是单线程语言，通过eventLoop实现事件循环，在一次事件循环中，会先执行当前循环的宏任务，再执行微任务，宏任务有例如settimeout，微任务有例如promise.then，如果宏任务里面有异步任务，会把异步任务推到异步队列，然后执行微任务，一次循环中的任务执行完就是一次完整的事件循环

 ***

## 21) vue响应原理
> 2.0是通过api Object.defineProperty+发布订阅的设计模式实现的响应原理，这个api有局限性无法检测到object元素和数组元素的变化，所以vue会有修改数组视图不刷新的问题，3.0改成Proxy+发布订阅的设计模式实现的绑定，proxy可以直接代理整个object和数组，所以不会出现无法检测数组元素变化的情况

***

## 22)说一下https

### 三次握手简易说明
 - 第一步： 客户端向服务器发送HTTPS请求，服务器将公钥以证书的形式发送到客户端（服务器端存放私钥和公钥）。

 - 第二步：浏览器生成一串随机数，然后用公钥对随机数和hash签名进行加密，加密后发送给服务器；服务器用私钥解密，取出字符串和hash签名再通过私钥加密后发送给客户端。

 - 第三步：客户端用公钥对密文进行解密并判断是否被篡改，如果没有篡改，客户端向服务器端发出信息，协商后面的数据通讯将使用生成的随机字符串做为秘钥进行对称密钥，同时通知服务器握手结束。服务器接受到信息后，响应协商的加密秘钥并通知客户端握手结束。

### 三次握手详细说明

 - **第一次握手：主机A发送位码为syn＝1,随机产生seq number=1234567的数据包到服务器，主机B由SYN=1知道，A要求建立联机；**
 - **第二次握手：主机B收到请求后要确认联机信息，向A发送ack number=(主机A的seq+1),syn=1,ack=1,随机产生seq=7654321的包**
 - **第三次握手：主机A收到后检查ack number是否正确，即第一次发送的seq number+1,以及位码ack是否为1，若正确，主机A会再发送ack number=(主机B的seq+1),ack=1，主机B收到后确认seq值与ack=1则连接建立成功**
> 简而言之：  
> 第一次握手：客户端向服务端发送信息。当服务端接收到信息后，服务端可以明确接收功能是正常的  
> 第二次握手：服务端向客户端发送信息作为应答。当客户端接收到信息后，客户端可以明确发送和接受功能都正常。  
> 第三次握手：客户端向服务端发送信息，当服务端接收到信息后，服务端可以明确发送功能是正常的。  
> 通过三次握手，就能明确双方的收发功能均正常，也就是说，保证了建立的连接是可靠的。而且，由上可见，三次是确保连接可靠的最少次数，再就多余。



### 四次挥手

- （ 1 ）客户端 A 发送一个 FIN ，用来关闭客户 A 到服务器 B 的数据传送。
- （ 2 ）服务器 B 收到这个 FIN ，它发回一个 ACK ，确认序号为收到的序号加 1 。和 SYN 一样，一个FIN 将占用一个序号。
- （ 3 ）服务器 B 关闭与客户端 A 的连接，发送一个 FIN 给客户端 A 。
- （ 4 ）客户端 A 发回 ACK 报文确认，并将确认序号设置为收到序号加 1 。

### 为什么连接的时候是三次握手，关闭的时候却是四次握手？
> **因为当Server端收到Client端的SYN连接请求报文后，可以直接发送SYN+ACK报文。其中ACK报文是用来应答的，SYN报文是用来同步的。但是关闭连接时，当Server端收到FIN报文时，很可能并不会立即关闭SOCKET，所以只能先回复一个ACK报文，告诉Client端，“你发的FIN报文我收到了”。只有等到我Server端所有的报文都发送完了，我才能发送FIN报文，因此不能一起发送。故需要四步握手。**

***


 ## 23)  从输入网址发生了什么
  ### 1. 输入阶段
  > 输入第一个字符开始，浏览器会检索历史记录，显示匹配的地址(如果有的话)
  输入完毕之后，浏览器会根据URL的规则判断输入的内容是搜索内容还是URL，如果是搜索内容，则回车之后通过默认的搜索引擎，拼接url跳转。如果是URL，则会加上协议(如果缺少的情况下)，拼成完成的URL进行访问

  ### 2. URL请求阶段
  > - 浏览器通过进程间的通信(IPC)把URL请求发送到网络进程，网络进程发起真正的URL请求。  
  > - 发起请求前，网络进程根据请求的URL查询是否缓存了该资源。如果有，那么直接返回资源给浏览器进程；如果没有，会进程DNS解析。  
  > - 首先查看浏览器是否对该域名有缓存，然后是hosts文件，如果都没有，则需要请求域名服务器进行查询。如果协议请求是HTTPS，还需要建立TLS连接。  
  > - 接下来就是通过IP地址和服务器建立TCP连接(三次握手)，连接之后，浏览器会构造请求行、请求头，向服务器发送构建的请求信息。

 ### 3. 服务端阶段
 #### 3.1 服务端重定向
> 有些服务端会把http重定向到https，这时，服务端会返回301或者302的状态码，并提供一个Location的响应头，这时浏览器会重新发起上述第二步开始进行。

#### 3.2 响应数据类型
> 通过Content-type来区分是文件还是文本。  
> - **text/html HTML格式**  
> - **application/octet-stream 字节流**


### 4 连接阶段
#### 4.1 等待TCP连接
> http/1.1 一个tcp同时只能处理一个请求，浏览器会为每个域名维护6个tcp连接！ 但是每个tcp连接是可以复用的，也就是处理完一个请求之后，不断开这个tcp连接，可以用来处理下个http请求！ 不过http2是可以并行请求资源的，所以如果使用http2，浏览器只会为每个域名维护一个tcp连接

#### 4.2断开连接
> 通常情况，一但服务端向客户端返回了数据，就要关闭TCP连接，不过可以通过添加头信息保持通道打开状态Connection:Keep-Alive


### 5. 预渲染阶段
#### 5.1 准备渲染进程
##### 5.1.1浏览器进程将网路进程接受到HTML数据提交给渲染进程。

> 网络进程将资源下载完毕之后，告诉浏览器进程
浏览器进程向渲染进程发送“提交文档”的消息
渲染进程和网络进程建立传输数据的“管道”
文档数据传输完毕之后，渲染进程告诉浏览器进程“确认提交”的消息
浏览器进程更新UI界面中的状态，比如安全状态、地址栏的URL、前进后退的历史状态


### 6. 渲染阶段
#### 6.1 构建DOM树
> 将HTML转为浏览器认识的DOM树,保存在内存中树状结构

#### 6.2 样式计算
> 渲染引擎把CSS转为浏览器可以理解的结构——styleSheets
转换演示表中的属性值，使其标准化


***

## 24)浏览器渲染流程
 - **1.用户输入域名，然后DNS解析成IP地址**   
 - **2.浏览器根据IP地址请求服务器**
 - **3.服务器响应http请求，并返回给浏览器**  
 - **4.浏览开始渲染：**  
> - 根据html，生成DOM TREE  
> - 根据css，生成CSS TREE  
> - 将DOM TREE和CSS TREE结合生成Render Tree  
> - 根据Render Tree渲染页面  
> - 遇到``` <script> ```则暂停渲染，优先执行js，然后再继续渲染（因为js执行和渲染引擎公用一个进程，原因是js可能做了一些dom操作，一般会把js放到页面的底部）  
> - 直至把Render Tree渲染页面

***

## 24)说一下重绘、回流
  > **回流（reflow，也叫重排、布局）：某部分的变化影响了布局，浏览器需要重新渲染。（如元素大小、位置的改变）**  
  > **重绘（repaint）：元素的某一部分发生改变，尺寸、位置没有改变。（字体颜色、背景颜色的改变）**

  ### 引起回流的几个主要原因：

- 网页初始化

- JS操作DOM树（增加、删除元素等）

- 某些元素的尺寸改变

- CSS属性的改变

***

## 25）防抖节流
### 1. 防抖策略
> 防抖策略(debounce)是当事件被触发后,延迟n秒后再执行回调函数,如果在这n秒内事件被再次触发,则重新计时.

***好处是:它能够保证用户在频繁触发某些事件的时候,不会频繁的执行回调,只会被执行一次.***

### 防抖的应用场景:

> **用户在输入框连续输入一串字符时,可以通过防抖策略,只在输入完后,才执行查询的请求,这样可以有效减少请求次数,节约请求资源.**


### 2. 节流策略
> 节流策略(throttle),可以减少一段时间内事件的触发频率.

### 节流策略的应用场景:

> - **鼠标不断触发某事件时,如点击,只在单位事件内触发一次.**  
> - **懒加载时要监听计算滚动条的位置,但不必要每次滑动都触发,可以降低计算频率,而不必要浪费CPU资源.** 

***

## 26）js数字精度丢失问题0.1+0.2!==0.3
>  **原因：js的number采用浮点数运算，会转成二进制计算，二进制小数点的偏移量最大为52位，这是js最多能表示的精度**
>   
>  ***解决办法：把小数点转成整数再运算，或者使用第三方插件如Math.js、BigDecimal.js***

***

## 27) vue中v-if和v-for优先级？
> **2.0是v-for优先级高，3.0是v-if优先级高**

***

## 28)都有哪些传值方式
### 从最常用-不常用排序   

> - **父-子 props   子-父 emits**  
> - **父-子  子组件写ref，通过ref名调用子组件的函数或者属性    子-父 $parent  通过parent可以获父组件实例 ，然 后通过这个实例就可以访问父组件的属 性和方法 。**  
> - **父-子-孙  provide设置数据    子组件或者孙组件通过inject获取数据**  
> - **祖-孙  attrs   孙-祖  $listeners**  
> - **此外还有vuex共享状态、公共bus共享等方式传值**

***

## 29) vue2.0和vue3.0的区别
> - **vue2.0中不管数据多大，都会在一开始就为其创建观察者；当数据很大时，这可能会在页面载入时造成明显的性能压力。而vue3.0只会对“被用于渲染初始可见部分的数据”创建观察者，而且vue3.0的观察者更高效**  
> - **vue2采用的是面向对象编程，vue3采用函数式编程**  
> - **vue3修改了细腻dom算法，只针对变化的层进行diff，而vue2是对所有的dom进行diff**  
> - **数据双向绑定vue2使用的是definedOroperty，vue3使用的是proxy**  
> - **vue3是组合式思想，2.0是继承思想，组合优于继承**

***

## 30)为什么vue3要换成proxy？
 > - **使用proxy不污染源对象，会返回一个新对象，defineProperty是注入型的，会破坏源对象。**  
 > - **使用proxy只需要监听整个源对象的属性，不需要循环使用Object.definedProperty监听对象的属性。**  
 > - **使用proxy可以获取到对象属性的更多参数，使用definedProperty只能获取到监听属性的新值newValue。**

*** 

## 31) vue路由跳转抖动原因以及如何解决
> - **原因：其实就是因为路由跳转时有过度效果导致的在跳转的时候上一个路由还占着位置，所以把你布局顶下去了，然后页面跳转完了之后他占位消失，你的布局恢复原状。但是这样虽然只有一秒不到的时间，也造成了布局上下闪了一次，看着就很难受。所以我们想的办法也很简单，就是让他上一个路由消失的时候别占着位置顶我下一个路由的布局不就好了。**   
> - ***解决方案在你的css中找到fade-leave-to这个属性，然后加 display: none;让跳转的页面不占位就行了。***

***

## 32）methods和computed区别？
> **methods没有缓存，每次都会重新计算，computed会有缓存，如果数据没更新则不会重新计算**

***

## 33） vue和react的区别?

 ### 一、核心思想不同
> - **Vue的核心思想是尽可能的降低前端开发的门槛，是一个灵活易用的渐进式双向绑定的MVVM框架。**
> - **React的核心思想是声明式渲染和组件化、单向数据流，React既不属于MVC也不属于MVVM架构。**

### 二、组件写法上不同
> - **Vue的组件写法是通过template的单文件组件格式。**
> - **React的组件写法是JSX+inline style，也就是吧HTML和CSS全部写进JavaScript中。**

### 三、Diff算法不同
> - **vue对比节点，如果节点元素类型相同，但是className不同，认为是不同类型的元素，会进行删除重建，但是react则会认为是同类型的节点，只会修改节点属性。**
> - **vue的列表比对采用的是首尾指针法，而react采用的是从左到右依次比对的方式，当一个集合只是把最后一个节点移动到了第一个，react会把前面的节点依次移动，而vue只会把最后一个节点移动到最后一个，从这点上来说vue的对比方式更加高效。**

### 四、响应式原理不同
> - **React主要是通过setState()方法来更新状态，状态更新之后，组件也会重新渲染。**
> - **vue会遍历data数据对象，使用Object.definedProperty()将每个属性都转换为getter和setter，每个Vue组件实例都有一个对应的watcher实例，在组件初次渲染的时候会记录组件用到了那些数据，当数据发生改变的时候，会触发setter方法，并通知所有依赖这个数据的watcher实例调用update方法去触发组件的compile渲染方法，进行渲染数据。**

***

## 34) vuex怎么修改同步、异步数据？
> - **修改同步数据的函数写在Mutation里面，通过commit调用该函数**
> - **修改异步数据写在Action里面，通过dispatch来调用异步函数，再调用Mutation里面的函数来修改数据**

***

## 35） vue-router传值的两种方式
``` javascript
 /** 命名的路由，并加上参数，让路由建立 url */

 router.push({ name: 'user', params: { username: 'eduardo' } })
 ```

``` javascript
/** 带查询参数，结果是 /register?plan=private   */
router.push({ path: '/register', query: { plan: 'private' } })
```

***

## 36）elemet有哪些坑？
> - **在 el-tree 标签上设置动态设置一个 key 会导致 filter 功能失效，为了避免 vue 的“就地复用原则”所以需要在每次关闭弹窗或者其他情况需要使用 setCheckedKeys([]) 来手动清空**  
> - **用官网上提供的autoplay不起作用，将interval设置为0方可**  
> - **使用el-select 不能继承父元素的宽度** 
***原因：el-select 本身是  inline-block***
**解决办法：给el-select 元素加行内 控制其宽度**

***

## 37）babel原理
### babel的转移过程分为三个阶段，这三个步骤分别是：
- **解析parse:将代码解析生成抽象语法树（AST）,即词法分析和语法分析的过程。**
- **转换Transform:对于AST进行变换的一些列的操作，babel接收得到的AST并通过babel-traverse对其进行遍历，在此过程中进行添加，更新以及移除等操作。**
- **生成Generate:使用模块babel-generator。将变换后的AST再转换为JS代码**

***

## 38） npm原理

> **待添加**

***

## 39） ts的type和interface有什么区别
> **type只能定义基本类型比如bool，interface可以定义复杂类型比如object，array**

***

## 40）单页面首屏加载缓慢原因以及解决方案
### 原因：
> - **由于vendor.js和app.css较大，UI渲染线程并不会优先加载他俩，但是VUE等主流的单页面框架都是js渲染html body的,所以必须等到vendor.js和app.css加载完成后完整的界面才会显示。**
> - **还有一个原因就是单页面首次会把所有界面和接口都加载出来，会有多次的请求和响应，数据不能马上加载**

### 解决方案
> - ***路由懒加载，初次渲染只加载必要的路由页面，减少请求次数***
> - ***gzip压缩和cdn加载，解决原因2后我们发现加载并不一定会太快，因为vendor.js和app.css还是相对较大，有两种方式缩小***
> - **1、后台对nginx的nginx.conf进行配置，对指定文件类型进行压缩，前端在config中设置productionGzip属性为true**
> - **2、对一些编译在vendor文件的插件比如vuex等，可以通过cdn的方式引入，来进一步缩减文件的大小**

***
## 41）http的请求头都有哪些
> -  **Accept	告诉服务器自己允许哪些媒体类型	Accept: text/plain**
> - **Accept-Charset	浏览器申明可接受的字符集	Accept-Charset: utf-8**
> - **Accept-Encoding	浏览器申明自己接收的编码方法	Accept-Encoding: gzip, deflate**
> - **Accept-Language	浏览器可接受的响应内容语言列表	Accept-Language: en-US**
> - **Authorization	用于表示 HTTP 协议中需要认证资源的认证信息	Authorization: Basic OSdjJGRpbjpvcGVul ANIc2SdDE==**
> - **Expect	表示客户端要求服务器做出特定的行为	Expect: 100-continue**
> - **From	发起此请求的用户的邮件地址	From: user@itbilu.com**
> - **Host	表示服务器的域名以及服务器所监听的端口号	Host: www.itbilu.com:80**
> - **Referer	表示浏览器所访问的前一个页面，可以认为是之前访问页面的链接将浏览器带到了当前页面	Referer: http://itbilu.com/nodejs**

***

## 42）call、apply、bind
### **call**
```javascript
当前实例(函数fn)通过原型链的查找机制，找到function.prototype上的call方法，function call(){[native code]}

把找到的call方法执行
当call方法执行的时候，内部处理了一些事情
1.首先把要操作的函数中的this关键字变为call方法第一个传递的实参
2.把call方法第二个及之后的实参获取到
3.把要操作的函数执行，并且把第二个以后传递进来的实参传递给函数
```

### **apply**
```javascript
apply：和call基本上一致，唯一区别在于传参方式
apply把需要传递给fn的参数放到一个数组（或者类数组）中传递进去，虽然写的是一个数组，但是也相当于给fn一个个的传递
fn.call(obj, 1, 2);
fn.apply(obj, [1, 2]);
```

### **bind**
```javascript
bind：语法和call一模一样，区别在于立即执行还是等待执行，bind不兼容IE6~8
fn.call(obj, 1, 2); // 改变fn中的this，并且把fn立即执行
fn.bind(obj, 1, 2); // 改变fn中的this，fn并不执行
```

***

## 43) js的显式原型和隐式原型？原型链是什么？为什么要有原型链？
**显式原型**：*prototype*  
**隐式原型**：*__ proto__*

### 1.显式原型和隐式原型是什么？
```javascript
在js中万物皆对象，方法(Function)是对象，方法的原型（Function.prototype）是对象，对象具有属性（__ proto__）称为隐式原型，对象的隐式原型指向构造该对象的构造函数的显式原型 （prototype）。

方法(Function)是一个特殊的对象，除了和其他对象一样具有__proto__属性以外，它还有一个自己特有的原型属性(prototype)，这个属性是一个指针，指向原型对象。原型对象也有一个属性叫constructor，这个属性包含一个指针，指向原构造函数
```

> - 注意：通过Function.prototype.bind方法构造出来的函数没有prototype属性。
> - 注意：Object.prototype.这个对象的是个例外，它的__proto__值为null。

### 2.二者的关系
> 隐式原型指向创建这个对象的构造函数的prototype


### 3.二者的区别
> **prototype:专属于函数的一个属性，类型为对象，叫原型对象；**  
**作用：为了给将来自身所在的构造函数被new出来的实例做父级使用的**  

> **__ proto__：专属于对象数据的一个属性，类型为对象，叫隐士原型，**  
**作用：找父级**

>特性  
>- 当某个对象自身不具有某个属性或方法时，会找父级
>- 当这个对象是被new出来的实例时，这个对象的父级（__ proto__）就是当前被new出来的构造函数的prototype

```javascript
let fn = function (){
    
}
let aa = new fn()
console.log(aa.__proto__===fn.prototype)
VM1264:5 true
```

```javascript
function Fn(){};
var f = new Fn();
var f2 = new Fn();
Fn.prototype.constructor === Fn;
f.__ proto__ === Fn.prototype;
f.__ proto__.constructor === Fn;
f.__ proto__ === f2.__ proto__ ;
f2.__ proto__ === Fn.prototype;
```

## 44）解释box-sizing:border-box作用？好处？
> 将border和padding数值包含在width和height之内，这样的好处就是修改border和padding数值盒子的大小不变。


## 45)css垂直居中
- ### 1
```javascript
.child{
  position:relative;
  top:50%;
  transform:translateY(-50%)
}
```

- ### 2
```javascript
.parent{
 position:relative;
}
.child{
  position:absolute;
  top:50%;
  transform:translateY(-50%)
}
```

- ### 3
```javascript
.parent{
 display:flex;
}
.child{
  justify-content:center;
  align-items:center;
}
```

- ### 4
```javascript
.parent{
  display:table;
}
.child{
  display:table-cell;
  vertical-align:middle;
}
```

## 46) html5有哪些新增特性?

  > ### canvas元素
  
  > ### 表单元素

  #### 新增的表单元素

- **```<datalist>```：元素规定输入域的选项列表，使用```<input>```元素的list元素与```<datalist>```**

- **```<keygen>```：提供一种检验用户的可靠方法，标签规定用于表单的密钥对生成器字段**

- **```<output>```：用于不用类型的输出，比如计算或脚本输出**

#### 新增的表单属性

- **placehoder属性：简短的提示在用户输入值前会显示在输入域上，既默认框提示**

- **pattern属性：描述了一个正则表达式用于验证```<input>```元素的值***

 - **autofocus属性：是一个boolean属性，在页面加载时自动获得焦点**

 - **multiple属性：是一个boolean属性，规定```<input>```元素中选择多个值**

### 新增拖拽api、audio和video标签api，canvas、localstorage、webworker多进程


## 47）css3新特性
### 伪类选择器
- **:root**
- **:not**
- **:only-child**
- **:first-child和：last-child**
- **:nth-child(n)和：nth-last-child(n)**
- **nth-of-type(n) 和:nth-last-of-type(n)**
- **target**
- **:empty**

### 边框与圆角
- **CSS3圆角 border-radius**
- **盒阴影 box-shadow**
- **边框图像 border-image**

### CSS3背景与渐变
 - **background-image：设置一个元素的背景图像。**
 - **background-origin：规定 background-position 属性相对于什么位置来定位。**
 - **background-clip：规定背景的绘制区域。**
 - **linear-gradient()：线性渐变。**
 - **radial-gradient()：径向渐变。**

### CSS3过渡 transition
#### 定义：允许css的属性值在一定时间区间内平滑的过渡，在鼠标点击，鼠标滑过或对元素任何改变中触发，并圆滑地以动画形式改变css的属性值。


### css3变换 transform 
#### 定义：让一个元素在一个坐标系统中变形，这个属性包含一系列的变形函数，可以移动，旋转，缩放元素。

### css3动画 animation
#### 定义：使元素从一种样式逐渐变化到另外一种样式的效果。



## 48）css3画一个三角

```javascript
.triangle{
		 	border-left:50px solid transparent;
			border-right:50px solid transparent;
			border-bottom:50px solid #333;
			width:0;
			height:0;
	}
```

## 49) vue父子组件执行顺序
```javascript
挂载阶段
父beforeCreate -> 父created -> 父beforeMount -> 子beforeCreate -> 子created -> 子beforeMount -> 子mounted -> 父mounted



更新阶段
父beforeUpdate -> 子beforeUpdate -> 子updated -> 父updated


销毁阶段
父beforeDestroy -> 子beforeDestroy -> 子destroyed -> 父destroyed
```

## 50） keep-live原理
### 在具体实现上，keep-alive在内部维护了一个key数组和一个缓存对象
```javascript
//keep-alive 内部声明周期函数
  created () {
    this.cache = Object.create(null)
    this.keys = []
  },
```
  **key数组记录目前缓存的组件key值，如果组件没有指定key值，会自动生成一个唯一的key值**
  **cache对象会以key值为键，vnode为值，用于缓存组件对应的虚拟DOM**
**在keep-alive的渲染函数中，其基本逻辑是判断当前渲染的vnode是否有对应的缓存，如果有，会从缓存中读取到对应的组件实例，如果没有就会把它缓存。**

**当缓存的数量超过max设置的数值时，keep-alive会移除key数组中的第一个元素**
```javascript
//keep-alive 有三个属性
  1.include ：记录的是哪些组件可以被缓存

  2.exclude:   记录了哪些组件不能被缓存

  3.max: 记录的是可以缓存组件的最大数量
```

## 51） 常见的几种设计模式

### - **外观模式（Facade Pattern）**
### - **代理模式（Proxy Pattern）**
### - **工厂模式（Factory Pattern）**
### - **单例模式（Singleton Pattern）**
### - **策略模式（Strategy Pattern）**
### - **迭代器模式（Iterator Pattern）**
### - **观察者模式（Observer Pattern）**
### - **中介者模式（Mediator Pattern）**
### - **访问者模式（Visitor Pattern）**


