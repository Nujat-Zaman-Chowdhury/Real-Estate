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
        <div className="mt-10 lg:mt-20">
            <div className="space-y-3">
            <h3 className="text-2xl md:text-4xl font-roboto text-[#2B262D] font-semibold" >Latest Properties</h3>
            <p className="text-xl font-eb">We offer an extensive selection of the latest properties, ensuring you find the perfect one that aligns perfectly with your preferences and needs</p>
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