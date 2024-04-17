
import ShowEstates from "../../components/ShowEstates/ShowEstates";
import ProvidingSection from "../../components/ProvidingSection/ProvidingSection";

import { Helmet, HelmetProvider } from 'react-helmet-async';
import TrustedBy from "../../components/TrustedBy/TrustedBy";
import { ScrollRestoration } from "react-router-dom";
import Hero from "../../components/Hero/Hero";



const Home = () => {
    
    
    // console.log(allData);
    return (
        <div >
            <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home - LuxuryLair</title>
                <link rel="canonical" href="http://mysite.com//" />
            </Helmet>
            </HelmetProvider>

            {/* <Banner></Banner> */}
            <Hero></Hero>
            <div className="w-full p-2 md:max-w-7xl mx-auto">
            <ShowEstates></ShowEstates>
            <ProvidingSection></ProvidingSection>
            <TrustedBy></TrustedBy>
            </div>
            <ScrollRestoration />
        </div>
    );
};

export default Home;