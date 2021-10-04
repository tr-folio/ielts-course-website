import React, { useEffect, useState } from 'react';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('./fakeServicesDb.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);
    console.log(services);
    return (
        <div className="services-container d-block my-5">
            <h1 className="mb-3">Our Services</h1>
            <div className="all-services">
                {
                    services.map(service => 
                        <div className="single-service">
                            <div className="service-img">
                                <img src={service.img}/>
                            </div>
                            <h3 className="mt-3">{service.title}</h3>
                            <p className="text-secondary">{service.description}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Services;