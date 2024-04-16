import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaRegUser } from "react-icons/fa6";
import { CiLink } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { Helmet } from "react-helmet";

const UpdateProfile = () => {
  
  const { user, updateUserProfile, setUser} = useContext(AuthContext);

  // console.log(location);
  const [userName, setUserName] = useState("");
  const [userPhoto, setUserPhoto] = useState("");
  // console.log(userName);

  const handleSubmit = () => {
  
    updateUserProfile(userName,userPhoto)
    .then(
      setUser({...user,displayName:userName,photoURL:userPhoto})
    )

  };

  //  useEffect(()=>{
  //     updateProfile(auth.currentUser,{
  //       displayName:userName,
  //       photoURL:userPhoto,
  //     })

  //  },[userName,userPhoto])

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Update Profile - LuxuryLair</title>
        <link rel="canonical" href="http://mysite.com//" />
      </Helmet>

      <div className="w-full  mx-auto py-3 my-10">
        <div className="p-6 w-full md:w-2/4 lg:w-1/3 mx-auto rounded-md shadow-xl dark:bg-gray-50 dark:text-gray-900">
          <h2 className="text-2xl font-roboto text-[#4a5e94] font-semibold text-center mb-4">Your profile</h2>
          <img
            src={user.photoURL}
            alt=""
            className="object-cover object-center h-[320px] w-full  mx-auto rounded-md  dark:bg-gray-500"
          />
          <div className="mt-6 mb-2 space-y-3 flex flex-col justify-center text-center font-roboto">
            <h2 className="text-xl font-roboto font-semibold tracking-wide">
              {user?.displayName}
            </h2>
            <p className="dark:text-gray-800 font-roboto">{user?.email}</p>

            <a
              onClick={() => document.getElementById("my_modal_2").showModal()}
              href="#"
              className="label-text-alt link link-hover flex justify-center items-center"
            >
              {/* <button className="btn">Update</button> */}
              <button
                className="btn btn-outline"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Update Profile
              </button>
            </a>
          </div>
        </div>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle px-2">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Update Your profile</h3>
          <form className="w-full md:w-2/3 mx-auto mt-3 space-y-4">
            <label className="input input-bordered flex items-center gap-2">
              <FaRegUser className="text-gray-500"></FaRegUser>
              <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                className=""
                name="name"
                placeholder="Your Name"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <CiLink></CiLink>
              <input
                onChange={(e) => setUserPhoto(e.target.value)}
                type="text"
                className=""
                placeholder="Photo URL"
              />
            </label>
            <button onClick={handleSubmit} className="btn w-full">
              Save
            </button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn text-xl">
                <IoCloseOutline />
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateProfile;
