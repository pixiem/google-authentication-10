import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Footer from '../Footer/Footer';
import Headnav from '../navigation/Headnav';
import './Home.css'

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./serviceO.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="main-body">
            <Headnav></Headnav>

            <div className="d-flex  main-container" >
                <div className="col div-left justify-content-center align-items-center text-start ">
                    <h2> We are committed to provide affordable quality of service
                    </h2>
                    <h6 className="my-4">Popular Diagnostic Centre Ltd. is an advanced Centre providing the diagnostic imaging services in an elevated ambience, completed by service and report efficiency.</h6>
                    <button className="button">Book Now</button>
                </div>
                <div className="col div-right" >
                    <img width="100%" src="./hero.png" alt="" />
                </div>
            </div>

            <h1>Our Top Services</h1>
            <div className="row row-col-3 course-container">
                {
                    courses.map(course => <Course course={course}
                    ></Course>)
                }
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Home;