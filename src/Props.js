import React from 'react';



const Props = (Props) => {
    return (
        <>
            <div className="col-lg-3 my-3">
                <div className="card">
                    <img src={Props.imgsrc} className="card-img-top" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">{Props.title}</h5>
                        <p className="card-text">{Props.text}</p>
                        <a href="www.google.com" className="btn btn-primary">{Props.btn}</a>

                    </div>
                </div >
            </div>
        </>
    );
};

export default Props
