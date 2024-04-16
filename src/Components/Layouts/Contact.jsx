import UseTitle from "../../Title/UseTitle";

const Contact = () => {
    UseTitle("Contact")
    return (
        <div>
            <div className="hero w-full  " style={{ backgroundImage: 'url(https://i.ibb.co/ZL4xJhR/pawel-czerwinski-Zkzob-NDay-Xo-unsplash.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Contact Us</h1>
                        <div className="card w-96 bg-primary text-primary-content">
                            <div className="card-body">
                                <h2 className="text-center text-2xl">Contact Now</h2>
                                <p>Email: jewel190237@gmail.com</p> 
                                <p>Mobile: 01980445424</p> 
                            </div>
                        </div>
                        <button className="btn btn-primary mt-8">Login</button>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Contact;