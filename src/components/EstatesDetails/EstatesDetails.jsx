import {useLoaderData,useParams} from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline } from 'react-icons/io5';
import { LuBath } from 'react-icons/lu';
import { BsArrowsFullscreen } from 'react-icons/bs';


const EstatesDetails = () => {
    const allData = useLoaderData();
   
    const {id} = useParams();
    const idInt = parseInt(id)
    const data = allData.find(data=>data.id === idInt)
    const { estate_title, price, image,description,bedrooms,bathrooms,parking,area,location ,facilities,status} = data;

    return (
        <div className="flex flex-col max-w-7xl mx-auto py-10">
        <div className='flex flex-col md:flex-row gap-6 lg:h-[540px] p-4'>
            <img src={image} alt="Album" className='w-full md:w-[60%] object-cover rounded-md shadow-md'/>
            <div className=''>
                <h4 className="card-title text-2xl md:text-3xl lg:text-4xl font-eb leading-relaxed mb-2">{estate_title}</h4>
                <hr className='border border-gray-300 my-4' />
                <h4 className='flex flex-col lg:flex-row items-center gap-2 mt-3 text-base lg::text-xl font-roboto text-[#647295]'><CiLocationOn />Location:<span className='font-roboto'> {location}</span></h4>
                <hr className='border border-gray-300 my-4' />
                <p className='my-3 text-lg'><span className='font-semibold'>Price:</span> {price}</p>
                <p className='my-3 text-lg'><span className='font-semibold'>Area:</span> {area}</p>
                <div>
                    <h4 className='text-lg mb-3 font-roboto font-medium'>Facilities</h4>
                    <div>
                    {
                        facilities.map((facilitie,index)=><li key={index}>{facilitie}</li>)
                    }
                    </div>
                </div>
                <div className='md:my-6'>
                    <p className='text-lg mb-3 font-roboto font-medium'>Overview</p>
                    <div className="flex  items-center justify-evenly gap-4 text-[#5C727D] font-eb my-3">
                    <p><span className="flex flex-col items-center gap-2 text-xl text-black"><IoBedOutline />{bedrooms}</span> Bedrooms</p>
                    <p><span className="flex flex-col items-center gap-2 text-xl text-black"><LuBath />{bathrooms}</span> Bathrooms</p>
                    <p><span className="flex flex-col items-center gap-2 text-xl text-black"><BsArrowsFullscreen />{parking} </span>Parkings</p>
                    </div>
                </div>
                
            </div>
        </div>
        <div className=" p-2">
            
            <p className='md:mt-4 text-xl font-eb'><span className='font-bold'>Desciption:</span>{description}</p>
            
            <div className="card-actions justify-end">
            <button className="btn bg-[#647295] text-white">{status}</button>
            </div>
        </div>
        </div>
    );
};

export default EstatesDetails;