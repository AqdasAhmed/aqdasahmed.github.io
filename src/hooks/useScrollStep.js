import React, {useState, useEffect} from "react";

function useScrollStep(stepHeight = 100, maxStep = Infinity) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newStep = Math.min(Math.floor(scrollY / stepHeight), maxStep);
            setStep(newStep);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [stepHeight, maxStep]);

    return step;
}

export default useScrollStep