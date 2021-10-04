import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('./fakeServicesDb.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);
    console.log(services);
    return (
        <div className="d-block">
            {/* Banner Section */}
            <div className="d-block bg-dark">
                <div className="banner-img-container">
                    <img src="./banner.jpg" className="img-fluid"/>
                    <div className="banner-caption">
                        <p>Start your IELTS journey with us. Learn English effectively.</p>
                    </div>
                </div>
            </div>
            {/* Four Services Section */}
            <div className="services-container">
                {
                    services.map(service => service.id < 5? 
                        <div className="d-flex">
                            <div>
                                <img src={service.img}/>
                            </div>
                        </div>
                        : console.log('oops'))
                }
            </div>
        </div>
    );
};

export default Home;