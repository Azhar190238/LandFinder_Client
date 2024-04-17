

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
                            What is land?
                            </div>
                            <div className="collapse-content">
                                <p> The land that deals with land transaction, sale, transfer, land tenure, etc. is called land law.</p>
                            </div>
                            <div className="w-full h-[1px] bg-[#13131833]"></div>
                        </div>

                        <div className="collapse collapse-plus ">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                                What is land law?
                            </div>
                            <div className="collapse-content">
                                <p>The law that deals with land transaction, sale, transfer, land tenure, etc. is called land law.

                                </p>
                            </div>
                            <div className="w-full h-[1px] bg-[#13131833]"></div>
                        </div>

                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                                What is a Khatian?
                            </div>
                            <div className="collapse-content">
                                <p>Khatian is the land record that is prepared during the survey along with the details of the land ownership of one or more land owners based on the mouza.

                                </p>
                            </div>
                            <div className="w-full h-[1px] bg-[#13131833]"></div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                                What is Namjari?


                            </div>
                            <div className="collapse-content">
                                <p>Namjari is the process of registering the name of a new owner of a land by inheritance or purchase or any other process.

                                </p>
                            </div>
                            <div className="w-full h-[1px] bg-[#13131833]"></div>
                        </div>
                        <div className="collapse collapse-plus ">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                                What is a Porcha?


                            </div>
                            <div className="collapse-content">
                                <p>The copy of the draft khatian prepared during the land survey which is distributed to the land owner before attestation is called field porcha. A copy of the Khatian record is called a Porcha after the Porcha has been attested by the revenue officer and the Khatian is finally published at the end of the objection and appeal hearing.

                                </p>
                            </div>
                            <div className="w-full h-[1px] bg-[#13131833]"></div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                                What is the schedule?



                            </div>
                            <div className="collapse-content">
                                <p>Schedule means introductory details of the land. In order to give the identity of a land, the name of the concerned mouza, khatian no., Dag no., Boundary of the land, amount of land etc.\

                                </p>
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