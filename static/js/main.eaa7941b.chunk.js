(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{20:function(e,t,i){},36:function(e,t,i){},49:function(e,t,i){},50:function(e,t,i){},51:function(e,t,i){},67:function(e,t,i){"use strict";i.r(t);var c=i(0),s=i.n(c),a=i(8),n=i.n(a),r=(i(49),i(50),i(21)),o=i(22),l=i(23),d=i(28),h=i(27),j=i(73),m=i(71),b=(i(51),i(17)),p=i.p+"static/media/menuIcon.eaf28fd5.png",u=i(1),O=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var c;return Object(r.a)(this,i),(c=t.call(this,e)).state={barStyle:"fixed-top navbar-transparent navbar",barShrank:!1},c.resizeHeaderOnScroll=c.resizeHeaderOnScroll.bind(Object(l.a)(c)),c}return Object(o.a)(i,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.resizeHeaderOnScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.resizeHeaderOnScroll)}},{key:"resizeHeaderOnScroll",value:function(){var e=window.pageYOffset||document.documentElement.scrollTop;e>200&&!this.state.barShrank?(this.setState({barStyle:"fixed-top bg navbar"}),this.setState({barShrank:!0})):e<200&&this.state.barShrank&&(this.setState({barStyle:"fixed-top navbar-transparent navbar"}),this.setState({barShrank:!1}))}},{key:"render",value:function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(j.a,{className:this.state.barStyle,expand:"md",children:[Object(u.jsxs)(j.a.Toggle,{"aria-controls":"basic-navbar-nav",children:[" ",Object(u.jsx)("img",{alt:"...",src:p,style:{width:"40px",height:"40px"}})," "]}),Object(u.jsx)(j.a.Collapse,{children:Object(u.jsxs)(m.a,{className:"container",children:[Object(u.jsx)(m.a.Item,{children:Object(u.jsx)(b.Link,{className:"nav-item",to:"home",spy:!0,smooth:!0,offset:-70,duration:500,children:"Home"})}),Object(u.jsx)(m.a.Item,{children:Object(u.jsx)(b.Link,{className:"nav-item",to:"projects",spy:!0,smooth:!0,offset:-70,duration:500,children:"Projects"})}),Object(u.jsx)(m.a.Item,{children:Object(u.jsx)(b.Link,{className:"nav-item",to:"aboutMe",spy:!0,smooth:!0,offset:-70,duration:500,children:"About Me"})}),Object(u.jsx)(m.a.Item,{children:Object(u.jsx)(b.Link,{className:"nav-item",to:"contact",spy:!0,smooth:!0,offset:-70,duration:500,children:"Contact"})})]})})]})})}}]),i}(c.Component),x=(i(36),i.p+"static/media/profile.341d335e.jpg"),v=i.p+"static/media/bg1.41f84a46.png",f=function(){return Object(u.jsxs)("div",{id:"home",className:"page-header",children:[Object(u.jsx)("img",{alt:"...",className:"path",src:v}),Object(u.jsx)("img",{alt:"...",className:"path2",src:v}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"brand",children:[Object(u.jsx)("div",{className:"image",children:Object(u.jsx)("img",{className:"profile",src:x,alt:"..."})}),Object(u.jsx)("h1",{children:"Rohan Dhir"})]})})]})},g=(i(20),function(e){return Object(u.jsxs)("div",{className:"col-md-4",onClick:function(){"Personal Website"!==e.title&&(window.location.href=e.onClick)},children:[Object(u.jsx)("img",{className:"img",alt:"...",src:e.pic}),Object(u.jsx)("h4",{className:"card-title",children:e.title}),Object(u.jsx)("p",{className:"card-content",children:e.content})]})}),N=i(69),w=i(70),k=i(72),S=i.p+"static/media/test.e65513c0.png",y=i.p+"static/media/test2.0e3bd210.png",C=i.p+"static/media/sortingVisualizer_Proj.e5cccbeb.png",A=i.p+"static/media/personalSite_Proj.ccd51ba0.png",z=i.p+"static/media/socialNetwork_Proj.f444e697.png",H=i.p+"static/media/flood_Proj.5d9a8306.png",L=i.p+"static/media/RU-logo.a8834dfa.png",D=i.p+"static/media/reactLogo.3840850e.png",P=i.p+"static/media/camera.ae845d1c.png",M=i.p+"static/media/bilingual.ed19bccb.png",I=[{id:1,title:"Sorting Visualizer",content:"A React App that visualizes sorting algorithms.",pic:C,onClick:"https://github.com/rohan-dhir/Sorting-Visualizer"},{id:2,title:"Product Title Parser",content:"A Java application that parses extraneous details from an input. Ideal for e-commerce.",pic:y,onClick:"https://github.com/rohan-dhir/TitleParser-App"},{id:3,title:"Personal Website",content:"This website! Built with React :)",pic:A,onClick:"/"},{id:4,title:"Social Networking Site",content:"A PHP site to post, like and follow others. Uses MySQL as the database.",pic:z,onClick:"https://github.com/rohan-dhir/Logr"},{id:5,title:"iOS & Android Games",content:"Built a variety of 2D and 3D mobile games using Objective-C and C#.",pic:S,onClick:"/projects"},{id:6,title:"Flood! (React)",content:"A short game based on the popular title 'Flood It!'",pic:H,onClick:"https://github.com/rohan-dhir/Flood-React"}],R=[{id:1,title:"Bachelor of Science (Honours) - Computer Science",description:"Studied Computer Science at Ryerson University in Toronto. Graduated in April 2021. Relevant Courses: Data Structures, Algorithms, and Operating Systems. GPA: 3.0",icon:L},{id:2,title:"Technical Skills",description:"Java \xb7 C# \xb7 Python 3 \xb7 JavaScript (ES6) \xb7 HTML5 \xb7 CSS3 \xb7 PHP \xb7 jQuery \xb7 React/Redux \xb7 Node.js \xb7 GraphQL \xb7 SQL MongoDB \xb7 Git \xb7 Agile (Scrum)",icon:D},{id:3,title:"Interests",description:"Aside from coding, I enjoy photography.",icon:P},{id:4,title:"Bilingual",description:"Able to speak Hindi at a conversational level.",icon:M}],B=[{id:1,title:"Hostile Moon",launched:"2017",downloads:"50+",description:"Some Description here Some Description here Some Description here Some Description here Some Description here",video:"https://www.youtube.com/embed/cucYpb_MY9M?autoplay=1&mute=1",image:"",link:""},{id:2,title:"Leaping Ball",launched:"2017",downloads:"10+",description:"Some Description here",video:"",image:S,link:""},{id:3,title:"Drop of Faith",launched:"2015",downloads:"3.5k",description:"Some Description here",video:"",image:y,link:""},{id:4,title:"Rocket Blast!",launched:"2015",downloads:"10+",description:"Some Description here",video:"",image:S,link:""}],V=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(){var e;Object(r.a)(this,i);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).displayElement=function(e,t){return""===e?Object(u.jsx)(N.a,{src:t,fluid:!0}):Object(u.jsx)("div",{className:"slider-video",children:Object(u.jsx)(w.a,{aspectRatio:"16by9",children:Object(u.jsx)("embed",{type:"image/svg+xml",src:e})})})},e}return Object(o.a)(i,[{key:"render",value:function(){var e=this;return Object(u.jsxs)(k.a,{children:[B.map((function(t){var i=t.id,c=t.title,s=t.launched,a=t.downloads,n=t.description,r=t.video,o=t.image,l=t.link;return Object(u.jsx)(k.a.Item,{className:"carousel",interval:4e3,children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-md-8",children:[Object(u.jsx)("h3",{className:"slider-subtitle",children:c}),e.displayElement(r,o)]}),Object(u.jsx)("div",{className:"col-lg-4",children:Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsxs)("div",{className:"slider-info",children:[Object(u.jsx)("strong",{children:"Launched: "}),s,Object(u.jsx)("br",{}),Object(u.jsx)("strong",{children:"Downloads: "}),a]}),Object(u.jsx)("div",{className:"slider-descr",children:n}),Object(u.jsx)("div",{className:"slider-footer",children:Object(u.jsx)("a",{href:l,className:"btn-icon btn-round btn-github",children:Object(u.jsx)("i",{className:"fab fa-github"})})})]})})]})},i)})),";"]})}}]),i}(c.Component),G=i.p+"static/media/bg3-github.81e95291.png",T=function(){return Object(u.jsxs)("div",{id:"projects",className:"section",children:[Object(u.jsx)("img",{alt:"...",className:"path3",src:G}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"ml-auto mr-auto col-md-8",children:Object(u.jsxs)("div",{className:"section-description text-center",children:[Object(u.jsx)("h2",{className:"title",children:"Featured Projects"}),Object(u.jsx)("p",{className:"description",children:"The following are some of my favourite projects that I've enjoyed working on. Click below to view the rest on my GitHub!"}),Object(u.jsx)("a",{className:"btn-round btn btn-primary",href:"https://github.com/rohan-dhir",children:"View on GitHub"})]})})}),Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsxs)("div",{className:"section-cols",children:[Object(u.jsx)("div",{className:"mt-5 row",children:I.map((function(e){var t=e.id,i=e.title,c=e.content,s=e.pic,a=e.onClick;return Object(u.jsx)(g,{title:i,content:c,pic:s,onClick:a},t)}))}),Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsx)("h2",{className:"slider-title",children:"iOS & Android Games"}),Object(u.jsx)(V,{}),Object(u.jsx)("div",{className:"row"})]})]})})]})},E=function(e){return Object(u.jsx)("img",{src:e.icon,alt:"",style:{width:"50px",height:"50px"}})},F=i.p+"static/media/bg4.4f2f5ccd.png",J=function(){return Object(u.jsxs)("div",{id:"aboutMe",className:"section",children:[Object(u.jsx)("img",{alt:"...",className:"path4",src:F}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"ml-auto mr-auto col-md-8",children:Object(u.jsxs)("div",{className:"section-description text-center",children:[Object(u.jsx)("h2",{className:"title",children:"About Me"}),Object(u.jsx)("p",{className:"description",children:"I am passionate about coding. I love sorting algorithms and try to keep up with the latest in software development."}),Object(u.jsx)("a",{className:"btn-round btn btn-primary",href:"https://github.com/rohan-dhir",children:"View R\xe9sum\xe9"})]})})}),R.map((function(e){var t=e.id,i=e.title,c=e.description,s=e.icon;return Object(u.jsx)("div",{className:"mr-auto ml-auto col-md",children:Object(u.jsxs)("div",{className:"info info-horizontal",children:[Object(u.jsx)("div",{className:"icon",children:Object(u.jsx)(E,{icon:s})}),Object(u.jsxs)("div",{className:"descrBlock",children:[Object(u.jsx)("h4",{className:"info-title",children:i}),Object(u.jsx)("p",{children:c})]})]})},t)})).reduce((function(e,t,i){return i%2===0&&e.push([]),e[e.length-1].push(t),e}),[]).map((function(e,t){return Object(u.jsx)("div",{className:"row",children:e},t)})),";"]})]})},_=function(){return Object(u.jsx)("div",{id:"contact",className:"page-header",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"ml-auto mr-auto col-md",children:Object(u.jsxs)("div",{className:"section-description text-center",children:[Object(u.jsx)("h2",{className:"title",children:"Let's Get Connected."}),Object(u.jsx)("p",{className:"description",children:"Feel free to get in touch with me. I'd love to hear from you!"}),Object(u.jsx)("svg",{width:"75",height:"75",fill:"currentColor",className:"bi bi-envelope mailto",viewBox:"0 0 16 16",onClick:function(){return window.location.href="mailto:rohan.dhir@outlook.com"},children:Object(u.jsx)("path",{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"})}),Object(u.jsx)("svg",{width:"75",height:"75",fill:"currentColor",className:"bi bi-github",viewBox:"0 0 16 16",onClick:function(){return window.location.href="http://www.github.com/rohan-dhir"},children:Object(u.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),Object(u.jsx)("svg",{width:"75",height:"75",fill:"currentColor",className:"bi bi-linkedin",viewBox:"0 0 16 16",onClick:function(){return window.location.href="https://www.linkedin.com/in/rohan-dhir/"},children:Object(u.jsx)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})]})})})})})},Q=function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("p",{className:"footer-text",children:"\xa9 2021 Rohan Dhir. All trademarks are properties of their respective owners."})})})};i(66);var U=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(O,{}),Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)(f,{}),Object(u.jsx)(T,{}),Object(u.jsx)(J,{}),Object(u.jsx)(_,{}),Object(u.jsx)(Q,{})]})]})};n.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(U,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.eaa7941b.chunk.js.map