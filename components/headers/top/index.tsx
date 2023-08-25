import Head from "next/head";
import { useRouter } from 'next/router'
import { generateSeo } from "helpers/SeoHelper";

const HeaderTop = () => {
    const router = useRouter()
    const { name, title, description, keywords, url, logo } = generateSeo(router.pathname)
    const analyticsCode = process.env.NEXT_PUBLIC_ANALYTICS

    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href={logo} />
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <meta name="googlebot" content="index, follow" />

            <link rel="canonical" href={url} />
                    
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property='og:url' content={url} />
            <meta property='og:type' content='website' />
            <meta property='og:image' content={logo} />
            <meta property='og:site_name' content={name} />

            <meta name='twitter:card' content='summary' />
            <meta name='twitter:image' content={logo} />

            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${analyticsCode}`}
            />
            <script
                dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${analyticsCode}');
                `,
                }}
            />
        </Head>
    )
}

export default HeaderTop