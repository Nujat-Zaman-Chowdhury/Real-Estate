import { useEffect, useState } from "react";
import SingleEstates from "../SingleEstates/SingleEstates";
import TabContents from "../TabContents";

const ShowEstates = () => {
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedTab, setSelectedTab] = useState(0);

    useEffect(() => {
        fetch('data.json')
            .then((res) => res.json())
            .then((data) => {
                setAllData(data);
                setFilteredData(data.filter(item => item.status === 'sale')); // Default to Sale
            });
    }, []);

    useEffect(() => {
        const status = selectedTab === 0 ? 'sale' : 'rent';
        setFilteredData(allData.filter(item => item.status === status));
    }, [selectedTab, allData]);

    const handleTabSelect = (index) => {
        setSelectedTab(index);
    };

    return (
        <div className="mt-10 lg:mt-20">
            <div className="space-y-3">
                <h3 className="text-2xl md:text-4xl font-roboto text-[#2B262D] font-semibold">Latest Properties</h3>
                <p className="text-xl font-eb">We offer an extensive selection of the latest properties, ensuring you find the perfect one that aligns perfectly with your preferences and needs</p>
            </div>
            <div>
                <div className="w-1/3 mt-2">
                <TabContents onTabSelect={handleTabSelect} />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    filteredData.map((data, index) => <SingleEstates key={index} data={data}></SingleEstates>)
                }
            </div>
        </div>
    );
};

export default ShowEstates;
