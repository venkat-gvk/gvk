(this["webpackJsonpvenkat-portfolio"]=this["webpackJsonpvenkat-portfolio"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(6),r=a.n(n),l=(a(12),a(3)),i=a.p+"static/media/venkat.b82b623d.jpg",o=a(0),d=function(){var e=Object(s.useContext)(S).darkMode;return Object(o.jsxs)("section",{id:"about-me",className:"p-10",children:[Object(o.jsx)("h2",{className:"text-center text-3xl sm:mt-10 lg:mt-5 transition-all duration-500 ".concat(e?"text-pink-500":"text-gray-700"),children:"ABOUT ME"}),Object(o.jsxs)("div",{className:"mt-2 grid grid-cols-2 justify-items-center \r justify-around lg:grid-cols-3 \r ml-2 pb-6 pt-6 pl-6 pr-4 sm:p-6",children:[Object(o.jsx)("div",{className:"hidden lg:block flex-shrink-0",children:Object(o.jsx)("img",{src:i,className:"w-52 h-52 sm:relative sm:top-9 lg:static lg:w-60 lg:h-60 p-1 \n                       rounded-full border object-cover ".concat(e?"border-pink-500 text-white":"border-blue-500"," shadow-md"),alt:"Venkat"})}),Object(o.jsx)("div",{className:"col-span-2 lg:mr-10",children:Object(o.jsxs)("div",{className:"text-lg lg:text-2xl transition-all duration-500 ".concat(e?"text-white":"text-gray-700"),children:[Object(o.jsxs)("p",{children:["Hi,"," ",Object(o.jsx)("span",{className:"sm:text-3xl sm:font-extrabold",children:"I am Venkatakrishnan G,"})," ","25 years old Software Developer and Video Editor from Tamilnadu, India. I love programming, anime and photography."]}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{children:"Fan of Hans Zimmer and Kentaro Miura. Love to read manga when I'm free. Yes I know, Naruto is nerfed in Boruto."}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{children:"Feel free to contact me."})]})})]})]})},m=a(2),j=a(5),h=a(7),b=a(16),x=function(){var e=Object(s.useContext)(S).darkMode,t={name:"",email_id:"",message:"",id:""},a=Object(s.useState)(t),c=Object(l.a)(a,2),n=c[0],r=c[1],i=Object(s.useState)(!1),d=Object(l.a)(i,2),x=d[0],u=d[1],p=function(e){var t,a=e.target.name,s=e.target.value;"message"!==a&&(s=s.trim()),r(Object(j.a)(Object(j.a)({},n),{},(t={},Object(m.a)(t,a,s),Object(m.a)(t,"id",Object(b.a)()),t)))},g="outline-none rounded p-2 mt-2 border md:w-10/12 sm:w-11/12\n               ".concat(e?"border-pink-500 focus:border-pink-800 bg-gray-100":"border-blue-500 focus:border-blue-800"," w-72 text-black");return Object(o.jsxs)("section",{className:"p-2 pb-3 min-h-screen",id:"contact",children:[Object(o.jsx)("h2",{className:"text-3xl uppercase text-center sm:mt-4 transition-all duration-500 ".concat(e?"text-pink-500":"text-gray-700"),children:"Contact"})," ",Object(o.jsx)("div",{className:"".concat(e?"text-white border-pink-500 shadow-2xl":"border-blue-500 shadow"," mx-auto mt-10 p-4 rounded border-t-2 border-b-2 w-84\n          sm:w-11/12 md:w-85p\n        "),children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u(!x),Object(h.a)("service_cvk2fpv","template_t2ersok",n,"user_Jc0unU7hOldV9HvPXpLbG").catch((function(e){return console.error(e)})),r(t)},className:"flex flex-col justify-center items-center space-y-8 md:mx-auto",children:[Object(o.jsxs)("div",{className:"".concat(x&&"opacity-50"," transition-all duration-500 \n              sm:w-11/12 md:w-full md:text-center md:relative\n            "),children:[Object(o.jsx)("label",{htmlFor:"name",className:" \r md:text-left md:absolute md:left-16 lg:left-22",children:"Name"})," ",Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:g,id:"name",type:"text",name:"name",required:"true",disabled:x&&!0,value:n.name,onChange:p})]}),Object(o.jsxs)("div",{className:"".concat(x&&"opacity-50"," sm:w-11/12 transition-all duration-500 md:w-full md:text-center md:relative"),children:[Object(o.jsx)("label",{htmlFor:"email_id",className:" \r md:text-left md:absolute md:left-16 lg:left-22",children:"Email"})," ",Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:g,type:"email",required:"true",name:"email_id",id:"email_id",disabled:x&&!0,value:n.email_id,onChange:p})]}),Object(o.jsxs)("div",{className:"".concat(x&&"opacity-50"," sm:w-11/12 transition-all duration-500 md:w-full md:text-center md:relative"),children:[Object(o.jsx)("label",{htmlFor:"message",className:" \r md:text-left md:absolute md:left-16 lg:left-22",children:"Message"})," ",Object(o.jsx)("br",{}),Object(o.jsx)("textarea",{className:"".concat(g," h-40 resize-y"),id:"message",required:"true",type:"text",name:"message",disabled:x&&!0,value:n.message,onChange:p})]}),Object(o.jsx)("div",{children:x?Object(o.jsxs)("div",{className:"pt-4 pb-4 bg-gray-50 w-72 text-black h-20 rounded font-semibold flex flex-col justify-center\r items-center space-y-3 transition-all\r md:w-96\r ",children:[Object(o.jsx)("p",{children:"Thank you, I will contact you shortly."}),Object(o.jsx)("button",{className:"\n                ".concat(e?"bg-pink-500 hover:bg-pink-700":"bg-blue-500 hover:bg-blue-800"," pl-2 pr-2 text-white\n                transition-all rounded-full transform duration-500 md:w-36 md:p-1\n                hover:duration-300 hover:shadow-md\n              "),onClick:function(){u(!x)},children:"close"})]}):Object(o.jsx)("button",{className:"\n                ".concat(e?"bg-pink-500 hover:bg-pink-700":"bg-blue-500 hover:bg-blue-800"," p-2 text-white font-semibold rounded-full w-32 mb-2\n                transition-all transform duration-500 hover:-translate-y-2 \n                hover:duration-300 hover:shadow-md\n                md:w-48\n              "),submit:"submit",children:"Submit"})})]})})]})},u=function(){var e=Object(s.useContext)(S).darkMode;return Object(o.jsx)("footer",{id:"profile",className:"".concat(e?"bg-gray-900":"bg-white"," transition-all duration-500"),children:Object(o.jsxs)("main",{className:"h-32 shadow-lg flex items-center justify-center \r sm:justify-around sm:max-w-6xl sm:mx-auto space-x-10 sm:space-x-4 sm:h-22 sm:p-8 md:space-x-80 lg:space-x-10",children:[Object(o.jsx)("div",{className:"flex flex-col items-center justify-between space-y-4 text-sm",children:Object(o.jsxs)("div",{className:"".concat(e?"text-pink-500":"text-gray-700"," transition-all duration-500"),children:[Object(o.jsx)("span",{children:"No copyright."}),Object(o.jsx)("span",{children:" "}),Object(o.jsx)("span",{children:"Feel free to copy it"})]})}),Object(o.jsxs)("div",{className:"hidden lg:flex lg:flex-col lg:items-center lg:flex-grow \r lg:relative lg:right-16\r lg:space-y-2 lg:text-center",children:[Object(o.jsx)("h2",{className:"".concat(e?"text-white":"text-gray-700"," font-bold text-center text-xl tracking-widest transition-all duration-500"),children:"VENKATAKRISHNAN G"}),Object(o.jsxs)("div",{className:"".concat(e?"text-pink-500":"text-gray-700"," transition-all duration-500"),children:[Object(o.jsx)("span",{children:"Software Developer"}),Object(o.jsx)("span",{children:" "}),Object(o.jsx)("span",{children:"Video Editor"})]})]}),Object(o.jsxs)("div",{className:"flex justify-center items-center space-x-4 sm:space-x-10",children:[Object(o.jsx)("a",{href:"https://github.com/venkat-gvk",target:"_blank",children:Object(o.jsxs)("svg",{className:"h-6 w-6 ".concat(e?"text-pink-500 hover:text-pink-700":"text-blue-500 hover:text-blue-800"," hover:cursor-pointer"),viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round",children:[" ",Object(o.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})]})}),Object(o.jsx)("a",{href:"https://twitter.com/venkat_gvk",target:"_blank",children:Object(o.jsxs)("svg",{className:"h-6 w-6 ".concat(e?"text-pink-500 hover:text-pink-700":"text-blue-500 hover:text-blue-800"," hover:cursor-pointer"),viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round",children:[" ",Object(o.jsx)("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})]})})]})]})})},p=function(){var e=Object(s.useContext)(S),t=e.darkMode,a=e.toggleDarkMode;return Object(o.jsxs)("header",{id:"home",className:"".concat(t?"bg-gray-900":"bg-white"," transition-all duration-500 sm:h-28\n        sm:grid sm:grid-cols-3 sm:justify-end sm:items-center sm:justify-items-center\n      "),children:[Object(o.jsxs)("main",{className:"h-32 flex items-center justify-center space-x-8 \r sm:order-1 sm:space-x-32",children:[Object(o.jsxs)("div",{className:"flex flex-col items-center justify-between space-y-4 sm:hidden",children:[Object(o.jsx)("h2",{className:"".concat(t?"text-white":"text-gray-700"," font-bold text-center text-2xl tracking-widest transition-all duration-500"),children:"VENKATAKRISHNAN G"}),Object(o.jsxs)("div",{className:"".concat(t?"text-pink-500":"text-gray-700"," transition-all duration-500"),children:[Object(o.jsx)("span",{children:"Software Developer"}),Object(o.jsx)("span",{children:" "}),Object(o.jsx)("span",{children:"Video Editor"})]})]}),Object(o.jsx)("div",{children:Object(o.jsxs)("button",{onClick:a,children:[Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-yellow-300 hover:text-yellow-500 ".concat(t&&"hidden"),viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{"fill-rule":"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z","clip-rule":"evenodd"})}),Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-pink-600 hover:text-pink-800 ".concat(!t&&"hidden"),viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})})]})})]}),Object(o.jsxs)("div",{className:"hidden ".concat(t?"sm:text-white":"sm:text-gray-700"," sm:font-semibold\n          sm:flex sm:items-center sm:justify-around sm:space-x-8 lg:space-x-12 sm:list-none\n          sm:p-4 sm:w-full sm:col-span-2 sm:ml-40 lg:ml-56 sm:mb-2"),children:[Object(o.jsx)("li",{className:"".concat(t?"hover:text-gray-300":"hover:text-gray-200"," flex-shrink-0"),children:Object(o.jsx)("a",{className:"hover:border-b-2",href:"#about_me",children:"ABOUT ME"})}),Object(o.jsx)("li",{className:"".concat(t?"hover:text-gray-300":"hover:text-gray-800"),children:Object(o.jsx)("a",{className:"hover:border-b-2",href:"#skills",children:"SKILLS"})}),Object(o.jsx)("li",{className:"".concat(t?"hover:text-gray-300":"hover:text-gray-800"),children:Object(o.jsx)("a",{className:"hover:border-b-2",href:"#projects",children:"PROJECTS"})}),Object(o.jsx)("li",{className:"".concat(t?"hover:text-gray-300":"hover:text-gray-800"),children:Object(o.jsx)("a",{className:"hover:border-b-2",href:"#contact",children:"CONTACT"})}),Object(o.jsx)("li",{className:"".concat(t?"hover:text-gray-300":"hover:text-gray-800"),children:Object(o.jsx)("a",{className:"hover:border-b-2",href:"#profile",children:"PROFILE"})})]})]})},g=[{name:"Amazon Price Tracker",link:"https://github.com/venkat-gvk/amazon-price-scraper",tech:"Python, Selenium",description:"Given a product name, will search and retrieve a list that matches\n              the given name along with the seller, URL, and price and sorts\n              based on price and saves it as a JSON file"},{name:"Youtube Comment Scraper",link:"https://github.com/venkat-gvk/youtube-comment-scraper",tech:"Python, Selenium",description:"Provided the URL, fetches only comments that have replies which\n              are from the channel user and also the top level and pinned\n              comments and saves it as a JSON file"},{name:"Corona Tracker",link:"https://venkat-gvk.github.io/covid-tracker/",tech:"React JS",description:"Fetches corona info worldwide from open-source API. With multiple\n              countries provided and has a graph that visualizes infected,\n              recovered, and deaths."},{name:"Todo List App",link:"https://venkat-gvk.github.io/todo/",tech:"React JS",description:"Uses browser cache to store and retrieve todos. It also adds the\n              date and time in which the todos have been added."},{name:"Sorting Visualizer",link:"https://venkat-gvk.github.io/sorting-visualizer/",tech:"React JS",description:"Visualize alogs such as Bubble, Insertion, Merge, Quick and\n              Selection Sort. Has random inputs and speed control to adjust the\n              array size and animation"}],v=[{lang:"C",level:"11/12"},{lang:"C++",level:"10/12"},{lang:"Java",level:"8/12"},{lang:"JavaScript",level:"9/12"},{lang:"Python",level:"8/12"}],O=[{tech:"React JS",level:"10/12"},{tech:"Node JS",level:"9/12"},{tech:"Tailwind CSS",level:"10/12"},{tech:"Selenium",level:"8/12"},{tech:"MongoDB",level:"8/12"}],f=function(e){var t=e.project,a=Object(s.useContext)(S).darkMode,c=t.name,n=t.link,r=t.tech,l=t.description,i="".concat(a?"bg-gray-900 text-white border-pink-500":"bg-white border-blue-500"," rounded w-full md:w-9/12 lg:w-full h-full border-b-2 border-t-2 \n  text-center text-lg p-4 shadow-lg transition-all duration-500");return Object(o.jsx)("div",{className:i,children:Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{className:"p-2",children:Object(o.jsx)("a",{className:"font-semibold uppercase transition-all duration-500 ".concat(a?"text-pink-500 hover:text-pink-600":"text-purple-600 hover:text-purple-800"," "),href:n,children:c})}),Object(o.jsxs)("p",{className:"p-2",children:["Tech: ",Object(o.jsx)("span",{className:"italic",children:r})," "]}),Object(o.jsx)("p",{className:"text-justify",children:l})]})})},w=function(){return Object(o.jsx)(c.a.Fragment,{children:g.map((function(e,t){return Object(o.jsx)(f,{project:e},t)}))})},k=function(){var e=Object(s.useContext)(S).darkMode;return Object(o.jsxs)("section",{id:"projects",children:[Object(o.jsx)("p",{className:"".concat(e?"text-pink-500":"text-gray-700"," text-3xl uppercase text-center mt-7 transition-all duration-500"),children:"Projects"}),Object(o.jsx)("div",{className:"grid grid-cols-1 ml-10 mr-10 md:grid-cols-2 lg:grid-cols-3 \r justify-items-center gap-6 items-center p-8\r lg:max-w-6xl sm:mx-auto",children:Object(o.jsx)(w,{})})]})},N=function(e){var t=e.what,a=Object(s.useContext)(S).darkMode;return Object(o.jsx)("div",{children:"lang"===t?v.map((function(e,t){var s=e.lang,c=e.level;return Object(o.jsxs)("div",{className:"p-2 space-y-1",children:[Object(o.jsx)("p",{children:s}),Object(o.jsx)("div",{className:"w-80 lg:w-96 shadow rounded ".concat(a?"bg-pink-100":"bg-blue-100"," "),children:Object(o.jsx)("div",{className:"w-".concat(c," h-2 rounded ").concat(a?"bg-pink-500":"bg-blue-400"," transition-all")})})]},t)})):O.map((function(e,t){var s=e.tech,c=e.level;return Object(o.jsxs)("div",{className:"p-2 space-y-1",children:[Object(o.jsx)("p",{children:s}),Object(o.jsx)("div",{className:"w-80 lg:w-96 shadow rounded ".concat(a?"bg-pink-100":"bg-blue-100"," "),children:Object(o.jsx)("div",{className:"w-".concat(c," h-2 rounded ").concat(a?"bg-pink-500":"bg-blue-400"," transition-all")})})]},t)}))})},y=function(){var e=Object(s.useContext)(S).darkMode;return Object(o.jsxs)("section",{id:"skills",className:"p-2 pb-3 -mt-4 sm:mb-16 lg:mb-12 sm:mt-1",children:[Object(o.jsx)("h2",{className:"text-3xl uppercase text-center transition-all duration-500 ".concat(e?"text-pink-500":"text-gray-700"," sm:pb-2 "),children:"Skills"}),Object(o.jsxs)("div",{className:"grid grid-row-1 sm:grid-cols-2 p-1 mt-4 lg:mt-8 sm:mx-auto",children:[Object(o.jsxs)("div",{className:"relative flex flex-col justify-center items-center space-y-4 text-left\n        ".concat(e?"text-white":"text-gray-700","\n        "),children:[Object(o.jsx)("p",{className:"font-semibold",children:"Programming Languages"}),Object(o.jsx)(N,{what:"lang"})]}),Object(o.jsxs)("div",{className:"flex flex-col justify-center items-center space-y-4 mt-8 sm:mt-0\n          text-left\n        ".concat(e?"text-white":"text-gray-700"),children:[Object(o.jsx)("p",{className:"font-semibold",children:"Technologies"}),Object(o.jsx)(N,{what:"tech"})]})]})]})},S=c.a.createContext();var C=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(s.useEffect)((function(){var e=localStorage.getItem("mode");c(!(!e||"dark"!==e))}),[]),Object(s.useEffect)((function(){a?localStorage.setItem("mode","dark"):localStorage.setItem("mode","light")}),[a]),Object(o.jsx)("div",{className:"overflow-x-hidden ".concat(a?"bg-gray-800":"bg-gray-50"," transition-all duration-500"),children:Object(o.jsxs)(S.Provider,{value:{darkMode:a,toggleDarkMode:function(){c(!a)}},children:[Object(o.jsx)(p,{}),Object(o.jsx)(d,{}),Object(o.jsx)(y,{}),Object(o.jsx)(k,{}),Object(o.jsx)(x,{}),Object(o.jsx)(u,{})]})})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root")),M()}},[[14,1,2]]]);
//# sourceMappingURL=main.3684c1c3.chunk.js.map