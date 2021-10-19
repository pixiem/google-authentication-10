import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Footer from '../Footer/Footer';
import Headnav from '../navigation/Headnav';
import ServicesCourse from '../servicesCourse/ServicesCourse';
import "./Services.css"

const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./serviceTwoadw.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <>
            <Headnav></Headnav>
            <div className="service-section" >
                <h1>Our Top Services</h1>
                <div className=" course-container">
                    {
                        courses.map(course => <ServicesCourse course={course}></ServicesCourse>)
                    }
                </div>


            </div>
            <Footer></Footer>
        </>
    );
};

export default Services;