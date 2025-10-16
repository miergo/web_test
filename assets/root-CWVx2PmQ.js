import{w as n,q as i,p as t,M as c,L as h,S as l,t as p,O as d,i as u}from"./chunk-OIYGIGL5-D8YKYJ8y.js";const w=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"}];function f({children:a}){return t.jsxs("html",{lang:"en",children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx("script",{dangerouslySetInnerHTML:{__html:`
            (function() {
              // Check if we have a redirect query parameter from 404.html
              var searchParams = window.location.search;
              
              if (searchParams && searchParams.indexOf('p=') !== -1) {
                // Extract the path from the ?p= parameter
                var match = searchParams.match(/[?&]p=([^&]*)/);
                
                if (match && match[1]) {
                  // Decode the path
                  var redirectPath = decodeURIComponent(match[1]);
                  
                  // Build the correct URL
                  // Get current pathname (e.g., /web_test/ or /web_test)
                  var basePath = window.location.pathname.replace(/\\/$/, '');
                  
                  // Ensure redirect path starts with /
                  if (redirectPath && !redirectPath.startsWith('/')) {
                    redirectPath = '/' + redirectPath;
                  }
                  
                  // Construct the new path (without origin to avoid reload)
                  var newPath = basePath + redirectPath + window.location.hash;
                  
                  // Use history API to change URL without triggering a page reload
                  // This must happen BEFORE React Router initializes
                  // React Router will read window.location and see the correct path
                  history.replaceState(null, '', newPath);
                }
              }
            })();
          `}}),t.jsx(c,{}),t.jsx(h,{})]}),t.jsxs("body",{children:[a,t.jsx(l,{}),t.jsx(p,{})]})]})}const x=n(function(){return t.jsx(d,{})}),g=i(function({error:e}){let s="Oops!",r="An unexpected error occurred.",o;return u(e)&&(s=e.status===404?"404":"Error",r=e.status===404?"The requested page could not be found.":e.statusText||r),t.jsxs("main",{className:"pt-16 p-4 container mx-auto",children:[t.jsx("h1",{children:s}),t.jsx("p",{children:r}),o]})});export{g as ErrorBoundary,f as Layout,x as default,w as links};
