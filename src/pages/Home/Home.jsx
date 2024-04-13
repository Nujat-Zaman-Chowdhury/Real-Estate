
import Banner from "../../components/Banner/Banner";
import ShowEstates from "../../components/ShowEstates/ShowEstates";
import ProvidingSection from "../../components/ProvidingSection/ProvidingSection";

import { Helmet } from "react-helmet";


const Home = () => {
    <Helmet>
                <meta charSet="utf-8" />
                <title>Home - LuxuryLair</title>
                <link rel="canonical" href="http://mysite.com//" />
    </Helmet>
    
    // console.log(allData);
    return (
        <div >

            <Banner></Banner>
            <div className="w-full p-2 md:max-w-7xl mx-auto">
            <ShowEstates></ShowEstates>
            <ProvidingSection></ProvidingSection>
            </div>
        </div>
    );
};

export default Home;