// import AllData from "../../components/AllData/AllData";
import Banner from "../../components/Banner/Banner";
import {useLoaderData} from "react-router-dom"
import ShowEstates from "../../components/ShowEstates/ShowEstates";


const Home = () => {
    const allData = useLoaderData();
    // console.log(allData);
    return (
        <div>
            <Banner></Banner>
            <ShowEstates name={'Latest Properties'} allData={allData}></ShowEstates>
        </div>
    );
};

export default Home;