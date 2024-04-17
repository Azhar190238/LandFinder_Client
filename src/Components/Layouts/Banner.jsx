import 'animate.css';
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero rounded-2xl sm:w-full md:w-full lg:w-full min-h-screen" style={{ backgroundImage: 'url(https://i.postimg.cc/vT67LkwD/6-1.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold animate__animated animate__backInRight">Welcome The Beautiful & Gorgeous Land</h1>
                                <p className="mb-5">In surveying and property law, a land description or legal description is a written statement that delineates the boundaries of a piece of real property. In the written transfer of real property.</p>
                                <button className="btn btn-primary">Let's Visit This Place</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero md:w-full sm:w-full rounded-xl" style={{ backgroundImage: 'url(https://i.postimg.cc/wBKCXYKR/4-1.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold animate__animated animate__backInRight ">Welcome The Beautiful & Gorgeous Land</h1>
                                <p className="mb-5">In surveying and property law, a land description or legal description is a written statement that delineates the boundaries of a piece of real property. In the written transfer of real property.</p>
                                <button className="btn btn-primary">Let's Visit This Place</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero md:w-full sm:w-full rounded-xl" style={{ backgroundImage: 'url(https://i.postimg.cc/HkjYZgPS/3-1.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold animate__animated animate__backInRight">Welcome The Beautiful & Gorgeous Land</h1>
                                <p className="mb-5">In surveying and property law, a land description or legal description is a written statement that delineates the boundaries of a piece of real property. In the written transfer of real property.</p>
                                <button className="btn btn-primary">Let's Visit This Place</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="hero md:w-full sm:w-full rounded-xl" style={{ backgroundImage: 'url(https://i.postimg.cc/TPFJLfBB/9-1.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold animate__animated animate__backInRight">Welcome The Beautiful & Gorgeous Land</h1>
                                <p className="mb-5">In surveying and property law, a land description or legal description is a written statement that delineates the boundaries of a piece of real property. In the written transfer of real property.</p>
                                <button className="btn btn-primary">Let's Visit This Place</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;








