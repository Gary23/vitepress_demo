import{_ as s,c as a,o as i,a4 as e}from"./chunks/framework.CDj16EJy.js";const g=JSON.parse('{"title":"01_hello_react","description":"","frontmatter":{},"headers":[],"relativePath":"react/react基础/01_hello_react.md","filePath":"react/react基础/01_hello_react.md"}'),t={name:"react/react基础/01_hello_react.md"},l=e(`<h1 id="_01-hello-react" tabindex="-1">01_hello_react <a class="header-anchor" href="#_01-hello-react" aria-label="Permalink to &quot;01_hello_react&quot;">​</a></h1><p>引入 <a href="./js/react.development.js">react_development.js</a>、<a href="./js/react-dom.development.js">react-dom.development.js</a>、<a href="./js/babel.min.js">babel.min.js</a></p><p>渲染：<code>ReachDOM.render(虚拟DOm, 容器)</code></p><p>script标签的type要写为<code>text/babel</code></p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ikyBv" id="tab-aI8K9Zk" checked><label for="tab-aI8K9Zk">html</label><input type="radio" name="group-ikyBv" id="tab-DoPUO_l"><label for="tab-DoPUO_l">js</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1. 创建虚拟dom</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 此处不是字符串是虚拟dom  所以直接写标签</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> VDOM</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Hello, React&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2. 渲染虚拟dom到页面   ReachDOM.render(虚拟DOm, 容器)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ReactDOM.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VDOM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre></div></div></div>`,5),h=[l];function n(p,k,d,r,c,o){return i(),a("div",null,h)}const _=s(t,[["render",n]]);export{g as __pageData,_ as default};
