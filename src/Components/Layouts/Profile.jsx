import { useContext } from "react";
import { authContext } from "../../Providers/AuthProvider";
import UseTitle from "../../Title/UseTitle";


const Profile = () => {
  UseTitle("Profile")
    const { user } = useContext(authContext)
    console.log(user)
        return (
            <div>
            <div className="hero min-h-screen bg-base-200">
   <div className="hero-content flex-col lg:flex-row">
     <img src="https://i.postimg.cc/jqZMCDNL/PXL-20230929-160224583.jpg" className="max-w-sm rounded-lg shadow-2xl" />
     <div>
       <h1 className="text-5xl font-bold"> Azharuddin</h1>
       
     </div>
   </div>
 </div> 
         </div>
        );
    };

    export default Profile;