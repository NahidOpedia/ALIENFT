import React from 'react';
const FQAque = () => {
    return (
    <div className='container-fqa mt-5'>
            <h4>Frequently Asked Questions</h4>
            <h1>Have Any Questions ?</h1>
            <p>Frequently asked questions (FAQ) or Questions and Answers (Q&A), are listed
                questions and answers, all supposed to be commonly.</p>



            <div>
                <div id="accordionExample">
                    <div className="accordion-item-costom">
                        <h2 className="accordion-header-costom d-flex justify-content-between" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is solanverse?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body accordion-body-custom">
                            Solanverse is defi token with lots of utility and good future
                            </div>
                        </div>
                    </div>







                    <div className="accordion-item-costom">
                        <h2 className="accordion-header d-flex justify-content-between" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Does solanverse have owner?

                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body accordion-body-custom">
                            Yes solanverse have big technical team behind this project Garry smith is lead and founder of the project and Andrew Lewis is co founder 
                            </div>
                        </div>
                    </div>





                    <div className="accordion-item-costom">
                        <h2 className="accordion-header d-flex justify-content-between" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            How solanverse will revolutionise crypto market?
                            </button>
                            {/* <i type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"className="fa-solid fa-chevron-down text-center text-white"></i> */}
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body accordion-body-custom">
                            Solanverse will take advantage of the booming  areas of cryptospace such as nfts metaverse and p2e  launchpads etc.... with support of community and founder solanverse keep expanding utility in the future.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default FQAque;