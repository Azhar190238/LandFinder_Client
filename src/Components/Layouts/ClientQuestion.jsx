

const ClientQuestion = () => {
    return (
        <div>
           <div className="text-center mt-16 mb-10 space-y-4 p-8">
                <h2 className="text-3xl font-extrabold">Clients Question</h2>
                <p className="text-text-body">Apr 14, 2016 · 90 Questions to Ask to Improve Your Client Relationships Previous<br />Marketing (Performance & Goals 1)</p>
            </div>
            <div className="border-2 rounded-xl">
                <div className="flex flex-col lg:flex-row gap-5 p-8">
                    <div>
                        <img className="lg:h-full" src="images/11.png" alt="" />
                    </div>
                    <div>
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" checked="checked" />
                            <div className="collapse-title text-xl font-bold">
                                Our Equipment
                            </div>
                            <div className="collapse-content">
                                <p>The act of equipping a person or place to be  Fewer examples The soldiers gave their equipment a final check before setting off. Firefighters had to cut the trapped driver free using special equipment.</p>
                            </div>
                            <div className="w-full h-[1px] bg-[#13131833]"></div>
                        </div>
                        
                        <div className="collapse collapse-plus ">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                                Hockey Training
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                            <div className="w-full h-[1px] bg-[#13131833]"></div>
                        </div>

                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                                Private Lessons
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                            <div className="w-full h-[1px] bg-[#13131833]"></div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                               Ski Touring
                            </div>
                            <div className="collapse-content">
                                <p>hello!</p>
                            </div>
                            <div className="w-full h-[1px] bg-[#13131833]"></div>
                        </div>
                        <div className="collapse collapse-plus ">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                                Booking
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                            <div className="w-full h-[1px] bg-[#13131833]"></div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                                Pricings
                            </div>
                            <div className="collapse-content">
                                <p>hello!</p>
                            </div>
                            <div className="w-full h-[1px] bg-[#13131833]"></div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default ClientQuestion;