import { Link, useLoaderData, useParams } from "react-router-dom";
import UseTitle from "../../Title/UseTitle";

const LandDetails = () => {
   UseTitle("LandDetails");
    const { id } = useParams()
    const lands = useLoaderData()
    const land = lands.find(land => land.id == id)

    return (
        <div>
            <div className="hero ">
                <div className="hero-content flex md:flex-col lg:flex-row gap-10 mx-auto">
                    <img className='w-2/3 rounded-3xl bg-[#1313130D]' src={land.image}/>
                    <div>
                        <h1 className="text-xl font-bold px-2 pb-2">Name: {land.name}</h1>
                        <p className="p-2">Title : {land.title}</p>
                        <hr />
                        <p className="font-bold p-2">Review: <span className="font-thin">{land.review}</span></p>
                        <hr />
                        <div className="flex">
                            <p className="p-2 font-bold">Facilities</p>
                            <p className="p-2 text-[#23BE0A] bg-[#23BE0A0D] rounded-xl ">#{land.special_facilities[0]}</p>
                            <p className="p-2 text-[#23BE0A] bg-[#23BE0A0D] rounded-xl">#{land.special_facilities[1]}</p>
                        </div>
                        <hr />
                        <div >
                            <div className="flex mt-1">
                                <p className="mr-16">Location:</p>
                                <Link to='/location'><p className="font-bold">{land.Location}</p> </Link>
                                

                            </div>
                            <div className="flex mt-1">
                                <p className="mr-16">Status:</p>
                                <p className="font-bold">{land.status}</p>
                            </div>
                            <div className="flex mt-1">
                                <p className="mr-16">Area:</p>
                                <p className="font-bold">{land.area}</p>
                            </div>
                            <div className="flex mt-1">
                                <p className="mr-16">Rating:</p>
                                <p className="font-bold">{land.rating}</p>
                            </div>
                            <div className="flex mt-1">
                                <p className="mr-16">City:</p>
                                <p className="font-bold">{land.nearest_city}</p>
                            </div>
                            <div className="flex mt-1">
                                <p className="mr-16"> Type:</p>
                                <p className="font-bold">{land.property_type}</p>
                            </div>
                            <div className="flex mt-1">
                                <p className="mr-10">Prices:</p>
                                <p className="font-bold">{land.price}</p>
                            </div>
                            <div className="flex mt-1">
                                <p className="mr-10">Discount: </p>
                                <p className="font-bold">{land.discount}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandDetails;