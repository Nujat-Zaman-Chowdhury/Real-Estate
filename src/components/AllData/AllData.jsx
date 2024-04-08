import DataCard from "../DataCard/DataCard";

const AllData = ({name,allData}) => {
    
    return (
        <div className="mt-10">
            <div className="space-y-3">
            <h2 className="text-4xl font-roboto font-bold text-[#2B262D]">{name}</h2>
            <p>We provide the best property you like</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    allData.map(data=><DataCard key={data.id} data={data}></DataCard>)
                }
            </div>
        </div>
    );
};

export default AllData;