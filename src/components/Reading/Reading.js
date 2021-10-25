import React from 'react';
import './CourseStyle.css';
import img from '../../images/course-1.jpg'
import { Button } from 'react-bootstrap';

const Reading = () => {
    return (
        <div className="course-style">
            <h1>Reading</h1>
            <img height="200px" width="300px" src={img} alt="" />
            <h3>Price: $150</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus saepe ipsum dolorem deserunt soluta officiis maiores, dolores id excepturi. Voluptas saepe, nihil vel nisi tempore ut velit ad laboriosam voluptatibus!</p>
            <Button variant="primary">Purchase</Button>
        </div>
    );
};

export default Reading;