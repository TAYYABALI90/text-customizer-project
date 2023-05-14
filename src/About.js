import React, {useState} from 'react'

export default function About() {

    let [myStyle] = useState({

         color: "black",

         backgroundColor: "white"

    });

    // let [btnText, setBtnText] = useState("Enable Dark Mode");

    // let toggleStyle = () => {

    //     if(myStyle.color === "black") {

    //         setMyStyle({

    //             color: "white",

    //             backgroundColor: "black"

    //         })

    //         setBtnText("Enable Light Mode");

    //     } else {

    //         setMyStyle({

    //             color: "black",

    //             backgroundColor: "white"

    //         });

    //         setBtnText("Enable Dark Mode");

    //     }

    // };

    // let myStyle = {

    //     color: "white",

    //     backgroundColor: "black",

        
    // }
    return (
        <div className='container p-5 my-4' style={myStyle}>
            <h1 className='text-center my-4 fw-bold text-decoration-underline'>ABOUT US</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button fw-bold" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze Your Text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Text --Customizer Gives You A Way To Analyze Your Text Quickly And Efficiently. Be It Word Count Or Character Count
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed fw-bold" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free To Use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Text --Customizer Is A Free Character Count Tool That Provides Instant Character Count And Word Count Characteristics For A Given Text. Text --Customizer Reports The Number Od Words And Characters. Thus It Is Suitable For Writing Text With Word/Character Limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed fw-bold" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This Word Counter Software Works In Any Web Browsers Such As Google Chrome, FireFox, Internet Explorer, Safari, Opera E.T.C. It Suits To Count Characters In Facebook, Blog, Books, Excel Document, PDF Document, Esays E.T.C.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
                <button className='btn btn-dark my-2 mx-2' onClick={toggleStyle}>{btnText}</button>
            </div> */}
            </div>
    )
}
