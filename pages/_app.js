//Global Styles to load css on every page.
import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}