import AllData from "../../components/AllData/AllData";
import Banner from "../../components/Banner/Banner";
import {useLoaderData} from "react-router-dom"


const Home = () => {
    const allData = useLoaderData();
    // console.log(allData);
    return (
        <div>
            <Banner></Banner>
            <AllData name={'Featured Properties'} allData={allData}></AllData>
        </div>
    );
};

export default Home;