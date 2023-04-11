import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import { Typewriter } from 'react-simple-typewriter'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='text-white text-center mt-5'>Cyber <Typewriter
                words={["Security Solutions"]}
                loop={true}
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1000}
            ></Typewriter></h1>
            <div className='row mt-5 gy-3'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div >
    );
};

export default Services;