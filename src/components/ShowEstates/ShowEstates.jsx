import { useEffect, useState } from "react";
import SingleEstates from "../SingleEstates/SingleEstates";
import TabContents from "../TabContents";

const ShowEstates = () => {
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedTab, setSelectedTab] = useState(0); // 0 for All, 1 for Sale, 2 for Rent
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetch('data.json')
            .then((res) => res.json())
            .then((data) => {
                setAllData(data);
                setFilteredData(data); // Display all data by default
            });
    }, []);

    useEffect(() => {
        let status = null;
        if (selectedTab === 1) {
            status = 'sale';
        } else if (selectedTab === 2) {
            status = 'rent';
        }

        let filtered = allData;
        if (status) {
            filtered = filtered.filter(item => item.status === status);
        }
        
        if (searchQuery) {
            filtered = filtered.filter(item => 
                item.estate_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredData(filtered);
    }, [selectedTab, allData, searchQuery]);

    const handleTabSelect = (index) => {
        setSelectedTab(index);
    };
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    

    return (
        <div className="mt-10 lg:mt-20">
            <div className="space-y-3">
                <h3 className="text-2xl md:text-4xl font-roboto text-[#2B262D] font-semibold">Latest Properties</h3>
                <p className="text-xl font-eb">We offer an extensive selection of the latest properties, ensuring you find the perfect one that aligns perfectly with your preferences and needs</p>
            </div>
            <div className="flex justify-between">
                <div className="w-1/3 mt-3">
                    <TabContents onTabSelect={handleTabSelect} />
                </div>
                <div className="w-1/3 mt-3 flex justify-end">
                <input 
                    type="text" 
                    placeholder="Search properties..." 
                    value={searchQuery} 
                    onChange={handleSearchChange} 
                    className="border p-2 w-[300px] text-[#647295] border-[#647295] focus:outline-none"
                />
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
