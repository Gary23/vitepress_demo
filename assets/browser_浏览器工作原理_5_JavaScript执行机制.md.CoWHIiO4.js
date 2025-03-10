import{_ as a,c as s,o as n,a4 as p,al as l,am as e}from"./chunks/framework.CX4ixmjU.js";const m=JSON.parse('{"title":"JavaScript执行机制","description":"","frontmatter":{},"headers":[],"relativePath":"browser/浏览器工作原理/5_JavaScript执行机制.md","filePath":"browser/浏览器工作原理/5_JavaScript执行机制.md"}'),i={name:"browser/浏览器工作原理/5_JavaScript执行机制.md"},t=p('<h1 id="javascript执行机制" tabindex="-1">JavaScript执行机制 <a class="header-anchor" href="#javascript执行机制" aria-label="Permalink to &quot;JavaScript执行机制&quot;">​</a></h1><h2 id="javascript-代码的执行流程" tabindex="-1">JavaScript 代码的执行流程 <a class="header-anchor" href="#javascript-代码的执行流程" aria-label="Permalink to &quot;JavaScript 代码的执行流程&quot;">​</a></h2><p>一段js代码在执行之前需要被js引擎编译，编译完成后进入执行阶段</p><p>一段js代码通常指：全局代码、函数体内的代码、使用eval函数的代码</p><p><img src="'+l+'" alt="js的执行流程图"></p><ol><li><p>编译阶段</p><ul><li><p>代码经过编译后，会生成两部分内容：<strong>执行上下文和可执行代码</strong></p></li><li><p>执行上下文存在一个<strong>变量环境对象</strong>，对象中保存了<strong>变量提升的内容</strong></p></li></ul><p><img src="'+e+`" alt="js编译阶段"></p></li><li><p>执行阶段</p><ul><li>js引擎开始执行“可执行代码”，按照顺序一行行的执行</li></ul></li></ol><h2 id="调用栈" tabindex="-1">调用栈 <a class="header-anchor" href="#调用栈" aria-label="Permalink to &quot;调用栈&quot;">​</a></h2><ul><li><p>函数调用后创建该函数的执行上下文和可执行代码，创建后就加入调用栈</p></li><li><p>调用栈就是用来管理函数调用关系的一种数据结构，栈中的元素满足后进先出的特点，js引擎利用栈的这种结构来管理执行上下文</p></li><li><p>调试时，可以通过打断点后再Call Stack选项中查看当前的调用栈情况（最底部的anonymous是全局的函数入口）；也可以通过<code>console.trace()</code>来输出当前的函数调用关系</p></li><li><p>调用栈有大小限制，当入栈的执行上下文超过一定数目，js引擎就会报错，这就是栈溢出（Stack Overflow）</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>创建全局上下文，压入栈底 [ 全局执行上下文 ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>代码执行中调用了a函数，压入栈中 [ 全局执行上下文, a函数执行上下文 ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>a函数的执行中调用了b函数，压入栈中  [ 全局执行上下文, a函数执行上下文, b函数执行上下文 ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>b函数执行return后，从栈顶弹出  [ 全局执行上下文, a函数执行上下文 ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>a函数执行return后，从栈顶弹出  [ 全局执行上下文 ]</span></span></code></pre></div><ul><li><p>当遇到闭包的时候，调用函数return之后，函数的执行上下文虽然出栈，但是这个函数的闭包会存在栈中，通常叫做Closure，Closure保存的就是闭包中用到的变量</p></li><li><p>当js回收机制人为闭包内容已经不再被使用了，就会销毁这个Closure</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>创建全局上下文，压入栈底 [ 全局执行上下文 ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>foo函数中声明了a变量，return了setA的方法，方法内修改a变量的值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>调用foo函数，foo压入栈中 [ 全局执行上下文, foo函数执行上下文 ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>用test接收返回值，foo函数执行return后，从栈顶弹出，但是闭包还在栈中，闭包中存储变量a [ 全局执行上下文, Closure(foo) ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>调用test.setA函数，压入栈中 [ 全局执行上下文, Closure(foo), setA函数执行上下文 ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>test.setA函数执行return后，从栈顶弹出 [ 全局执行上下文, Closure(foo) ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>给test赋值为null，闭包不能再被使用  [ 全局执行上下文 ]</span></span></code></pre></div><h2 id="this" tabindex="-1">this <a class="header-anchor" href="#this" aria-label="Permalink to &quot;this&quot;">​</a></h2><p>this 通常是指的 全局执行上下文的this、函数执行上下文的this、eval函数执行的this（不在此讨论）</p><p>全局执行上下文的this是指的window对象</p><p>函数执行上下文的this指向比较复杂：</p><ul><li><p>全局函数执行上下文同样指向this，但是也可以通过其他方法设置（call、apply、bind）</p></li><li><p>如果使用一个对象来调用一个函数，那函数执行上下文的this指向就是该对象本身</p></li><li><p>箭头函数不会创建自身的执行上下文，它的上下文取决于外部函数</p></li></ul>`,16),o=[t];function r(c,h,d,u,_,v){return n(),s("div",null,o)}const f=a(i,[["render",r]]);export{m as __pageData,f as default};
