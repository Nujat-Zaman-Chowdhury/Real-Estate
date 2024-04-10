// import AllData from "../../components/AllData/AllData";
import Banner from "../../components/Banner/Banner";
import {useLoaderData} from "react-router-dom"
import ShowEstates from "../../components/ShowEstates/ShowEstates";


const Home = () => {
    
    // console.log(allData);
    return (
        <div>
            <Banner></Banner>
            <ShowEstates></ShowEstates>
        </div>
    );
};

export default Home;