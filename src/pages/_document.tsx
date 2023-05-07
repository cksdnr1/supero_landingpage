/* eslint-disable */
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
    render() {
        return (
            <Html lang={AppConfig.locale}>
                <Head>
                    <meta
                        name="naver-site-verification"
                        content="86ecd7dbe6936b70fbb173d445ee7db0d33ed543"
                    />
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=G-Y06KP30RY0`}
                    />
                    <script
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{
                            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y06KP30RY0', {
              page_path: window.location.pathname,
            });
          `,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
