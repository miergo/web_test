import{w as n,q as i,p as e,M as c,L as l,S as h,t as p,O as d,i as u}from"./chunk-OIYGIGL5-D8YKYJ8y.js";const w=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"}];function f({children:r}){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("script",{dangerouslySetInnerHTML:{__html:`
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
                  var path = decodeURIComponent(match[1]);
                  // Remove the query parameter and restore the clean URL
                  var cleanQuery = query.replace(/[?&]p=[^&]*/, '').replace(/^&/, '?');
                  // Get the base path without trailing slash
                  var basePath = window.location.pathname.replace(//$/, '');
                  // Ensure path starts with / and doesn't create double slashes
                  if (path && !path.startsWith('/')) {
                    path = '/' + path;
                  }
                  var newUrl = window.location.origin + basePath + path + (cleanQuery || '') + window.location.hash;
                  // Use window.location.replace to force React Router to see the correct route
                  window.location.replace(newUrl);
                }
              }
            })();
          `}}),e.jsx(c,{}),e.jsx(l,{})]}),e.jsxs("body",{children:[r,e.jsx(h,{}),e.jsx(p,{})]})]})}const x=n(function(){return e.jsx(d,{})}),y=i(function({error:t}){let s="Oops!",a="An unexpected error occurred.",o;return u(t)&&(s=t.status===404?"404":"Error",a=t.status===404?"The requested page could not be found.":t.statusText||a),e.jsxs("main",{className:"pt-16 p-4 container mx-auto",children:[e.jsx("h1",{children:s}),e.jsx("p",{children:a}),o]})});export{y as ErrorBoundary,f as Layout,x as default,w as links};
