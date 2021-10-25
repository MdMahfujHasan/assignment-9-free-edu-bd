import React from 'react';
import '../Reading/CourseStyle.css';
import img from '../../images/course-4.jpg';
import { Button } from 'react-bootstrap';

const Listening = () => {
    return (
        <div className="course-style">
            <h1>Listening</h1>
            <img height="200px" width="300px" src={img} alt="" />
            <h3>Price: $130</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus saepe ipsum dolorem deserunt soluta officiis maiores, dolores id excepturi. Voluptas saepe, nihil vel nisi tempore ut velit ad laboriosam voluptatibus!</p>
            <Button variant="primary">Purchase</Button>
        </div>
    );
};

export default Listening;