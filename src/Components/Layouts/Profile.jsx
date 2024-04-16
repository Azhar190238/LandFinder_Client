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
                        <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-2xl font-bold"></h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default Profile;