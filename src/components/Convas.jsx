import { useEffect, useState } from "react";
import './css/Convas.css';

export function Convas() {

    return (
        <>
            <div className='convas-gradient-left-one'>
                <img className='convas-star-left-one' src='star.png'></img>
            </div>

            <div className='convas-gradient-right-two'>
                <img className='convas-star-right-two' src='star.png'></img>
            </div>

            <div className='convas-gradient-left-three'>
                <img className='convas-star-left-three' src='star.png'></img>
            </div>

            <div className='convas-gradient-right-four'>
                <img className='convas-star-right-four' src='star.png'></img>
            </div>
        </>
    );

}