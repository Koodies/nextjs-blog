This is a starter template for [Learn Next.js](https://nextjs.org/learn).

# Navigate between Pages

[https://nextjs.org/learn/basics/navigate-between-pages](https://nextjs.org/learn/basics/navigate-between-pages)

- Create a new page using integrated file system routing
- Learn how to use the `Link` component to enable client-side navigation between pages.
- Learn about built-in support for code splitting and prefetching

Simply create a JS file under the `pages` directory, and the path to the file becomes the URL path.

Example: if I wanted to add a new route `/authors/me`, the file will be under the directory `pages/authors/me.js`

## Link Component

In Next.js, you use the `Link` Component from `next\link` to wrap the `<a>` tag.
`Link` allows you to do client-side nagivation to a different page in the application.

| `{' '}` adds an empty space, which is used to divide text over multiple lines.

Client-side navigation means that the page transition happens using Javascript, which is faster than the default navigation done by the browser

Here's a simple way to verify if it is a client-side navigation and not a full page load.

1. Use the browser developer tools to change the `background` CSS property of `<html>` to `yellow`.
2. Click on the links to go back and forth between the two pages.
3. The yellow backgrouind persists between the 2 pages transitions

| If used `<a href="_">` instead of `<Link href="_">`, the background color will be cleared on link clicks because the browser does a full refresh

## Code splitting and prefetching

Next.js does code splitting automatically, so each page only loads what's necessary for the page. That means when the homepage is rendered, the code for other pages is not served initially.

Ensures that the homepage loads quickly even if you have hundreds of pages.

> Only loading the code for the page you request also means that pages become isolated. If a certain page throws an error, the rest of the app would still work

In a prod build of Next.jsm, whenever `Link` components appear in the browser's viewport, Next.js automatically `prefetches` the code for the linked page in the background. By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant!
