import UseTitle from "../../Title/UseTitle";
import { Link, } from "react-router-dom";

const Contact = () => {

    UseTitle("Contact")
    return (
        <div>
            <div className="hero w-full  rounded-2xl" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Contact Us</h1>
                        <div className="card w-96 bg-primary text-primary-content">
                            <div className="card-body">
                            <div className="flex gap-2 mx-auto lg:mx-0">
                        <img src={'https://i.ibb.co/X2WnJ3F/Frame.png'} alt=""/>
                        <a className="link link-hover text-[#FFFFFF99]">azhar73397@gmail.com</a>
                    </div>
                    <div className="flex gap-2 mx-auto lg:mx-0">
                        <img src={'https://i.ibb.co/X2WnJ3F/Frame.png'} alt=""/>
                        <a className="link link-hover text-[#FFFFFF99]">190238@ku.ac.bd</a>
                    </div>
                    <div className="flex gap-2 mx-auto lg:mx-0">
                        <img src={'https://i.ibb.co/X2WnJ3F/Frame.png'} alt=""/>
                        <a className="link link-hover text-[#FFFFFF99]">azharuddin1938@cseku.ac.bd</a>
                    </div>
                    <div className="flex gap-2 mx-auto lg:mx-0">
                        <img src={'https://i.ibb.co/SsYgTTw/Frame-1.png'} alt=""/>
                        <a className="link link-hover text-[#FFFFFF99]">8801304586306</a>
                    </div>
                    <div className="flex gap-2 mx-auto lg:mx-0">
                        <img src={'https://i.ibb.co/SsYgTTw/Frame-1.png'} alt=""/>
                        <a className="link link-hover text-[#FFFFFF99]">(+62)123-321-543</a>
                    </div>
                            </div>
                        </div>
                        <Link to={'/login'}>
                        <button className="btn btn-primary mt-8">Login</button>
                        </Link>
                    </div>
                  
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Contact;