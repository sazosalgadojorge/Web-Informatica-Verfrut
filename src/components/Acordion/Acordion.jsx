import './Acordion.scss'

export default function Acordion({ className, title, description, imageSrc, imageAlt, title2, title3, title4, title5, bodyText, bodyText2, bodyText3, bodyText4 }) {
    return (
        <> 
       <div className={`container p-5 ${className}`}>
            <div className="row">
                <div className="col-xl-6">  
                    <div className="title-area text-center text-md-start">
                        <div className="pb-3">
                            <span className="sub-title fw-bold text-dark fs-1">{title}</span>
                        </div>
                        <div className="">
                            <h2 className="sec-title fw-bold text-primary fs-5">{description}</h2>
                        </div>
                        <div className="accordion py-4" id="faqAccordion">
                        <div className="accordion-item">
                            <div className="accordion-header" id="collapse-item-1">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse-1" aria-expanded="false" aria-controls="collapse-1">{title2}</button>
                            </div>
                            <div id="collapse-1" className="accordion-collapse collapse" aria-labelledby="collapse-item-1"
                                data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    <p>{bodyText}</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <div className="accordion-header" id="collapse-item-2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">{title3}</button>
                            </div>
                            <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="collapse-item-2"
                                data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    <p>{bodyText2}</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <div className="accordion-header" id="collapse-item-3">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">{title4}</button>
                            </div>
                            <div id="collapse-3" className="accordion-collapse collapse" aria-labelledby="collapse-item-3"
                                data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    <p>{bodyText3}</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <div className="accordion-header" id="collapse-item-4">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">{title5}</button>
                            </div>
                            <div id="collapse-4" className="accordion-collapse collapse" aria-labelledby="collapse-item-4"
                                data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    <p>{bodyText4}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="img-container border rounded-3">
                        <img src={imageSrc} alt={imageAlt} className="img-fluid object-fit-cover w-100 h-100" />
                    </div>
                    <div className="faq8-shape"></div>
                </div>
            </div>
        </div>
    </>
    )
}
