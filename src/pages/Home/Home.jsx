
import Banner from "../../components/Banner/Banner";
import ShowEstates from "../../components/ShowEstates/ShowEstates";
import ProvidingSection from "../../components/ProvidingSection/ProvidingSection";

import { Helmet } from "react-helmet";
import TrustedBy from "../../components/TrustedBy/TrustedBy";


const Home = () => {
    
    
    // console.log(allData);
    return (
        <div >
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home - LuxuryLair</title>
                <link rel="canonical" href="http://mysite.com//" />
    </Helmet>

            <Banner></Banner>
            <div className="w-full p-2 md:max-w-7xl mx-auto">
            <ShowEstates></ShowEstates>
            <ProvidingSection></ProvidingSection>
            <TrustedBy></TrustedBy>
            </div>
        </div>
    );
};

export default Home;