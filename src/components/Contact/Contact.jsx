import { Marker, Popup } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import 'Leaflet/dist/leaflet.css'
import gpsIcon from "../../assets/gps.png";
import { FaMobile} from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Icon } from 'leaflet';
const position = [51.505, -0.08]
const Contact = () => {
    const customIcon = new Icon({
        
        iconUrl: gpsIcon,
        iconSize: [38, 38] // size of the icon
      });
    return (
        <div className='max-w-7xl mx-auto rounded-md my-9 p-3'>
            <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact - LuxuryLair</title>
                <link rel="canonical" href="http://mysite.com//" />
    </Helmet>
            </HelmetProvider>
            <MapContainer class="leaflet-container"  center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={position} Icon={customIcon}>
      <Popup>
      1889 NW 79st St, Asheville, NC 98726
      </Popup>
    </Marker>
</MapContainer>
        <div className='flex flex-col lg:flex-row gap-6 font-roboto items-center justify-center shadow-md rounded p-14 w-full lg:w-[80%] mx-auto lg:-translate-y-8 z-40'>
            <div className='flex flex-col items-center space-y-3 text-xl'>
                <FaMobile></FaMobile>
                <p>11223 543 5432</p>
            </div>
            <div className='flex flex-col items-center space-y-3 text-xl'>
                <FaMapLocation></FaMapLocation>
                <p>1889 NW 79st St, Asheville, NC 98726</p>
            </div>
            <div className='flex flex-col items-center space-y-3 text-xl'>
            <IoMdMail />
            <p>inquiry@luxurylair.com</p>
            </div>
        </div>

        
        <div className="p-0 md:p-6  mt-6">
	<form  className="bg-[#dcf0fa] w-full lg:w-[70%] mx-auto p-8 space-y-6 rounded-md shadow dark:bg-gray-50">
		<h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
		<div className='flex flex-col md:flex-row items-center gap-4'>
			<div className='w-full md:w-[50%]'>
            <label htmlFor="name" className="block mb-1 ml-1">Name</label>
			<input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 bg-white shadow-lg" />
            </div>
			<div className='w-full md:w-[50%]'>
            <label htmlFor="phone" className="block mb-1 ml-1">Phone</label>
			<input id="name" type="text" placeholder="Your phone number" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 bg-white shadow-lg" />
            </div>
		</div>
		<div>
			<label htmlFor="email" className="block mb-1 ml-1">Email</label>
			<input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 bg-white shadow-lg" />
		</div>
		<div>
			<label htmlFor="message" className="block mb-1 ml-1">Message</label>
			<textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 bg-white shadow-lg"></textarea>
		</div>
		<div>
			<button type="submit" className="bg-[#647295] text-white font-roboto w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-600 focus:dark:ring-violet-600 hover:dark:ring-violet-600 ">Send</button>
		</div>
	</form>
</div>
        </div>
       
    );
};

export default Contact;