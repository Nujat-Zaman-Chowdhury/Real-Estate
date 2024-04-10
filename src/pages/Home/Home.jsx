
import Banner from "../../components/Banner/Banner";

import ShowEstates from "../../components/ShowEstates/ShowEstates";
import ProvidingSection from "../../components/ProvidingSection/ProvidingSection";


const Home = () => {
    
    // console.log(allData);
    return (
        <div>
            <Banner></Banner>
            <ShowEstates></ShowEstates>
            <ProvidingSection></ProvidingSection>
        </div>
    );
};

export default Home;