This is a starter template for [Learn Next.js](https://nextjs.org/learn).

# Navigate between Pages

[https://nextjs.org/learn/basics/navigate-between-pages](https://nextjs.org/learn/basics/navigate-between-pages)

* Create a new page using integrated file system routing
* Learn how to use the `Link` component to enable client-side navigation between pages.
* Learn about built-in support for code splitting and prefetching

Simply create a JS file under the `pages` directory, and the path to the file becomes the URL path.

Example: if I wanted to add a new route `/authors/me`, the file will be under the directory `pages/authors/me.js`

## Link Component

In Next.js, you use the `Link` Component from `next\link` to wrap the `<a>` tag.
`Link` allows you to do client-side nagivation to a different page in the application.

| `{' '}` adds an empty space, which is used to divide text over multiple lines.