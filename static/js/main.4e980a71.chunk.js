(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{21:function(e,t,i){},42:function(e,t,i){},60:function(e,t,i){},61:function(e,t,i){},62:function(e,t,i){},76:function(e,t,i){},80:function(e,t,i){"use strict";i.r(t);var c=i(0),s=i(14),a=i.n(s),n=i(22),r=(i(60),i(61),i(8)),o=i(27),l=i(28),d=i(29),j=i(34),m=i(33),h=i(86),b=i(84),p=(i(62),i(24)),u=i.p+"static/media/menuIcon.eaf28fd5.png",x=i(1),O=function(e){Object(j.a)(i,e);var t=Object(m.a)(i);function i(e){var c;return Object(o.a)(this,i),(c=t.call(this,e)).state={barStyle:"fixed-top navbar-transparent navbar",barShrank:!1},c.resizeHeaderOnScroll=c.resizeHeaderOnScroll.bind(Object(d.a)(c)),c}return Object(l.a)(i,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.resizeHeaderOnScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.resizeHeaderOnScroll)}},{key:"resizeHeaderOnScroll",value:function(){var e=window.pageYOffset||document.documentElement.scrollTop;e>200&&!this.state.barShrank?(this.setState({barStyle:"fixed-top bg navbar"}),this.setState({barShrank:!0})):e<200&&this.state.barShrank&&(this.setState({barStyle:"fixed-top navbar-transparent navbar"}),this.setState({barShrank:!1}))}},{key:"render",value:function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(h.a,{className:this.state.barStyle,expand:"md",children:[Object(x.jsxs)(h.a.Toggle,{"aria-controls":"basic-navbar-nav",children:[" ",Object(x.jsx)("img",{alt:"...",src:u,style:{width:"40px",height:"40px"}})," "]}),Object(x.jsx)(h.a.Collapse,{children:Object(x.jsxs)(b.a,{className:"container",children:[Object(x.jsx)(b.a.Item,{children:Object(x.jsx)(p.Link,{className:"nav-item",to:"home",spy:!0,smooth:!0,offset:-70,duration:500,children:"Home"})}),Object(x.jsx)(b.a.Item,{children:Object(x.jsx)(p.Link,{className:"nav-item",to:"projects",spy:!0,smooth:!0,offset:-70,duration:500,children:"Projects"})}),Object(x.jsx)(b.a.Item,{children:Object(x.jsx)(p.Link,{className:"nav-item",to:"aboutMe",spy:!0,smooth:!0,offset:-70,duration:500,children:"About Me"})}),Object(x.jsx)(b.a.Item,{children:Object(x.jsx)(p.Link,{className:"nav-item",to:"contact",spy:!0,smooth:!0,offset:-70,duration:500,children:"Contact"})})]})})]})})}}]),i}(c.Component),v=(i(42),i.p+"static/media/profile.341d335e.jpg"),g=i.p+"static/media/bg1.41f84a46.png",f=function(){return Object(x.jsxs)("div",{id:"home",className:"page-header",children:[Object(x.jsx)("img",{alt:"...",className:"path",src:g}),Object(x.jsx)("img",{alt:"...",className:"path2",src:g}),Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"brand",children:[Object(x.jsx)("div",{className:"image",children:Object(x.jsx)("img",{className:"profile",src:v,alt:"..."})}),Object(x.jsx)("h1",{children:"Rohan Dhir"})]})})]})},w=(i(21),function(e){return Object(x.jsxs)("div",{className:"col-md-4",onClick:function(){"Personal Website"!==e.title&&(window.location.href=e.onClick)},children:[Object(x.jsx)("img",{className:"img",alt:"...",src:e.pic}),Object(x.jsx)("h4",{className:"card-title",children:e.title}),Object(x.jsx)("p",{className:"card-content",children:e.content})]})}),N=i(82),y=i(83),k=i(85),S=i.p+"static/media/sortingVisualizer_Proj.38c44c85.png",C=i.p+"static/media/title_proj.461ab058.png",A=i.p+"static/media/personalSite_Proj.ccd51ba0.png",M=i.p+"static/media/socialNetwork_Proj.f444e697.png",z=i.p+"static/media/game_Proj.35e142c5.png",D=i.p+"static/media/flood_Proj.5d9a8306.png",H=i.p+"static/media/RU-logo.a8834dfa.png",L=i.p+"static/media/reactLogo.3840850e.png",B=i.p+"static/media/camera.ae845d1c.png",P=i.p+"static/media/bilingual.ed19bccb.png",I=i.p+"static/media/leapingBall.3f72e94c.png",R=i.p+"static/media/rocketBlast.99583ec7.png",V=[{id:1,title:"Sorting Visualizer",content:"A React App that visualizes sorting algorithms.",pic:S,onClick:"https://sorting-visualizer-rohan.netlify.app"},{id:2,title:"Product Title Parser",content:"A React App that parses extraneous details from text input. Ideal for e-commerce.",pic:C,onClick:"https://parsing-tool-react.netlify.app/"},{id:3,title:"Personal Website",content:"This website! Built with React :)",pic:A,onClick:"/"},{id:4,title:"Social Networking Site",content:"A PHP site to post, like and follow others. Uses MySQL as the database.",pic:M,onClick:"https://github.com/rohan-dhir/Logr"},{id:5,title:"iOS & Android Games",content:"Built a variety of 2D and 3D mobile games using Objective-C and C#.",pic:z,onClick:"/mobilegames"},{id:6,title:"Flood! (React)",content:"A short game based on the popular title 'Flood It!'",pic:D,onClick:"https://flood-react-rohan.netlify.app"}],F=[{id:1,title:"Bachelor of Science (Honours) - Computer Science",description:"Studied Computer Science at Ryerson University in Toronto. Graduated in April 2021. Relevant Courses: Data Structures, Algorithms, and Operating Systems. Minor in Economics.",icon:H},{id:2,title:"Technical Skills",description:"Java \xb7 C# \xb7 Python 3 \xb7 JavaScript (ES6) \xb7 HTML5 \xb7 CSS3 \xb7 PHP \xb7 jQuery \xb7 React/Redux \xb7 Node.js \xb7 GraphQL \xb7 SQL \xb7 MongoDB \xb7 Git \xb7 Agile (Scrum)",icon:L},{id:3,title:"Interests",description:"Aside from coding, I am a hobbyist photographer and enjoy capturing portraits and landscapes during my travels.",icon:B},{id:4,title:"Bilingual",description:"Able to speak Hindi at a professional working proficiency.",icon:P}],E=[{id:1,title:"Hostile Moon",downloads:"50+",description:"A game with multiple modes where a lone player must defeat a near endless amount of enemies and cross more than 100 levels. Developed using Unity and Autodesk Maya for 3D modelling. Written in C#.",video:"https://www.youtube.com/embed/cucYpb_MY9M?autoplay=1&mute=1",image:"",link:"https://play.google.com/store/apps/details?id=com.RohanDhir.HostileMoon"},{id:2,title:"Leaping Ball",downloads:"10+",description:"My first 3D game! A game in which a user must tap the screen to bounce the ball between the walls to maintain speed while avoiding obstacles. 3D models developed with Unity and Autodesk Maya, written in C#.",video:"",image:I,link:"https://play.google.com/store/apps/details?id=com.RohanDhir.LeapingBall"},{id:3,title:"Drop of Faith",downloads:"3.5k+",description:"My first 2D game! An 'endless runner' style game where the user must dodge obstacles by rotating the device left or right to control the player. Developed with Xcode, written in Objective-C. Adobe Photoshop was used for 2D sprites.",video:"https://www.youtube.com/embed/6ccQvSVp5dA?autoplay=1&mute=1",image:"",link:""},{id:4,title:"Rocket Blast!",downloads:"10+",description:"Another 2D endless game written in Objective-C. Utilized many of the same assets from the first game to save on development time.",video:"",image:R,link:""}],G=function(e){Object(j.a)(i,e);var t=Object(m.a)(i);function i(){var e;Object(o.a)(this,i);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).displayElement=function(e,t){return""===e?Object(x.jsx)("div",{className:"slider-media",children:Object(x.jsx)(N.a,{src:t,fluid:!0})}):Object(x.jsx)("div",{className:"slider-media",children:Object(x.jsx)(y.a,{aspectRatio:"16by9",children:Object(x.jsx)("embed",{type:"image/svg+xml",src:e})})})},e}return Object(l.a)(i,[{key:"render",value:function(){var e=this;return Object(x.jsxs)(k.a,{children:[E.map((function(t){var i=t.id,c=t.title,s=t.downloads,a=t.description,n=t.video,r=t.image;return Object(x.jsx)(k.a.Item,{className:"carousel",interval:7e3,children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"col-md-8",children:[Object(x.jsx)("h3",{className:"slider-subtitle",children:c}),e.displayElement(n,r)]}),Object(x.jsx)("div",{className:"col-lg-4",children:Object(x.jsxs)("div",{className:"wrapper",children:[Object(x.jsxs)("div",{className:"slider-info",children:[Object(x.jsx)("strong",{children:"Downloads: "}),s]}),Object(x.jsx)("div",{className:"slider-descr",children:a})]})})]})},i)})),";"]})}}]),i}(c.Component),T=i.p+"static/media/bg3-github.81e95291.png",U=function(){return Object(x.jsxs)("div",{id:"projects",className:"section",children:[Object(x.jsx)("img",{alt:"...",className:"path3",src:T}),Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"ml-auto mr-auto col-md-8",children:Object(x.jsxs)("div",{className:"section-description text-center",children:[Object(x.jsx)("h2",{className:"title",children:"Featured Projects"}),Object(x.jsx)("p",{className:"description",children:"The following are some of my favourite projects that I've enjoyed working on. Click below to view the rest on my GitHub!"}),Object(x.jsx)("a",{className:"btn-round btn btn-primary",href:"https://github.com/rohan-dhir",children:"View on GitHub"})]})})}),Object(x.jsx)("div",{className:"container-fluid",children:Object(x.jsxs)("div",{className:"section-cols",children:[Object(x.jsx)("div",{className:"mt-5 row",children:V.map((function(e){var t=e.id,i=e.title,c=e.content,s=e.pic,a=e.onClick;return Object(x.jsx)(w,{title:i,content:c,pic:s,onClick:a},t)}))}),Object(x.jsxs)("div",{className:"container-fluid",children:[Object(x.jsx)("h2",{className:"slider-title",children:"iOS & Android Games"}),Object(x.jsx)(G,{}),Object(x.jsx)("div",{className:"row"})]})]})})]})},_=function(e){return Object(x.jsx)("img",{src:e.icon,alt:"",style:{width:"50px",height:"50px"}})},Q=i.p+"static/media/bg4.4f2f5ccd.png",J=function(){return Object(x.jsxs)("div",{id:"aboutMe",className:"section",children:[Object(x.jsx)("img",{alt:"...",className:"path4",src:Q}),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("div",{className:"row",children:Object(x.jsx)("div",{className:"ml-auto mr-auto col-md-8",children:Object(x.jsxs)("div",{className:"section-description text-center",children:[Object(x.jsx)("h2",{className:"title",children:"About Me"}),Object(x.jsx)("p",{className:"description",children:"I am passionate about coding. I love sorting algorithms and try to keep up with the latest in software development."})]})})}),F.map((function(e){var t=e.id,i=e.title,c=e.description,s=e.icon;return Object(x.jsx)("div",{className:"mr-auto ml-auto col-md",children:Object(x.jsxs)("div",{className:"info info-horizontal",children:[Object(x.jsx)("div",{className:"icon",children:Object(x.jsx)(_,{icon:s})}),Object(x.jsxs)("div",{className:"descrBlock",children:[Object(x.jsx)("h4",{className:"info-title",children:i}),Object(x.jsx)("p",{children:c})]})]})},t)})).reduce((function(e,t,i){return i%2===0&&e.push([]),e[e.length-1].push(t),e}),[]).map((function(e,t){return Object(x.jsx)("div",{className:"row",children:e},t)})),";"]})]})},W=function(){return Object(x.jsx)("div",{id:"contact",className:"page-header",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"row",children:Object(x.jsx)("div",{className:"ml-auto mr-auto col-md",children:Object(x.jsxs)("div",{className:"section-description text-center",children:[Object(x.jsx)("h2",{className:"title",children:"Let's Get Connected."}),Object(x.jsx)("p",{className:"description",children:"Feel free to get in touch with me. I'd love to hear from you!"}),Object(x.jsx)("svg",{width:"75",height:"75",fill:"currentColor",className:"bi bi-envelope mailto",viewBox:"0 0 16 16",onClick:function(){return window.location.href="mailto:rohan.dhir@outlook.com"},children:Object(x.jsx)("path",{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"})}),Object(x.jsx)("svg",{width:"75",height:"75",fill:"currentColor",className:"bi bi-github",viewBox:"0 0 16 16",onClick:function(){return window.location.href="http://www.github.com/rohan-dhir"},children:Object(x.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),Object(x.jsx)("svg",{width:"75",height:"75",fill:"currentColor",className:"bi bi-linkedin",viewBox:"0 0 16 16",onClick:function(){return window.location.href="https://www.linkedin.com/in/rohan-dhir/"},children:Object(x.jsx)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})]})})})})})},Y=function(){return Object(x.jsx)("footer",{className:"footer",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("p",{className:"footer-text",children:"\xa9 2021 Rohan Dhir. All trademarks are properties of their respective owners."})})})},X=function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(O,{}),Object(x.jsxs)("div",{className:"wrapper",children:[Object(x.jsx)(f,{}),Object(x.jsx)(U,{}),Object(x.jsx)(J,{}),Object(x.jsx)(W,{}),Object(x.jsx)(Y,{})]})]})},q=(i(76),function(){var e=function(e,t){return""===e?Object(x.jsx)("div",{className:"slider-media",children:Object(x.jsx)(N.a,{src:t,fluid:!0})}):Object(x.jsx)("div",{className:"slider-media",children:Object(x.jsx)("iframe",{width:"640",height:"360",src:e,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})})},t=function(t,i){return Object(x.jsx)("div",{className:"col-md-6",children:Object(x.jsx)("div",{className:"justify-content-between align-items-center row",children:Object(x.jsx)("div",{children:e(t,i)})})})};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(b.a,{className:"fixed-top navbar nav-bg navbar-expand-lg",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"navbar-translate",children:Object(x.jsx)(n.b,{to:"/",className:"btn",children:"Back to Main Site "})})})}),Object(x.jsxs)("div",{className:"wrapper-games",children:[Object(x.jsx)("img",{alt:"...",className:"path3",src:T}),E.map((function(e){var i=e.id,c=e.title,s=e.downloads,a=e.description,n=e.video,r=e.image,o=e.link;return Object(x.jsx)("div",{className:"section",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"justify-content-between row",children:[i%2===1?t(n,r):Object(x.jsx)(x.Fragment,{}),Object(x.jsxs)("div",{className:"col-md-5",children:[Object(x.jsx)("h1",{className:"profile-title text-left",children:c}),Object(x.jsxs)("div",{className:"profile-downloads",children:[Object(x.jsx)("strong",{children:"Downloads: "}),s]}),Object(x.jsx)("p",{className:"profile-description",children:a}),""===o?Object(x.jsx)(x.Fragment,{}):Object(x.jsx)("a",{href:o,className:"btn",children:"View on Store"}),Object(x.jsx)("div",{className:"btn-wrapper pt-3"})]}),i%2===0?t(n,r):Object(x.jsx)(x.Fragment,{})]})})},i)}))]}),Object(x.jsx)(Y,{})]})});i(79);var K=function(){return Object(x.jsx)("div",{children:Object(x.jsxs)(r.c,{children:[Object(x.jsx)(r.a,{exact:!0,path:"/",component:X}),Object(x.jsx)(r.a,{exact:!0,path:"/mobilegames",component:q})]})})};a.a.render(Object(x.jsx)(n.a,{children:Object(x.jsx)(K,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.4e980a71.chunk.js.map