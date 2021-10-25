import React from 'react';
import './NotFound.css';
import img from '../../images/404.jpg';
import { Button } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="not-found-text">
                <h1>Page Not <br />Found</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quos magni ut fugiat sed. Quis modi natus voluptates porro consequuntur, distinctio delectus? Perspiciatis assumenda cupiditate ducimus ut commodi nobis inventore.</p>
                <Button variant="secondary">Go Back</Button>
            </div>
            <div className="not-found-img">
                <img height="400px" width="600px" src={img} alt="" />
            </div>
        </div>
    );
};

export default NotFound;