import React from "react";
import './Loader.scss';
import loaderAnimation from '../assets/loaderAnimation.svg';

function Loader({ name = ("searching") }) {
    return (
        <div className="loader">
            <img src={loaderAnimation} />
            {/* <div className="animation"></div> */}
            <div className="title">{name}</div>
        </div>
    )
}
export default Loader;