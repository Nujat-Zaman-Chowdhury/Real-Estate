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
        <div className="flex flex-col">
        <div className='flex flex-col md:flex-row lg:flex-row gap-6 md:h-[500px]'>
            <img src={image} alt="Album" className='w-full md:w-[60%] object-cover rounded-md'/>
            <div className=''>
                <h4 className="card-title  text-4xl font-eb leading-relaxed mb-2">{estate_title}</h4>
                <hr className='border border-gray-300' />
                <h4 className='flex items-center gap-2 mt-3 text-xl'><CiLocationOn />Location:<span> {location}</span></h4>
                <p className='my-3 text-lg'>Price: {price}</p>
                <p className='my-3 text-lg'>Area: {area}</p>
                <div>
                    <h4 className='text-lg'>Facilities</h4>
                    {
                        facilities.map(facilitie=><li key={id}>{facilitie}</li>)
                    }
                </div>
                <div className='my-6'>
                    <p className='text-black text-xl mb-5'>Overview</p>
                    <div className="flex items-center justify-evenly gap-4 text-[#5C727D] font-eb my-3">
                    <p><span className="flex flex-col items-center gap-2 text-xl text-black"><IoBedOutline />{bedrooms}</span> Bedrooms</p>
                    <p><span className="flex flex-col items-center gap-2 text-xl text-black"><LuBath />{bathrooms}</span> Bathrooms</p>
                    <p><span className="flex flex-col items-center gap-2 text-xl text-black"><BsArrowsFullscreen />{parking} </span>Parkings</p>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="card-body p-2 md:p-0">
            
            <p className=''><span>Desciption:</span>{description}</p>
            
            <div className="card-actions justify-end">
            <button className="btn btn-[#647295]">{status}</button>
            </div>
        </div>
        </div>
    );
};

export default EstatesDetails;