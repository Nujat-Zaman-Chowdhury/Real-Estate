import { useEffect, useState } from "react";
import SingleEstates from "../SingleEstates/SingleEstates";


const ShowEstates = () => {
    const [allData,setAllData] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then((res) => res.json())
      .then((data) => setAllData(data));
    })

    return (
        <div className="mt-10">
            <div className="space-y-3">
            <h3 className="text-4xl font-roboto text-[#2B262D] font-semibold">Latest Properties</h3>
            <p className="text-xl text-grey-500">We provide the best property you like</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" >
                {
                    allData.map(data=><SingleEstates key={data.id} data={data}></SingleEstates>)
                }
            </div>
        </div>
    );
};

export default ShowEstates;