import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('./fakeServicesDb.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);
    return (
        <div className="d-block">
            {/* Banner Section */}
            <div className="d-block bg-dark">
                <div className="banner-img-container">
                    <img src="./banner.jpg" className="img-fluid"/>
                    <div className="banner-caption">
                        <p>Start your IELTS journey with us.</p>
                    </div>
                    <div className="banner-text">
                        <h1 className="fw-light text-white bg-dark rounded-pill p-3 w-75 m-auto mb-3">Learn English Effectively</h1>
                        <button className="btn btn-light m-auto rounded-pill">Register Course Now</button>
                    </div>
                </div>
            </div>
            {/* Preparation Section */}
            <div className="preparation-container my-5 px-3">
                <h1>Prepare for IELTS Test</h1>
                <p>IELTS is the world's most popular English language test. If your aim is to study, migration or work on abroad, you will need to take IELTS test. Our aim is to prepare you for the IELTS test so that you can get a good score. IELTS is accepted by more than 11,000 employers, universities, schools and imigration bodies around the world.</p>
                <Button variant="dark">Learn More</Button>
            </div>
            {/* Four Services Section */}
            <div className="services-container my-5">
                <h1>Our Main Services</h1>
                {
                    services.map(service => service.id < 5? 
                        <div className="d-flex flex-wrap">
                            <div className="service-img p-3">
                                <img src={service.img}/>
                            </div>
                            <div className="service-info p-3">
                                <h3 className="text-start">{service.title}</h3>
                                <p className="text-start text-secondary">{service.description}</p>
                            </div>
                        </div>
                        : console.log(''))
                }
            </div>
        </div>
    );
};

export default Home;