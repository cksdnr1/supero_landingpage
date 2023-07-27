import { AppProps } from 'next/app';
import { Meta } from '../layout/Meta';

import { VerticalFeatures } from '../templates/VerticalFeatures';
import { Footer } from '../templates/Footer';

import '../styles/global.css';
import { AppConfig } from '../utils/AppConfig';
import { TopNavbar } from '../templates/TopNavbar';
import { Background } from '../background/Background';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <Background color="bg-[#101012]">
        <div className="antialiased text-white">
            <Meta title={AppConfig.title} description={AppConfig.description} />
            <TopNavbar />
            <Component {...pageProps} />
            <Footer />
        </div>
    </Background>
);

export default MyApp;
