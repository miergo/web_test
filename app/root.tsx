import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* GitHub Pages SPA redirect handler */}
        <script dangerouslySetInnerHTML={{
          __html: `
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
                  // Remove trailing slash from pathname if path starts with slash
                  var basePath = window.location.pathname;
                  if (path && path.startsWith('/') && basePath.endsWith('/')) {
                    basePath = basePath.slice(0, -1);
                  }
                  var newUrl = basePath + 
                               (path || '') + 
                               (cleanQuery || '') +
                               window.location.hash;
                  history.replaceState(null, '', newUrl);
                }
              }
            })();
          `
        }} />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
