import React, { useEffect, useState } from 'react';
import './Courses.css';
import Reading from '../Reading/Reading';
import Writing from '../Writing/Writing';
import Speaking from '../Speaking/Speaking';
import Listening from '../Listening/Listening';


const Courses = () => {
    return (
        <div className="courses">
            <Reading></Reading>
            <Writing></Writing>
            <Speaking></Speaking>
            <Listening></Listening>
        </div>
    );
};

export default Courses;