import React, { useState, useEffect } from 'react';
import Home from './Home';
import Contact from './Contact';
import './CardFlip.css';
import useScrollStep from '../hooks/useScrollStep';

const CardFlip = () => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => setFlipped(true);
    const handleUnflip = () => setFlipped(false);
    const scrollStep = useScrollStep(10, 5);

    return (
        <div className={`flip-card-container${flipped || scrollStep > 2 ? ' scrolled' : ''}${flipped ? ' flipped' : ''}`}> 
            <div className="flip-card">
                <div className="flip-card-front">
                    <Home onPicClick={handleFlip} />
                </div>
                <div className="flip-card-back">
                </div>
            </div>
        </div>
    );
};

export default CardFlip;