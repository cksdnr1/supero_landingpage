import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { AppConfig } from '../utils/AppConfig';

type IMetaProps = {
    title: string;
    description: string;
    canonical?: string;
};

const Meta = (props: IMetaProps) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <meta charSet="UTF-8" key="charset" />
                <meta
                    httpEquiv="Content-Type"
                    content="text/html; charset=utf-8"
                />

                <meta name="content-language" content="kr" />
                <meta name="keywords" content="운동기록, 운동어플, 운동일지" />
                <meta name="author" content="Supero-수페로, 운동어플" />
                <meta name="publisher" content="Supero-수페로, 운동어플" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                    key="viewport"
                />
                <link
                    rel="apple-touch-icon"
                    href={`${router.basePath}/supero.jpg`}
                    key="apple"
                />
                <link
                    rel="shortcut icon"
                    href={`${router.basePath}/supero.jpg`}
                />
                <link
                    rel="icon"
                    type="image/jpg"
                    sizes="32x32"
                    href={`${router.basePath}/supero.jpg`}
                    key="icon32"
                />
                <link
                    rel="icon"
                    type="image/jpg"
                    sizes="16x16"
                    href={`${router.basePath}/supero.jpg`}
                    key="icon16"
                />
                <link
                    rel="icon"
                    href={`${router.basePath}/supero.jpg`}
                    key="favicon"
                />
                <meta
                    property="og:image"
                    content={`${router.basePath}/supero.jpg`}
                    key="ogimage"
                />
            </Head>
            <NextSeo
                title={props.title}
                description={props.description}
                canonical={props.canonical}
                openGraph={{
                    title: props.title,
                    description: props.description,
                    url: props.canonical,
                    locale: AppConfig.locale,
                    site_name: AppConfig.site_name,
                }}
            />
        </>
    );
};

export { Meta };
