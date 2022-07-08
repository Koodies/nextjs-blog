import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <>
            <Layout>
                <Head>
                    <title>First Post</title>
                    <script src="https://connect.facebook.net/en_US/sdk.js"></script>
                </Head>
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() => console.log(`Script loaded correctly ...`)}>
                </Script>
                <h1>First Post</h1>
                <h2>
                    <Link href="/"><a>Back to home</a></Link>
                </h2>
                <Image
                    src="/images/profile.jpg"
                    height={144}
                    width={144}
                    alt="Profile Pic"
                />
            </Layout>
        </>
    )
}