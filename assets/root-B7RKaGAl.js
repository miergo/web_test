import{w as o,q as i,p as e,M as c,L as l,S as h,t as p,O as u,i as d}from"./chunk-OIYGIGL5-D8YKYJ8y.js";const f=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"}];function x({children:r}){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("script",{dangerouslySetInnerHTML:{__html:`
            (function() {
              var redirect = sessionStorage.getItem('redirect');
              if (redirect) {
                sessionStorage.removeItem('redirect');
                history.replaceState(null, '', redirect);
              }
              
              // Handle the redirect from 404.html
              var query = window.location.search;
              if (query) {
                var match = query.match(/[?&]p=([^&]*)/);
                if (match) {
                  var path = match[1];
                  // Remove the query parameter and restore the clean URL
                  var cleanQuery = query.replace(/[?&]p=[^&]*/, '').replace(/^&/, '?');
                  var newUrl = window.location.pathname + 
                               (path || '') + 
                               (cleanQuery || '') +
                               window.location.hash;
                  history.replaceState(null, '', newUrl);
                }
              }
            })();
          `}}),e.jsx(c,{}),e.jsx(l,{})]}),e.jsxs("body",{children:[r,e.jsx(h,{}),e.jsx(p,{})]})]})}const y=o(function(){return e.jsx(u,{})}),w=i(function({error:t}){let a="Oops!",s="An unexpected error occurred.",n;return d(t)&&(a=t.status===404?"404":"Error",s=t.status===404?"The requested page could not be found.":t.statusText||s),e.jsxs("main",{className:"pt-16 p-4 container mx-auto",children:[e.jsx("h1",{children:a}),e.jsx("p",{children:s}),n]})});export{w as ErrorBoundary,x as Layout,y as default,f as links};
