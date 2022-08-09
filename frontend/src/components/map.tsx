import React, { useState } from 'react';

interface mapProps {
    callback: (e: React.MouseEvent) => void;
}

//free blank map: https://simplemaps.com/resources/svg-cz

// Possible improvement: dynamic width, not responsive for mobile.
function Map({callback}: mapProps) {
    const [active, setActive] = useState<string>("");

    function handleClick(e: React.MouseEvent) {
        if(active)
            (document.getElementById(active) as unknown as SVGElement).style.fill = '#D7D9DF';
        
        (e.target as SVGElement).style.fill = '#1D5AFF';
        setActive((e.target as HTMLElement).id);
        callback(e);
    }

    return (
        <div className="map_container">
            <svg baseProfile="tiny" fill="#D7D9DF" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" version="1.2" viewBox="0 0 1000 570" width="500" xmlns="http://www.w3.org/2000/svg">
                <path d="M374.8 44.8l-0.5 2-1 1.4-0.7 0.4-4.4 0.4-0.6 0.5-0.5 0.8-0.3 1.2-0.3 3.6-0.4 1.7-0.8 1.5-0.9 1.2-1.1 0.8-1.3 0.3-1.2-0.3-7.7-8-1.1-0.5-0.8 0.2-0.5 1.2-1.7 9.6-1.9 1.8-1.1 1.9-0.3 1.2 0 2.4-0.2 1-0.4 0.8-3.3 3.2-0.6 0.8-2.7 7-2.1 1.3-0.7 0.8-0.5 0.9-0.2 1 0.2 1.3 8.3 26.2 10.5 8.7 1.1 5.3-1 0.7-1 1.7-0.3 1.9 0 1.4-0.2 1.9-0.5 1.8-0.5 1-0.9 0.7-1.2 0.7-4.3 3.6-2.2 1.1-1.5-0.3-2-0.9-1.2-0.2-0.5 0.5-0.2 0.9 0.3 0.9 0.9 3 0 0.9-0.1 2.2 0.9 3.2-0.1 1.4-0.8 1.1-1 2.7-1.2 1.7-1.2 0.7-1.1 0.2-2.6-0.2-4.2 0.4-1.1 0.3-1.2 0.8-3.2 2.7-1.9 0.7-4.8-1.8-11.6 2-3-0.4-3.4-1.2-3.7-0.8-6.1 0.2-1.8 0.5-1.2 0.5-0.6 1-0.3 1-0.2 2.3 0.2 1.4-0.4 1.7-0.8 1.3-1.2 0.5-1.2 0.1-2-0.1-1.4 0.5-8.8 5.5-1.8 2.3-0.8 0.9-1.7 1.3-1 0.2-1.1-0.4-1-0.8-1.2-0.5-1.2 0.1-14.1 7.4-2.6 0.7-0.7 0-1.5-0.7-1-0.2-1.6 0-1.2 0.4-1.6 1.1-1.4 1.4-6.3 4.1-8.7 3.6-1.7 1-0.8 1-2 3.1-1.4 3.4-1.4 1.8-1.7 1.2-3.8 3.8-1.5 0.7-2.3 0.6-1.8 1-1.6 2.2-3.1 2.3-2-0.1-6.7-1.6-1.3-0.7-1-1-1.6-2.3-1.3-1.5-1.8-1.6-3.1-2.2-1.1-1.1-0.4-0.7 0.5-1.5 2.2-2.8 1.1-2-0.4-1.9-1-2.5-3.1-4.8-1.1-2.3-0.5-1.9 0.7-2.2 0.1-1.2-0.2-2.4-0.5-3-0.3-2.7 0-1.5 0.3-5-0.1-2-0.2-2-0.8-3.1-0.7-1.5-1-1.1-2.2-1.2-4.2-1.1-4.5-0.2-3.7-0.8-1.8-1.4-1.1-1.4-1-2-0.7-1-0.9-0.7-9.7-1.1-2.5-1.4-4.9-4.2 3.2-3.1 2.1-2.5 0.9-4.3 1-9.4 1.2-0.9 1.2-0.3 1.3 0.3 1.1 0.9 1.3 0.3 1.4 0.2 1.4-0.1 1.4-0.4 4.1-1.5 7.8 0.5 3.6-2.7 2.1-3.9 5-13.2 2.8 0.3 2.4 1.7 2.5 1.1 3.1-1.6 1.5-4.7 0.9-1.5 5.5-4 0.9-0.9 0.1-0.9 0.4-0.2 1.8 0.6 0.8 0.9 2.1 3.5 0.9 1.2 3.3 1.7 2.8-0.7 2.5-2.3 2.5-3.2 1.5-0.8 0.9-1.1 0.1-1.4-0.8-1.9 2.4-1.9 2-2.5 0.6-3.2-1.7-3.5 6-3.7 6.7-1.3 13.3 0.1 2.8-0.6 5.6-2.1 3.2-0.3 6.8 0.8 2.6-0.6 4.3-2.6 0.9-0.1 0.9-0.3 1-1.4 0.1-1.2-0.4-1.7-0.2-2 0.6-2.2 1.4-1.7 1.3-0.1 1.4 0.5 1.9-0.3 1.5-1.1 2.2-2.9 1.6-1.2 2.9-0.6 5.4 0.7 2.8-0.2 23-10.6 1.8-1.7 2.7-4.1 1.6-1.5 5.3-1.2 11.6 1 4.4-3.7 0.8-5.9-3.9-2.2-5.4-1.7-3.8-3.7 0.1-2.5 1.3-0.8 0.2-0.5-2.9-1.2-5-0.7-1.7-1.1 1.6-2.4 2.1-6.7 3.5-3.7 4.7-0.7 5.5 1.8 1.1 1 0.8 1.3 1 1.3 1.6 0.9 1.6 0 4.1-1.8 5.4 0.3 1.7-0.9 1.2-3.2 0.9 2 0.3 1.4 0.5 1.4 1.4 1.9 1.8 1.3 4 1 1.8 1.4 1.8 2.2 1.1 1.8 0.5 2.3-0.3 3.6-1.1 2.8-1.8 3.3-0.8 2.9 1.7 1.3 8.2-3.4 1.7 0.1 0.8 2.6-0.8 3.1-2.5 5.9-0.5 4.2z" 
                    id="Ústecký" onClick={(e) => {handleClick(e)}}>
                </path>
                <path d="M197.2 222.5l1.8 4.6 0 2.2-1 2.4-0.6 1.6 0 1 0.5 0.7 0.8 0.3 1.5 0.1 1.6-0.4 3-1.7 1.6-0.2 2 0.8 2.4 0.6 2.6 1.2 7.1 6.9 1.3 0.9 2.7 0.3 2-0.2 2-0.5 1.2-0.1 1.5 0.1 2.8 0.8 1.6 0.8 1.3 0.8 3.8 4.3 1 0.8 0.9 0.5 4.9 1.5 0.9 0.6 0.6 0.9 0.5 1.9 7.7 4 1.3 1.3 0.7 1.1-0.3 0.8 0 2 0.2 1.2 1.5 4.9 0.1 1.1-0.2 1-1.8 0.8-1.8 0.2-0.7 1.1 0 4-0.3 1.5-1.8 4.7 0.1 1.5 0.5 2.3-0.1 1.1-1.5 5.1-0.2 1.2-0.1 1.3 0.6 0.9 1.4 0.6 1.1 0.6 0.3 0.8 0.1 0.7-0.5 1-3.7 4.1-1.1 1.1-1.1 0.6-4.4 1-1.8 0.8-1.7 1.1-1.7 1.7-0.8 1-0.4 1.1 0.6 1 2.2 2 0.2 0.8-0.2 0.7-1.2 0.7-0.9 0.7 0 0.3 1.9 1.2 0.5 1.2-0.3 0.6-1.3 1.3-0.1 0.8 0.4 1.8 0.5 0.8 0.8 0.5 1.4 0.6 1 0.7 1.3 1.5 0.5 1.2 0.3 1.2-0.1 5.7 0.2 2.3 0.4 1.4 0.5 1 1.4 1.8 1 1.5 0.3 1.6 0 1.3-0.4 2.2-1.1 3.4 0 2.1 2.1 4.7 1.9 7.3 0.2 2-0.2 1.1-1 4.3-0.3 3.5 0.4 2.8 0.8 4 0.2 1.9-0.2 1.5-0.7 1.4-2.8 4.8-1.3 2.9-0.8 2.9-1.1 2.5-0.8 0.6-2.5 1.6-1.3 1.4-0.2 1.6 0.9 2.2 0 1.3-0.2 0.8-0.5 0.9-1.4 2.1-0.1 0.9 0.2 0.8 0.6 0.8 2 2.1 0.7 1.6-0.1 0.9-0.8 0.7-1.2 0.4-1.6 1-1.3 1.3-3.9 7.4-1.4 2-1.2 0.5-1.8-0.3-1.4 0.6-1.5 1.8-1.9 4.9-0.6 3.3 0.1 2.4 0.4 2.4-0.1 2-0.4 1.3-0.7 1.2-3.2 3.2-3.4 5.3-3.2 6.9 0.2 2.1-1-0.2-2 1-1.4 2.4-1.6 4-3.4-1.7-4.7-3.4-4.2-3.9-2.1-3.5-0.1-6.3-1.7-3.9-6.2-6.4-4.5-6.1-1.8-1.5-3-1.2-8.9-0.4-4.2-2.4-2.3-3.8-2-4.5-13.8-18.8-1.8-1-4.8-5.7-0.6-2.1-0.2-2.2-0.9-1.8-2.5-1.1-4.2-4.4-2.1-1.8-2.5-1.3-5.7-1.6-2 0.7 0.7 2.9-2.8 0.4-8.7-1.3-2.9-1.1-2.3-2.4-4.9-10.9-3-3-6.8-3.3-2.8-2.4-1.7-3.2-0.8-3.7-0.6-11.3-1.1-0.9-1.5 0.2-1.7-0.5-1.6-1.7-1.2-1.7-0.9-2-0.9-2.7-0.6-2.7-0.7-5.1-1.1-2.4-1.5-1.7-3.5-2-1.5-1.8 0.8-2.4-1.6-0.9 1.3-2.7-0.2-3.1-1.2-2.4-2-1.1-4.9-2.3-2.3-1.6-2.1-1.9-3.1-4.4-1.5-2.9-0.7-2.4 1.7-3.5 6.1-2.6 2.4-2.4 0.4-3.7 0.1-4.8 0.9-3.2 3 0.9 1.1-3.6 3.4-6.3 1.2-3.5 0.4-4.4 7 1.3 1.4-0.3 1.1-0.6 4-4 0.8-0.4 0.8 0 4.4 1.6 2.5 0.3 2.1-0.4 0.7-0.4 4.5-5.3 1-0.5 11.4 0.2 3.3 3.4 1.1 0.5 0.5-0.2 3.7-2.7 1.6-0.3 4 2 2.4 0.6 0.9-0.3 0.7-0.8 1.9-9.7 0.6-1.2 0.8-0.7 13.7-7.4 3.2-3.5 1.5-1 0.7-0.1 10.2 2 5.2 5.9 2 0.8 1.9-0.1 0.8-0.3 0.6-0.6 0.2-0.9-1.7-6.8-0.1-1.3 0-1.2 0.3-0.9 0.6-0.6 8.6-1.9 0.6-0.6-0.1-0.9-1-2.4-0.4-1.4-0.1-1.4 0.1-1.4 0.6-1.2 0.9-1 1.6-0.7 1.3 1.5 1.6 2.3 1 1 1.3 0.7 6.7 1.6 2 0.1 3.1-2.3z"
                    id="Plzeňský" onClick={(e) => {handleClick(e)}}>
                </path>
                <path d="M696.7 332.3l-0.6 2.7-0.7 1.7-0.8 0.9-0.9 0.3-4.7-1.2-1.1 0.4-0.4 0.9 0.2 1.3 0.5 1.6 2 3.4 6.3 6.3 0.4 1.3-0.4 0.5-1.7 0.8-0.3 1 0.1 1.2 0.4 1.6 3.6 9.4 0.2 1.3 0 1.2-0.2 1.1-0.5 1.2-0.7 1-0.9 1-0.7 1 0.1 1.1 0.8 1.2 8 6.2 1.2 0 1.4-0.6 1.3-1 2.3-2.7 1.8-2.7 0.4-1.2 0.1-1.4-0.1-1.5-0.4-1.4-1-2.7-2.7-4.5-0.3-1.8 0.2-2.7 0.6-1.4 0.9-0.8 1.3-0.3 1.4 0.1 5.8 2.4 1 0.9 1.8 2.9 1.4 3.4 0.9 5.3 0.5 1.2 0.8 1.2 6.8 6.7 0.9 1.8 0.2 1.2-0.2 4.4 0.4 1.2 0.9 1.1 2.4 1.4 5.5 1.7 3 2.9 2.8 4.2 1.8 4.1 0.2 1.6 0 1.3-0.3 1.5-0.2 0.5-2.4 4.3-0.3 1.5 0.1 1.9 1.3 4.4 2 4.2 1.9 2.7 3.9 2.3 0.6 0.6 0.5 0.9 0.4 1.3 0.1 1.3-0.3 1.1-0.6 0.9-1.9 1.3-4 1.5-0.7 0.7-3.8 5.5-2.3 2-0.2 1 0.3 1.1 0.8 1 1.1 0.9 2.7 1.2 2.6 0 7.2-2.5 1.1 0.1 0.8 0.6 0.4 1.1 0.1 1.5-0.4 7 0.3 1.2 0.6 0.9 0.8 0.7 6.1 2.8 9.1 1.9 0.7 0.5 0.6 0.9 0.7 2.4 0.5 3.2 5.2 2.2 2.7 2.2 1.6 2.4 0.9 0.6 1.1 0.1 1.2-0.2 4.7-2.6 4.3 0.6 3.4 1.4 0.6 0.5 0.9 1.6 0.8 2.1 0.4 2.4 0.5 1 0.9 0.7 8 2.3 1.4 1 1.2 1.4 0.9 1.8 1.4 4 1.1 5.1-16.3 6.4-5.4-0.8-4.5-4.8-2.2-1-3.5 1-5.6 3.7-2.6 0.5-16.8-8.6-7.1-1.9-6.6 1.5-7.9 5.8-1.4 2-0.8 4.3-2.2 2.7-5 4.4-3.7 6.2-7.4 21.6-1.7 3.1-2.4 2.8-0.3 4.3-5.1-6-2.1-14.8-3.5-4.9-2.4-0.2-5.7 2-2.8 0.4-2.7-1-5.4-3.6-2.2-0.8-5.6 0.3-2.4-0.4-1.9-1.4-1.1-2.7-0.5-3.2-1.2-2.7-2.8-1.1-2.7-0.3-8.9-2.6-2.5-1.6-1.3-0.5-1.4 0.2-2.7 1.1-1.5 0.1-4.2-0.6-2.6 1.7-7.5 12.9-1.6 1.5-2.3 0.7-0.9-0.3-1.9-1.6-3.1 0.5-0.1 0.1-20.7-3.1-13.6 0.9-7.8-3.4-14.9-10.9-0.2-1.1 0-1.5-0.8-1-2.5 0.6-0.1-2.3-1.1-1-1.7-0.1-1.9 0.4 1.6-2-1.3 0.1-1.1-0.5-1.6-1.2-2.8-0.2-1-0.4-0.8-1.2-0.6-2.7-0.8-0.7-4.5 0-1.3 0.4-5.3 2.7-2.4 0.8-3.4 0-3.4-0.8-11.4-6.4-8.8-3.5 0.4-2.1 0.6-1.4 0.5-1.8 2.3-5.7 0.7-2.3 0-1 0.4-1 0.7-0.6 0.9-0.2 1 0.1 1 0.6 1.1 0.9 2.8 4.5 0.9 0.4 0.8-0.1 0.8-0.7 1.2-1.7 0.4-1 1.1-1.3 1.5-1.2 0.9-0.4 1.1 0 1 0.4 4.4 3.8 0.9 0.3 0.9-0.1 10.7-9.7 4.1-1.9 5.1 0.5 1-0.5 0.7-1 0.8-3.2 0.5-1 0.8-0.7 0.7-0.3 1.4 0.1 0.6 0.2 3.8-4.8 1.1-0.6 1 0.1 0.8 1 0.6 1.4 0.7 0.9 0.8 0.7 1.8 0.5 4.4-0.2 0.9-0.4 2.6-2 0.7-0.2 10.2 1.7 1.5-0.5 1.2-1 3.1-4.6 0.6-0.5 10.4-3.4 3.2-3.9 1-2.3 0.3-1 0-1.1-0.3-1-1.2-2.9-0.2-2 0.3-1.1 0.6-1.2 2.1-2.5 0.7-1.2 0.3-1.2 0-1.1-0.3-1-0.6-0.8-0.7-0.6-1.9-1-0.6-0.8-0.3-1.1-0.2-1.3 0.2-2.8 0.7-2.8 0.5-1 0.7-0.7 3.2-1.3 0.4-0.5 0.2-0.7-0.4-1.6-1-1.9-0.4-1.9 0.1-1.4 0.3-1.6 0.6-1.4 1.5-2.5 1.9-1.9 12.9-7.9 0.6-1.1 0.1-1.4-0.2-1.6-2.7-8.7-0.3-1.6-0.4-10.4-0.8-3 0-1.1 0.4-0.7 0.7-0.5 4.4-0.8 0.6-0.7 0.4-1.1 0.3-1.3 0.1-1.4-0.2-1.4-0.3-1.3-0.5-1.1-4.1-4-0.3-1 0-1.2 1.8-4.6 0.7-2.6 0.3-2.5 3.6 0.3 17.5-1.7 1.3-1.1 0.5-0.9 0.2-1.5 0.2-1.9 0.8-1 1.3-0.6 7.8 0 1.2 0.3 1.8 0.9 1.4 0.2 4.9-0.4 3.7 0.3 3.5 1.3 7.4 3.7 1.6-0.3z"
                    id="Jihomoravský" onClick={(e) => {handleClick(e)}}>
                </path>
                <path d="M932.5 384.6l-0.3 8-8.9 7.1-19.9 7.7-4.3 4.2-3.6 5.8-2.7 6.8-1.9 7.5-0.5 6 0.2 11.5-1 4.9-3.1 5.2-4.3 4.1-4.9 2.2-7.9-0.6-3.6 0.6-3.1 2-1.9 3.9-1 3.3-1.1 7-1.2 3.1-2.7 2.6-2.8 0.2-3.2-0.5-3.6 0.6-2.4 2-5.1 8.8-2.6 2.1-12 4.8-1.1-5.1-1.4-4-0.9-1.8-1.2-1.4-1.4-1-8-2.3-0.9-0.7-0.5-1-0.4-2.4-0.8-2.1-0.9-1.6-0.6-0.5-3.4-1.4-4.3-0.6-4.7 2.6-1.2 0.2-1.1-0.1-0.9-0.6-1.6-2.4-2.7-2.2-5.2-2.2-0.5-3.2-0.7-2.4-0.6-0.9-0.7-0.5-9.1-1.9-6.1-2.8-0.8-0.7-0.6-0.9-0.3-1.2 0.4-7-0.1-1.5-0.4-1.1-0.8-0.6-1.1-0.1-7.2 2.5-2.6 0-2.7-1.2-1.1-0.9-0.8-1-0.3-1.1 0.2-1 2.3-2 3.8-5.5 0.7-0.7 4-1.5 1.9-1.3 0.6-0.9 0.3-1.1-0.1-1.3-0.4-1.3-0.5-0.9-0.6-0.6-3.9-2.3-1.9-2.7-2-4.2-1.3-4.4-0.1-1.9 0.3-1.5 2.4-4.3 0.2-0.5 0.8 1.5 1 0.9 0.7 0.2 0.7-0.3 0.6-0.7 0.4-1.1 0.7-4.2 0.4-1.2 0.6-0.8 1.1-0.3 9.6-0.2 1.1 0.1 0.6-0.4 2-2.6 5.1-4.9 0.5-0.6 1.3-2.8-1.3-1.6-1.2-3.8 0.2-3.9 0.7-3.7 3.6 0.5 2.3 0.9 3.7 3.1 3.1 1.7 1.3 0.2 6.3 2.9 1.5 0.3 0.9-0.3 0.9-0.8 0.8-1.3 1.3-2.7 1.4-1.4 1.9-1.1 2.6-1.1 1.1-0.3 10.5 0.2 1.1-0.1 0.9-0.4 1.1-1.3 0.3-1 0-1-0.3-1.4-1-2.3-0.2-0.9 0.2-0.7 0.6-0.5 1.8-0.7 1.7-0.2 2.2 0.1 13 2.6 3.9-1.7-0.4-2.5 0-2.2 0.4-2.2 1-1.2 1.9-1.1 1.1-1.4 1-2.8 0.6-1 0.7-0.7 0.7-0.3 0.8 0 0.8 0.3 0.7 0.6 1.4 1.6 0.9 0.4 1.8 0.2 2.1-0.5 2.3-6 6.5 0.1 1.1 1 0.4 0.9 0.6 2.9 0.6 1.1 0.8 0.8 1 0.6 1.3 0.2 23-2.3 1.4 0.6 4.4 3.2 1 0.3 11.2-0.1 2.6 0.9 0.7 0.9 3.1 6.6 1 1.1 2.5 1.6 0.9 1.1 0.7 1.2 0.4 1.5 1.2 6.5 0.5 1.3 0.7 1 0.8 0.6 0.9 0.4 1.6 0z"
                    id="Zlínský" onClick={(e) => {handleClick(e)}}>
                </path>
                <path d="M785.1 179.7l2.3 13.7-0.2 1.1-0.4 1.2-0.6 1.1-0.8 1.1-1 0.9-1 0.4-1 0-2.1-1.3-0.9-0.1-0.8 0.3-0.8 0.7-3.4 5-11.9 6.7-2 2.3-0.7 1.4-0.5 1.6-0.3 3.5-0.3 1.2-1.5 2.4-0.4 0.9-0.1 1 1.7 6.8 0 1.1-0.1 1-0.5 1-8.8 12.4-0.6 1.1-0.4 1.3-0.1 1.3 0.1 1.3 0.3 1.2 0.6 1.2 4.1 4 0.4 1.4-0.3 0.7-4.2 5.6-0.4 1.1-0.3 1.3-0.7 8.4 0.1 1 0.4 0.8 0.6 0.8 2 0.8 6.3 0.9 0.7 0.4 0.3 0.6 0.4 2.4 0.4 0.7 0.6 0.6 12.6 6.4 1 0.1 4.2-2.3 1-0.2 1.1 0.4 11.3 12.3 2.2 1.1 7.5 0.4 3.4-2.6 0.8-0.4 0.8 0 5.4 3.7 3.8 0.3 5.4-1.8 4.2 2.1 3.4 2.9 0.7 1 0.2 1-0.8 7.6 0.1 1.5 0.5 1.2 0.8 0.9 1 0.3 1-0.2 2.7-1.8 0.8-0.3 0.9 0.2 0.8 0.9 4.5 9.5 1 1 4.6 2.2 4 3.4 1.6 2.1 0.5 1.2 0.7 2.5 0.3 2.9 4.2 1.1 1.8 1.4 2.3 2.6-2.3 6-2.1 0.5-1.8-0.2-0.9-0.4-1.4-1.6-0.7-0.6-0.8-0.3-0.8 0-0.7 0.3-0.7 0.7-0.6 1-1 2.8-1.1 1.4-1.9 1.1-1 1.2-0.4 2.2 0 2.2 0.4 2.5-3.9 1.7-13-2.6-2.2-0.1-1.7 0.2-1.8 0.7-0.6 0.5-0.2 0.7 0.2 0.9 1 2.3 0.3 1.4 0 1-0.3 1-1.1 1.3-0.9 0.4-1.1 0.1-10.5-0.2-1.1 0.3-2.6 1.1-1.9 1.1-1.4 1.4-1.3 2.7-0.8 1.3-0.9 0.8-0.9 0.3-1.5-0.3-6.3-2.9-1.3-0.2-3.1-1.7-3.7-3.1-2.3-0.9-3.6-0.5-0.7 3.7-0.2 3.9 1.2 3.8 1.3 1.6-1.3 2.8-0.5 0.6-5.1 4.9-2 2.6-0.6 0.4-1.1-0.1-9.6 0.2-1.1 0.3-0.6 0.8-0.4 1.2-0.7 4.2-0.4 1.1-0.6 0.7-0.7 0.3-0.7-0.2-1-0.9-0.8-1.5 0.3-1.5 0-1.3-0.2-1.6-1.8-4.1-2.8-4.2-3-2.9-5.5-1.7-2.4-1.4-0.9-1.1-0.4-1.2 0.2-4.4-0.2-1.2-0.9-1.8-6.8-6.7-0.8-1.2-0.5-1.2-0.9-5.3-1.4-3.4-1.8-2.9-1-0.9-5.8-2.4-1.4-0.1-1.3 0.3-0.9 0.8-0.6 1.4-0.2 2.7 0.3 1.8 2.7 4.5 1 2.7 0.4 1.4 0.1 1.5-0.1 1.4-0.4 1.2-1.8 2.7-2.3 2.7-1.3 1-1.4 0.6-1.2 0-8-6.2-0.8-1.2-0.1-1.1 0.7-1 0.9-1 0.7-1 0.5-1.2 0.2-1.1 0-1.2-0.2-1.3-3.6-9.4-0.4-1.6-0.1-1.2 0.3-1 1.7-0.8 0.4-0.5-0.4-1.3-6.3-6.3-2-3.4-0.5-1.6-0.2-1.3 0.4-0.9 1.1-0.4 4.7 1.2 0.9-0.3 0.8-0.9 0.7-1.7 0.6-2.7 1.4-1.6 0.9-3.4 0.4-4.6 0.4-1.6 4.5-4.8-1.1-7.7-1.4-2.2-2.4-0.9-0.8-0.8-0.5-1.3-0.4-3.9-6.1-12.4-2.4-3.6-0.8-1.7-0.3-1.9 0.2-1.8 2.4-5.1-0.2-5.5 0.1-6.2-0.1-1.4-1.1-4.4-0.6-5.1-0.7-2.2-1-1.8-0.1-1.1 0.5-1.2 3.9-2.3 3.1-3.2 4.5-3.3 0.7-0.6 0.6-1.8-0.3-2.3-0.9-2.5 0.2-2.4 3.7-12.5 5.6-14.3 1.6-0.4 1.4-1.3 2.5-3.4 1.7-1.2 1.3-0.1 2.8 1 1.3-0.1 0.4-0.8-0.1-2.8 0.4-0.7 2.2 0.1 0.9 0.6 0.7 1.4 1.5 2.3 1.8 0.7 1-2-0.3-3-1.9-2.5-0.3-5.7-1.5-4.1-2.7-3-3.6-2.1-2.8-2.8-1.4-4.5-1.1-4.9-1.7-4.3-4.7-7 0-3.2 4-2.5 3.4 0.5 6.3 3.8 3.4-0.4 15.2 4.3 1.6 0.9 3.4 2.9 1.9 1 2.1 0.1 4.5-1 1.7 0.6-0.3 0.6 0.5 2.5 0.9 3 0.9 2 1.4 1.6 5.2 3.3 3.5 1 6.9-0.2 3.1 1.3-2.7 1.1 0.9 1.7 1.3 1.2-0.2 3 0.3 3 1 2.3 2 1.5 1.6-4.2 3.3-0.3z"
                    id="Olomoucký" onClick={(e) => {handleClick(e)}}>
                </path>
                <path d="M696.7 332.3l-1.6 0.3-7.4-3.7-3.5-1.3-3.7-0.3-4.9 0.4-1.4-0.2-1.8-0.9-1.2-0.3-7.8 0-1.3 0.6-0.8 1-0.2 1.9-0.2 1.5-0.5 0.9-1.3 1.1-17.5 1.7-3.6-0.3-2.8-0.9-6.1-3.9-5.2-1.9-1.6-1.2-1-1.5-0.9-1.7-1.4-1.6-1.9-1.6-5.5-3.7-4.4-2.2-3-0.9-3.8-0.2-3.2 0.3-1.6-0.4-1.1-0.7-0.9-2.2-1-1.1-1.7-0.9-3.4-0.7-2.2-0.8-2-1-2-1.4-1-0.4-0.9-0.1-1 1.2-0.7 1.8-0.5 0.9-0.7 0.6-1.7 0.6-0.7 0.4-2.2 2.5-1.5 1-1.4 0-1.6-0.5-2-0.9-1.3 0.2-1 0.5-3.8-1-2.3-4.7-2-2.8-2.4-1.9-3.8-1.9-0.6-0.5-0.4-0.8-0.3-2.3-0.5-1.1-0.8-0.8-2.1-1.3-3.9-1-6.7-5.3-2.6-0.7-11.3 0.9-0.8-0.4-1.6-1.8-3.8-6.2-2.8-3.3-6.4-4.3 0.2-1.8 0.6-2.4 0.7-2.2 0.5-2.6 0.1-4.6 0.1-0.9 0.9-2.7-0.2-1.1-1.4-1.7-1.1-0.9-1-0.5-2-0.5-1.1-0.9-5.4-5.2-1.1-0.7-5-1.6-3.4-2.3-1.1-1.1-1.7-2.7 0.7-1.1 2.7-1.3 3-0.8 1.4 0.1 0.3-3.2 0-0.8-0.8-3.8 0-1.2 0.6-1.4 2.4-2.4 8.1 3.1 1.2-0.1 8.9-8.5 2.9-1.4 2.2-0.2 5.8 2.9 2.2 0 4.5-1.3 0.8 0.2 6 4.1 1.1 0.3 0.9-0.3 0.8-0.9 1.9-6.3 0.7-1.4 0.9-1.2 7.4-2.1 0.7 0.3 0.6 0.8 1.4 5.9 1 2.4 1.2 1.4 0.6 0.2 0.8-0.4 9.4-9.3 1.4-0.6 6.2-0.2 4.1 1.3 0.8 0.6 0.4 0.9 0.2 1.2 0 4.7 0.3 1.4 0.7 1.3 1.2 0.8 8.5 1.7 0.8 0.7 1.1 2.3 1.5 2.2 1.8 1.6 1.6 0.9 1.3 0.3 0.6 0.5 2.3 3 0.7 0.5 1.7 0.4 5.7 4.9 2.2-1.6 2.3-0.9 13.2-1.3 2-1 0.9-0.9 0.7-1 0.6-1.3 0.6-2.9 0.7-1 0.8-0.7 15.3-7.3 0.8-1.1 0.4-1.4 0.2-3.1 0.3-1.4 0.4-1.1 0.6-0.8 0.8-0.4 15.6 5 5.1 4.7 6.2 3.3 6-0.5 4.5-6.2 3.3-2.4 1.8-2.5 1.6-3.2 2.7-4 3.3-2.8 2.9-0.5 3 0.2 1.8-0.4-5.6 14.3-3.7 12.5-0.2 2.4 0.9 2.5 0.3 2.3-0.6 1.8-0.7 0.6-4.5 3.3-3.1 3.2-3.9 2.3-0.5 1.2 0.1 1.1 1 1.8 0.7 2.2 0.6 5.1 1.1 4.4 0.1 1.4-0.1 6.2 0.2 5.5-2.4 5.1-0.2 1.8 0.3 1.9 0.8 1.7 2.4 3.6 6.1 12.4 0.4 3.9 0.5 1.3 0.8 0.8 2.4 0.9 1.4 2.2 1.1 7.7-4.5 4.8-0.4 1.6-0.4 4.6-0.9 3.4-1.4 1.6z"
                    id="Pardubický" onClick={(e) => {handleClick(e)}}>
                </path>
                <path d="M131.6 148.1l4.9 4.2 2.5 1.4 9.7 1.1 0.9 0.7 0.7 1 1 2 1.1 1.4 1.8 1.4 3.7 0.8 4.5 0.2 4.2 1.1 2.2 1.2 1 1.1 0.7 1.5 0.8 3.1 0.2 2 0.1 2-0.3 5 0 1.5 0.3 2.7 0.5 3 0.2 2.4-0.1 1.2-0.7 2.2 0.5 1.9 1.1 2.3 3.1 4.8 1 2.5 0.4 1.9-1.1 2-2.2 2.8-0.5 1.5 0.4 0.7 1.1 1.1 3.1 2.2 1.8 1.6-1.6 0.7-0.9 1-0.6 1.2-0.1 1.4 0.1 1.4 0.4 1.4 1 2.4 0.1 0.9-0.6 0.6-8.6 1.9-0.6 0.6-0.3 0.9 0 1.2 0.1 1.3 1.7 6.8-0.2 0.9-0.6 0.6-0.8 0.3-1.9 0.1-2-0.8-5.2-5.9-10.2-2-0.7 0.1-1.5 1-3.2 3.5-13.7 7.4-0.8 0.7-0.6 1.2-1.9 9.7-0.7 0.8-0.9 0.3-2.4-0.6-4-2-1.6 0.3-3.7 2.7-0.5 0.2-1.1-0.5-3.3-3.4-11.4-0.2-1 0.5-4.5 5.3-0.7 0.4-2.1 0.4-2.5-0.3-4.4-1.6-0.8 0-0.8 0.4-4 4-1.1 0.6-1.4 0.3-7-1.3-0.9-1.7-2.1-0.8-6-3.6 0.1-2.5 1-3.1-0.3-3.3-2.5-2.4-5.5-0.6-2.2-2.2-0.2 0-22.3-12-0.5-1.4 0-2.1-0.3-2.4-1.3-2.3-2.2-1.8-2.3-1.4-2.1-1.9-1.3-3.5-0.1-3.4 1.1-5.3-0.5-3.4-1.1-2.8-1.7-2.6-3.6-3.9-7.3-4.6-1.5-2.7 1.8-2.8 1.6-1 1-1.1 0.2-3-0.5-3.3-1.2-2-3.4-3.6 10.8 0.8 2.8 2 0.9 2.2 0 3.9 0.5 1.8 1.7 1.5 2.1 0.7 4.3 0.1 1 0.6 0.5 0.8-0.1 1.1-0.6 1.3-1.2 0.8-0.2 0.5 0.6 1 2.6 2.6 0.6 0.9 0.6 1.5 0.4 2.5 1.8 6.4 1.5 2.3 2.5 0.3 2.1-1.5 0-2-0.9-2.5-0.4-2.8 0.4-4.1 0.8-2.2 2.9-3.7 0.4-3.7 1.2-1.8 1.7-1.2 1.7-1.7 4.5-8.4 1.6-1.6 4.4-2.4 1.7-1.6 0.5-0.3 1.4 0.1 0.6-0.4 0.3-0.8-0.3-2.2 0.7-2.2 0.5-1.1 5.2-4.5 5.9-1.8 11.1-0.8 7.9 1.4 1.9-0.2 1.6-1.6 3.3-5.1 1.9-1.8 2.4-0.9 2.4-0.2 2.6 0.4 0.9-0.3 2.1-1.4 1.3-0.3 1.2 0.4 13.7 8.3 5.1 0.3 1.2-1.2z"
                    id="Karlovarský" onClick={(e) => {handleClick(e)}}>
                </path>
                <path d="M421.2 346.7l2.1 2.3 0.6 1 0.4 1.1 0 1.1-0.6 1-1 0.7-5.2 1.6-0.9 0.5-0.3 0.9 2.2 8 0.4 3.7-0.2 4.2-3.1 12.3 0 1.6 0.4 1.4 0.6 1.1 2.5 2.4 0.7 1.3 0 1.1-0.3 4.7 0.2 1.1 0.4 1.2 0.8 1.1 5.5 5.2 2.8 1.7 1.3 0.2 1.4-0.4 2.5-2.4 1.3-0.4 1.3 0.1 2.3 1.4 3.3 3.2 4.3 2.9 3.9 5.2 5.9 3.8 0.6 0 0.7-0.4 2.6-4 0.7-0.5 0.8-0.3 0.9 0.1 7.8 4.1 0.6 0.4 1.7 0.4 7.2 0.9 1.2 0.5 0.9 1.2 0.6 1.9 0.3 3.6 0.3 2.1 0.5 1.5 0.7 1 7 6.6 1.3 0.5 3.1-0.5 7 1.3 2.1-0.2 5.7-2.3 1.1-0.1 0.6 0.4 7 7 0.9 1.2 0.3 1.4-0.4 0.5-1.4 0.9-1 0.3-3.2 0.2-0.8 0.1-0.8 1.3-0.3 2.6-0.3 1.1-0.7 1.5-4.8 5.7-0.7 0.9-0.6 2.7 0.4 1.5 1.2 0.3 0.5 0.5 1.2 2.6 0.9 0.6 1 0.2 2.3 0.2 1.8 0.4 1.3 1.1 0.8 1.1 0.1 0.8 0 1-0.7 2.3-2.3 5.7-0.5 1.8-0.6 1.4-0.4 2.1-3.4-1.3-7.3-6.3-3.1-1.9-6.6-2.2-7.1-3.6-3.3-0.9-6.9-0.1-0.7-0.5-0.7-1.1-0.7-1-1.1 0-0.6 1-0.4 3-0.5 1.2-2 2.4-0.8 0.5-11.2 3.1-3-0.1 1-3.2 0.1-3.1-0.7-3-1-3.2-11.5-0.9-8.2-2.9-3.3 0.5-0.4 0.3-0.3 0.8 0.2 2.2-2 4.8-0.1 6.4 0.6 6.9 0 6.2-3.1 14-1.1 2.9-0.3 1.5 0.3 1.4 0.7 1.8 1 1.9-1.7 3.9-3 0.3-7.7-3.2-7.7-1-2.2 0.8-0.9 2.2-0.6 2.7-1.4 2.6-0.8 4.3-7.7 6.8-2.8 4.6-0.6 6 0.1 6.8-0.7 5.8-3 3-2.4-0.1-1.2-1.5-0.9-2.1-1.5-2.1-1-0.2-2.3 0.8-1.1-0.2-0.5-0.9 0-1.5-0.2-1.4-0.9-0.9-2.3 0.2-4.4 2.2-2.2 0.5-1.8-0.5-5.9-3.1-3.5-4.1-2.2 1.4-3.3 8.9-2.3 2.4-7.7 3.3-2.9 2.4-1.2 0.4-1.4 0.2-14.7-5.2-20.9-2.3-5-2.2-1.2-1.1-2.6-3.1-0.6-1.3-0.7-3 0.3-0.7 0.8-0.3 1-2.1 0.4-0.3 0.8 0.1 0.6-0.2 0.3-1.4-0.4-1.3-0.9-0.6-1-0.5-0.7-0.7-1-1.8-2.4-3.8-1.3-1.4-10-5.5-3.2-2.7-2.7-2.1-2.8-1.5-5.9-1.6-2.9-3-7.1-14.3-3.5-5.3-2-1.2-5.5-0.9-2.8-1.3-2.6-2.5-2.3-3.5-1.5-4.1-0.4-4.3-2.7 0.3-2.5-1.3-2.5-2.1-2.6-1.5-2.4-0.6-0.2-2.1 3.2-6.9 3.4-5.3 3.2-3.2 0.7-1.2 0.4-1.3 0.1-2-0.4-2.4-0.1-2.4 0.6-3.3 1.9-4.9 1.5-1.8 1.4-0.6 1.8 0.3 1.2-0.5 1.4-2 3.9-7.4 1.3-1.3 1.6-1 1.2-0.4 0.8-0.7 0.1-0.9-0.7-1.6-2-2.1-0.6-0.8-0.2-0.8 0.1-0.9 1.4-2.1 0.5-0.9 0.2-0.8 0-1.3-0.9-2.2 0.2-1.6 1.3-1.4 2.5-1.6 0.8-0.6 1.1-2.5 0.8-2.9 1.3-2.9 2.8-4.8 0.7-1.4 0.2-1.5-0.2-1.9-0.8-4-0.4-2.8 0.3-3.5 1-4.3 0.2-1.1-0.2-2-1.9-7.3-2.1-4.7 8.6-5 1.5 0 1.7 1.2 0.8 0.3 3.1 0.1 1.8 0.6 0.9 0.6 2.6 1.5 1.3 0.2 1.5-0.2 2.7-1.4 1.9-1.2 7.1-2.2 0.8-0.8 0.8-2.6 0.8-1.6 0.9-0.8 1.7-0.9 1-0.2 1.1 0.2 1.5 0.8 1.8 1.4 0.9 0.3 2.8 0.2 1.9 0.7 3.9 0.1 8.6-1.1 2.9-1.2 2.7-2.7 1.3-0.6 1.8-0.4 2.3 0 1.8 0.5 1.3 0.9 0.5 1.5 0.6 0.9 1.7 0.6 1.2 1.1 1 1.5 0.7 0.6 1.1 0.5 1.1 0.1 1.5-0.2 6.9-3.9 1.2-0.2 1.9-0.1 1.9 0.5 2.5 1.3 2.7 0.4 16.4-0.7 1.9 0.5-0.2 1.3 0.3 0.9 3.5 0.5 1.6-0.2 1.6-0.4 3.5-2.3 2.2-2.2 1-0.5 4.8-1 2-1.6 1-1.4 0.3-6 0.3-1.4 0.9-1.8 1-1.5 1.9-1.6 1.2-0.1 0.8 0.9 1.1 1.4 1.3 1 4.3 1.3 0.8 0.7 0.5 0.9 0.2 2 0.7 0.5 1.5 0.2 2.9-0.6 1.8 0.7 0.9 0.6 1.3 3.2 0.6 0.9 1.5 1.5 1.3 0.7 1-0.2z"
                    id="Jihočeský" onClick={(e) => {handleClick(e)}}>
                </path>
                <path d="M638 334.7l-0.3 2.5-0.7 2.6-1.8 4.6 0 1.2 0.3 1 4.1 4 0.5 1.1 0.3 1.3 0.2 1.4-0.1 1.4-0.3 1.3-0.4 1.1-0.6 0.7-4.4 0.8-0.7 0.5-0.4 0.7 0 1.1 0.8 3 0.4 10.4 0.3 1.6 2.7 8.7 0.2 1.6-0.1 1.4-0.6 1.1-12.9 7.9-1.9 1.9-1.5 2.5-0.6 1.4-0.3 1.6-0.1 1.4 0.4 1.9 1 1.9 0.4 1.6-0.2 0.7-0.4 0.5-3.2 1.3-0.7 0.7-0.5 1-0.7 2.8-0.2 2.8 0.2 1.3 0.3 1.1 0.6 0.8 1.9 1 0.7 0.6 0.6 0.8 0.3 1 0 1.1-0.3 1.2-0.7 1.2-2.1 2.5-0.6 1.2-0.3 1.1 0.2 2 1.2 2.9 0.3 1 0 1.1-0.3 1-1 2.3-3.2 3.9-10.4 3.4-0.6 0.5-3.1 4.6-1.2 1-1.5 0.5-10.2-1.7-0.7 0.2-2.6 2-0.9 0.4-4.4 0.2-1.8-0.5-0.8-0.7-0.7-0.9-0.6-1.4-0.8-1-1-0.1-1.1 0.6-3.8 4.8-0.6-0.2-1.4-0.1-0.7 0.3-0.8 0.7-0.5 1-0.8 3.2-0.7 1-1 0.5-5.1-0.5-4.1 1.9-10.7 9.7-0.9 0.1-0.9-0.3-4.4-3.8-1-0.4-1.1 0-0.9 0.4-1.5 1.2-1.1 1.3-0.4 1-1.2 1.7-0.8 0.7-0.8 0.1-0.9-0.4-2.8-4.5-1.1-0.9-1-0.6-1-0.1-0.9 0.2-0.7 0.6-0.4 1-0.1-0.8-0.8-1.1-1.3-1.1-1.8-0.4-2.3-0.2-1-0.2-0.9-0.6-1.2-2.6-0.5-0.5-1.2-0.3-0.4-1.5 0.6-2.7 0.7-0.9 4.8-5.7 0.7-1.5 0.3-1.1 0.3-2.6 0.8-1.3 0.8-0.1 3.2-0.2 1-0.3 1.4-0.9 0.4-0.5-0.3-1.4-0.9-1.2-7-7-0.6-0.4-1.1 0.1-5.7 2.3-2.1 0.2-7-1.3-3.1 0.5-1.3-0.5-7-6.6-0.7-1-0.5-1.5-0.3-2.1-0.3-3.6-0.6-1.9-0.9-1.2-1.2-0.5-7.2-0.9-1.7-0.4-0.6-0.4-7.8-4.1-0.9-0.1-0.8 0.3-0.7 0.5-2.6 4-0.7 0.4-0.6 0-5.9-3.8-3.9-5.2-4.3-2.9-3.3-3.2-2.3-1.4-1.3-0.1-1.3 0.4-2.5 2.4-1.4 0.4-1.3-0.2-2.8-1.7-5.5-5.2-0.8-1.1-0.4-1.2-0.2-1.1 0.3-4.7 0-1.1-0.7-1.3-2.5-2.4-0.6-1.1-0.4-1.4 0-1.6 3.1-12.3 0.2-4.2-0.4-3.7-2.2-8 0.3-0.9 0.9-0.5 5.2-1.6 1-0.7 0.6-1 0-1.1-0.4-1.1-0.6-1-2.1-2.3 1.2-0.5 1.7-1.5 0.6-1.1 0.7-1.8 0.9-1.4 2.8-1.5 0.6-1.1-0.5-1.8 0.1-0.6 0.7-1 0.7-0.1 1.2 0.1 5.8 2.5 1.6 0.1 2-0.2 3.5-1.1 4.3 0.1 2.5 1.1 4.2-0.7 11.5-5.6 0.4-2.7-0.4-2.5-0.7-2-0.8-1.3-0.8-0.9-6.7-5-0.7-0.9-0.2-1 0.4-1.7 0.7-1.2 3.4-3.9 1.2-1.8 0.4-0.9 0.4-1.9 0.8-1.8 1.2-1.3 1.2-0.4 0.8 0.1 1.9 1.2 0.8 0.2 1.2-0.2 6-3.6 5.2-2 5.2-4.7 0.9-0.5 3.8 0.6 2-0.4 1.2-0.6 0.9-0.8 0.5-0.8 0.4-1 0.6-3.7 0.5-1.8 1.2-2.2 1.6-1.5 1.5-0.5 0.6-0.6 0.2-1.2-0.1-2.4 0.2-1.9 6.4 4.3 2.8 3.3 3.8 6.2 1.6 1.8 0.8 0.4 11.3-0.9 2.6 0.7 6.7 5.3 3.9 1 2.1 1.3 0.8 0.8 0.5 1.1 0.3 2.3 0.4 0.8 0.6 0.5 3.8 1.9 2.4 1.9 2 2.8 2.3 4.7 3.8 1 1-0.5 1.3-0.2 2 0.9 1.6 0.5 1.4 0 1.5-1 2.2-2.5 0.7-0.4 1.7-0.6 0.7-0.6 0.5-0.9 0.7-1.8 1-1.2 0.9 0.1 1 0.4 2 1.4 2 1 2.2 0.8 3.4 0.7 1.7 0.9 1 1.1 0.9 2.2 1.1 0.7 1.6 0.4 3.2-0.3 3.8 0.2 3 0.9 4.4 2.2 5.5 3.7 1.9 1.6 1.4 1.6 0.9 1.7 1 1.5 1.6 1.2 5.2 1.9 6.1 3.9 2.8 0.9z"
                    id="Vysočina" onClick={(e) => {handleClick(e)}}>
                </path>
                <path d="M378.7 215.7l0.5 1 1 1.2 1 0.6 3.1 1 0.9 0.7 0.6 1.1 0.2 1.2-0.4 1.5-1.2 1.7-4.2 4-0.4 0.7-0.2 0.8 0.8 1.9 0.3 1.3-0.2 2.1 0.1 0.6 0.9 2.2 0 1.1-1.1 2.2-3.3 0.8-5.3 0.3-2.6-0.3-2.1-0.5-0.7-0.4-1.4 0.1-1.4 0.4-2.4 1.8-2.2 2-0.9 0.5-6.6 2.1-10.6 1.9-6.2 2.6-2.1-0.5-0.8-0.9-0.2-1.4 0.3-3.8-0.5-1.7-4-4.6-1-1.9-0.8-2.8-1.1-2.1-3.6-4.6-0.5-0.7-0.1-1.1 0.9-2.6-0.1-1-1.3-1.2-2.7-1.7-0.7-0.9 0.1-0.7 0.5-0.7 2.8-1.7 7-2.6 1.7 0 3.7 1.6 0.7 0.1 0.9-0.2 0.8-0.5 0.8-1.2-0.4-2.5 0.4-1.3 0.6-0.5 19.5-5.7 7.3-0.8 1.6 0.3 1.7 1 2.3 2.4 1.8 1.4 0.7 0.8 0.5 1.5 0.6 1 1.1 0.5 3.5 0.9 1.1 0.8 1 1.4z"
                    id="Prague" onClick={(e) => {handleClick(e)}}>
                </path>
                <path d="M451.9 123.7l0.3 0.9-0.1 0.9-1 1.6-0.5 1.2-0.1 1.9 0.4 1.4 1 1.8 0.8 2.1 1.3 9.3 0.1 2.3-0.2 1.9-0.5 1.3-1.3 2.3-1.2 1.8-0.9 3-0.2 3.4 0.2 1.5 0.3 0.9 0.4 0.2 7.3 3.2 0.9 0.6 0.9 0.9 1.3 2 0.6 1.9 0.4 2.6 0.5 1.2 0.8 0.9 0.8 0.4 2.1 0 2.8-0.6 1.3 0.1 4 0.9 6.1-0.7 1.1 0 0.9 0.5 1.3 1.1 0.6 1.3 0.5 1.3 0.5 4 0 3.1 0.4 1.9 0.6 2.4 2.3 6.6 0.3 1.3-0.5 1.5-0.6 1-2.4 2.5-0.2 0.7-0.1 1.1 0.8 1.3 2.4 1.6 1.1 1.2 1.4 1.7 1.9 2.9 0.6 1.4 0.1 1-0.4 0.6-2.4 2.4-0.6 1.4 0 1.2 0.8 3.8 0 0.8-0.3 3.2-1.4-0.1-3 0.8-2.7 1.3-0.7 1.1 1.7 2.7 1.1 1.1 3.4 2.3 5 1.6 1.1 0.7 5.4 5.2 1.1 0.9 2 0.5 1 0.5 1.1 0.9 1.4 1.7 0.2 1.1-0.9 2.7-0.1 0.9-0.1 4.6-0.5 2.6-0.7 2.2-0.6 2.4-0.2 1.8-0.2 1.9 0.1 2.4-0.2 1.2-0.6 0.6-1.5 0.5-1.6 1.5-1.2 2.2-0.5 1.8-0.6 3.7-0.4 1-0.5 0.8-0.9 0.8-1.2 0.6-2 0.4-3.8-0.6-0.9 0.5-5.2 4.7-5.2 2-6 3.6-1.2 0.2-0.8-0.2-1.9-1.2-0.8-0.1-1.2 0.4-1.2 1.3-0.8 1.8-0.4 1.9-0.4 0.9-1.2 1.8-3.4 3.9-0.7 1.2-0.4 1.7 0.2 1 0.7 0.9 6.7 5 0.8 0.9 0.8 1.3 0.7 2 0.4 2.5-0.4 2.7-11.5 5.6-4.2 0.7-2.5-1.1-4.3-0.1-3.5 1.1-2 0.2-1.6-0.1-5.8-2.5-1.2-0.1-0.7 0.1-0.7 1-0.1 0.6 0.5 1.8-0.6 1.1-2.8 1.5-0.9 1.4-0.7 1.8-0.6 1.1-1.7 1.5-1.2 0.5-1 0.2-1.3-0.7-1.5-1.5-0.6-0.9-1.3-3.2-0.9-0.6-1.8-0.7-2.9 0.6-1.5-0.2-0.7-0.5-0.2-2-0.5-0.9-0.8-0.7-4.3-1.3-1.3-1-1.1-1.4-0.8-0.9-1.2 0.1-1.9 1.6-1 1.5-0.9 1.8-0.3 1.4-0.3 6-1 1.4-2 1.6-4.8 1-1 0.5-2.2 2.2-3.5 2.3-1.6 0.4-1.6 0.2-3.5-0.5-0.3-0.9 0.2-1.3-1.9-0.5-16.4 0.7-2.7-0.4-2.5-1.3-1.9-0.5-1.9 0.1-1.2 0.2-6.9 3.9-1.5 0.2-1.1-0.1-1.1-0.5-0.7-0.6-1-1.5-1.2-1.1-1.7-0.6-0.6-0.9-0.5-1.5-1.3-0.9-1.8-0.5-2.3 0-1.8 0.4-1.3 0.6-2.7 2.7-2.9 1.2-8.6 1.1-3.9-0.1-1.9-0.7-2.8-0.2-0.9-0.3-1.8-1.4-1.5-0.8-1.1-0.2-1 0.2-1.7 0.9-0.9 0.8-0.8 1.6-0.8 2.6-0.8 0.8-7.1 2.2-1.9 1.2-2.7 1.4-1.5 0.2-1.3-0.2-2.6-1.5-0.9-0.6-1.8-0.6-3.1-0.1-0.8-0.3-1.7-1.2-1.5 0-8.6 5 0-2.1 1.1-3.4 0.4-2.2 0-1.3-0.3-1.6-1-1.5-1.4-1.8-0.5-1-0.4-1.4-0.2-2.3 0.1-5.7-0.3-1.2-0.5-1.2-1.3-1.5-1-0.7-1.4-0.6-0.8-0.5-0.5-0.8-0.4-1.8 0.1-0.8 1.3-1.3 0.3-0.6-0.5-1.2-1.9-1.2 0-0.3 0.9-0.7 1.2-0.7 0.2-0.7-0.2-0.8-2.2-2-0.6-1 0.4-1.1 0.8-1 1.7-1.7 1.7-1.1 1.8-0.8 4.4-1 1.1-0.6 1.1-1.1 3.7-4.1 0.5-1-0.1-0.7-0.3-0.8-1.1-0.6-1.4-0.6-0.6-0.9 0.1-1.3 0.2-1.2 1.5-5.1 0.1-1.1-0.5-2.3-0.1-1.5 1.8-4.7 0.3-1.5 0-4 0.7-1.1 1.8-0.2 1.8-0.8 0.2-1-0.1-1.1-1.5-4.9-0.2-1.2 0-2 0.3-0.8-0.7-1.1-1.3-1.3-7.7-4-0.5-1.9-0.6-0.9-0.9-0.6-4.9-1.5-0.9-0.5-1-0.8-3.8-4.3-1.3-0.8-1.6-0.8-2.8-0.8-1.5-0.1-1.2 0.1-2 0.5-2 0.2-2.7-0.3-1.3-0.9-7.1-6.9-2.6-1.2-2.4-0.6-2-0.8-1.6 0.2-3 1.7-1.6 0.4-1.5-0.1-0.8-0.3-0.5-0.7 0-1 0.6-1.6 1-2.4 0-2.2-1.8-4.6 1.6-2.2 1.8-1 2.3-0.6 1.5-0.7 3.8-3.8 1.7-1.2 1.4-1.8 1.4-3.4 2-3.1 0.8-1 1.7-1 8.7-3.6 6.3-4.1 1.4-1.4 1.6-1.1 1.2-0.4 1.6 0 1 0.2 1.5 0.7 0.7 0 2.6-0.7 14.1-7.4 1.2-0.1 1.2 0.5 1 0.8 1.1 0.4 1-0.2 1.7-1.3 0.8-0.9 1.8-2.3 8.8-5.5 1.4-0.5 2 0.1 1.2-0.1 1.2-0.5 0.8-1.3 0.4-1.7-0.2-1.4 0.2-2.3 0.3-1 0.6-1 1.2-0.5 1.8-0.5 6.1-0.2 3.7 0.8 3.4 1.2 3 0.4 11.6-2 4.8 1.8 1.9-0.7 3.2-2.7 1.2-0.8 1.1-0.3 4.2-0.4 2.6 0.2 1.1-0.2 1.2-0.7 1.2-1.7 1-2.7 0.8-1.1 0.1-1.4-0.9-3.2 0.1-2.2 0-0.9-0.9-3-0.3-0.9 0.2-0.9 0.5-0.5 1.2 0.2 2 0.9 1.5 0.3 2.2-1.1 4.3-3.6 1.2-0.7 0.9-0.7 0.5-1 0.5-1.8 0.2-1.9 0-1.4 0.3-1.9 1-1.7 1-0.7 1.6-0.5 6.6-0.1 2.8 0.4 2.3-0.1 1 0.1 0.7 0.4 0.5 1.2 0.5 2.6 0.7 0.9 1.3 0.2 2.6-0.3 13.2-3.4 6-4 5.4-2.6 1.3-1 1.8-1.7 1.1-0.8 2.4-1.3 1.3-1.1 1-1.4 1.6-3.1 1.5-1.9 3.1-2.6 0.8-1.1 1.7-2.8 0.6-0.7 0.7-0.3 0.8 0.1 1.5 0.6 1.2 0 1.7-0.8 1-0.2 1.1 0.1 1.4 1.2 1.2 0.6 3.5-0.3 0.8 0.2 0.8 0.6 2.8 3.3 0.9 0.9 2.1 0.6 3.8-1 1.3 6.8 1.5 2.9 5.3 4.7z m-73.2 92l-1-1.4-1.1-0.8-3.5-0.9-1.1-0.5-0.6-1-0.5-1.5-0.7-0.8-1.8-1.4-2.3-2.4-1.7-1-1.6-0.3-7.3 0.8-19.5 5.7-0.6 0.5-0.4 1.3 0.4 2.5-0.8 1.2-0.8 0.5-0.9 0.2-0.7-0.1-3.7-1.6-1.7 0-7 2.6-2.8 1.7-0.5 0.7-0.1 0.7 0.7 0.9 2.7 1.7 1.3 1.2 0.1 1-0.9 2.6 0.1 1.1 0.5 0.7 3.6 4.6 1.1 2.1 0.8 2.8 1 1.9 4 4.6 0.5 1.7-0.3 3.8 0.2 1.4 0.8 0.9 2.1 0.5 6.2-2.6 10.6-1.9 6.6-2.1 0.9-0.5 2.2-2 2.4-1.8 1.4-0.4 1.4-0.1 0.7 0.4 2.1 0.5 2.6 0.3 5.3-0.3 3.3-0.8 1.1-2.2 0-1.1-0.9-2.2-0.1-0.6 0.2-2.1-0.3-1.3-0.8-1.9 0.2-0.8 0.4-0.7 4.2-4 1.2-1.7 0.4-1.5-0.2-1.2-0.6-1.1-0.9-0.7-3.1-1-1-0.6-1-1.2-0.5-1z"
                    id="Středočeský" onClick={(e) => {handleClick(e)}}>
                </path>
                <path d="M509.6 61.3l2.1 6.8 4.9 9.9 0.4 1.9-0.3 1.3-0.5 1.3-0.4 1.7-0.2 2.1 0.2 4.6 0.4 2.1 0.7 1.7 1.8 2.4 0.7 1.2 0.5 1.3 0.2 1.3 0 2.9-1.1 4.9 0.3 1.8 5 11.7 0.3 1.4 0.1 1.4-0.2 1.5-0.6 1.3-0.8 0.7-1.1 0.2-11.3-2-1.7-1.1-3.1-3.3-0.8-0.5-1.7 0-3.8 1.3-0.9 0.6-0.4 1.3-0.5 7.4-0.4 1.6-0.6 1.2-0.9 0.8-1 0.3-1-0.1-1.1-0.5-2.2-1.9-4.5-5.8-2.8-2.3-6.4-2.6-1.6 0-1.5 0.6-6.3 7.2-0.9 0.4-0.9-0.1-1-0.5-8.2-6.9-2.3-0.9-1.5 0.2-0.8 0.6-5.3-4.7-1.5-2.9-1.3-6.8-3.8 1-2.1-0.6-0.9-0.9-2.8-3.3-0.8-0.6-0.8-0.2-3.5 0.3-1.2-0.6-1.4-1.2-1.1-0.1-1 0.2-1.7 0.8-1.2 0-1.5-0.6-0.8-0.1-0.7 0.3-0.6 0.7-1.7 2.8-0.8 1.1-3.1 2.6-1.5 1.9-1.6 3.1-1 1.4-1.3 1.1-2.4 1.3-1.1 0.8-1.8 1.7-1.3 1-5.4 2.6-6 4-13.2 3.4-2.6 0.3-1.3-0.2-0.7-0.9-0.5-2.6-0.5-1.2-0.7-0.4-1-0.1-2.3 0.1-2.8-0.4-6.6 0.1-1.6 0.5-1.1-5.3-10.5-8.7-8.3-26.2-0.2-1.3 0.2-1 0.5-0.9 0.7-0.8 2.1-1.3 2.7-7 0.6-0.8 3.3-3.2 0.4-0.8 0.2-1 0-2.4 0.3-1.2 1.1-1.9 1.9-1.8 1.7-9.6 0.5-1.2 0.8-0.2 1.1 0.5 7.7 8 1.2 0.3 1.3-0.3 1.1-0.8 0.9-1.2 0.8-1.5 0.4-1.7 0.3-3.6 0.3-1.2 0.5-0.8 0.6-0.5 4.4-0.4 0.7-0.4 1-1.4 0.5-2 0.7 1.8 5.1 1.4 2.1 1.2 5.7 4.3 5.4 1.2 3.2 0.1 2.4-0.6 1.5-1.7 1.4-2.7 2.3-6.2 3.1 0.1 5.4-1.5 16.8 1.2 0.3-2-0.1-8.1-0.3-1.6 0.1-1.3 0.4-0.8 1.5-1.6 0.4-1.2-0.1-6.8-2.3-3.3-2.4-1.9-0.6-2.7 1.5-1.4 1.6-0.6 2.2-1.5 0.7-1.1 0.4-2 2.8 2.6 7.4 1.7 1.3 2.3 1.7 1.7 2.1 1 1.7-0.3 0.5-2.4 1.3-3.1 1.9-1.3 1.7 0.9 0.7 3.5 1.4 3.5 8.4 0.1 3.9 2 2.4 3.8-0.2 2.3-1.2 2.4-1.1 4.3 0.5 3.4 1.3 4.1 1.8 3.9 1.6 2.5 2.9 2.4 2.7 1.1 2.2 1.9 1.8 4.4 0 2.3-0.4 2.3-0.1 2.2 0.9 2 2.1 0.6 1.7-1.7 1.4-2.5 1.3-1.7 6.2-0.5 11.8 4.1z"
                    id="Liberecký" onClick={(e) => {handleClick(e)}}>
                </path>
                <path d="M666.4 213.2l-15.6-5-0.8 0.4-0.6 0.8-0.4 1.1-0.3 1.4-0.2 3.1-0.4 1.4-0.8 1.1-15.3 7.3-0.8 0.7-0.7 1-0.6 2.9-0.6 1.3-0.7 1-0.9 0.9-2 1-13.2 1.3-2.3 0.9-2.2 1.6-5.7-4.9-1.7-0.4-0.7-0.5-2.3-3-0.6-0.5-1.3-0.3-1.6-0.9-1.8-1.6-1.5-2.2-1.1-2.3-0.8-0.7-8.5-1.7-1.2-0.8-0.7-1.3-0.3-1.4 0-4.7-0.2-1.2-0.4-0.9-0.8-0.6-4.1-1.3-6.2 0.2-1.4 0.6-9.4 9.3-0.8 0.4-0.6-0.2-1.2-1.4-1-2.4-1.4-5.9-0.6-0.8-0.7-0.3-7.4 2.1-0.9 1.2-0.7 1.4-1.9 6.3-0.8 0.9-0.9 0.3-1.1-0.3-6-4.1-0.8-0.2-4.5 1.3-2.2 0-5.8-2.9-2.2 0.2-2.9 1.4-8.9 8.5-1.2 0.1-8.1-3.1 0.4-0.6-0.1-1-0.6-1.4-1.9-2.9-1.4-1.7-1.1-1.2-2.4-1.6-0.8-1.3 0.1-1.1 0.2-0.7 2.4-2.5 0.6-1 0.5-1.5-0.3-1.3-2.3-6.6-0.6-2.4-0.4-1.9 0-3.1-0.5-4-0.5-1.3-0.6-1.3-1.3-1.1-0.9-0.5-1.1 0-6.1 0.7-4-0.9-1.3-0.1-2.8 0.6-2.1 0-0.8-0.4-0.8-0.9-0.5-1.2-0.4-2.6-0.6-1.9-1.3-2-0.9-0.9-0.9-0.6-7.3-3.2-0.4-0.2-0.3-0.9-0.2-1.5 0.2-3.4 0.9-3 1.2-1.8 1.3-2.3 0.5-1.3 0.2-1.9-0.1-2.3-1.3-9.3-0.8-2.1-1-1.8-0.4-1.4 0.1-1.9 0.5-1.2 1-1.6 0.1-0.9-0.3-0.9 0.8-0.6 1.5-0.2 2.3 0.9 8.2 6.9 1 0.5 0.9 0.1 0.9-0.4 6.3-7.2 1.5-0.6 1.6 0 6.4 2.6 2.8 2.3 4.5 5.8 2.2 1.9 1.1 0.5 1 0.1 1-0.3 0.9-0.8 0.6-1.2 0.4-1.6 0.5-7.4 0.4-1.3 0.9-0.6 3.8-1.3 1.7 0 0.8 0.5 3.1 3.3 1.7 1.1 11.3 2 1.1-0.2 0.8-0.7 0.6-1.3 0.2-1.5-0.1-1.4-0.3-1.4-5-11.7-0.3-1.8 1.1-4.9 0-2.9-0.2-1.3-0.5-1.3-0.7-1.2-1.8-2.4-0.7-1.7-0.4-2.1-0.2-4.6 0.2-2.1 0.4-1.7 0.5-1.3 0.3-1.3-0.4-1.9-4.9-9.9-2.1-6.8 17.7 6.3 1.7 1.1 1.9 3 1.1 1 1.6 0.5 12.3-2.9 3.6 0.3 0.3 1.6 0.5 1.4 7.5 12.8 0.9 0.3 4.1-0.1 8.7-3.3 2.5 0.3 2 1.9 1.9 3.7 1.3 3.2 0.8 3.2-0.4 2.7-2.1 1.8-0.4 1.5 0.4 1.4 6.3-1.2 9.1-8.8 6.3 0.6 4.6 3.6 2.3 1 2.5-0.5 1.8-2.3 1-3 1.1-2.3 1.9-0.4 5.4 0.1 4.8 1.2 4.5 2.6 12.6 13.4 1.3 4.4-4.6 1.9 0.6 1.8 0 0.7-1.1 2-0.4 3 0 1.4-0.8 1.6-3.1 3-1.4 2-2.5 0.5-4.7-1.3-2.4 0.8-1.1 3-2.2 1.9-2.6 1.5-2.3 1.9-0.8 0.3-1.3 0.9-0.9 0.1 1 3.3-3-0.7-1.2 3.7 1.4 4.1 4.8 0.9 1.9 5.9 0.7 1.4 1.9 1.5 1.1-0.2 1.1-0.9 1.7-0.6 6.7 0 1.4 0.4 1.1 2.2 0.1 2.1-0.2 2.1 0.4 2.1 2.6 3.5 6.6 2.4 3.3 2.3 2.1 3 3.8 6.8 2.1 3 1.9 3.4 4.5 4.6 1.6 4.4 1.6 7.9 1.4 2.8 2.6 3.4z"
                    id="Královéhradecký" onClick={(e) => {handleClick(e)}}>
                </path>
                <path d="M932.5 384.6l-1.6 0-0.9-0.4-0.8-0.6-0.7-1-0.5-1.3-1.2-6.5-0.4-1.5-0.7-1.2-0.9-1.1-2.5-1.6-1-1.1-3.1-6.6-0.7-0.9-2.6-0.9-11.2 0.1-1-0.3-4.4-3.2-1.4-0.6-23 2.3-1.3-0.2-1-0.6-0.8-0.8-0.6-1.1-0.6-2.9-0.4-0.9-1.1-1-6.5-0.1-2.3-2.6-1.8-1.4-4.2-1.1-0.3-2.9-0.7-2.5-0.5-1.2-1.6-2.1-4-3.4-4.6-2.2-1-1-4.5-9.5-0.8-0.9-0.9-0.2-0.8 0.3-2.7 1.8-1 0.2-1-0.3-0.8-0.9-0.5-1.2-0.1-1.5 0.8-7.6-0.2-1-0.7-1-3.4-2.9-4.2-2.1-5.4 1.8-3.8-0.3-5.4-3.7-0.8 0-0.8 0.4-3.4 2.6-7.5-0.4-2.2-1.1-11.3-12.3-1.1-0.4-1 0.2-4.2 2.3-1-0.1-12.6-6.4-0.6-0.6-0.4-0.7-0.4-2.4-0.3-0.6-0.7-0.4-6.3-0.9-2-0.8-0.6-0.8-0.4-0.8-0.1-1 0.7-8.4 0.3-1.3 0.4-1.1 4.2-5.6 0.3-0.7-0.4-1.4-4.1-4-0.6-1.2-0.3-1.2-0.1-1.3 0.1-1.3 0.4-1.3 0.6-1.1 8.8-12.4 0.5-1 0.1-1 0-1.1-1.7-6.8 0.1-1 0.4-0.9 1.5-2.4 0.3-1.2 0.3-3.5 0.5-1.6 0.7-1.4 2-2.3 11.9-6.7 3.4-5 0.8-0.7 0.8-0.3 0.9 0.1 2.1 1.3 1 0 1-0.4 1-0.9 0.8-1.1 0.6-1.1 0.4-1.2 0.2-1.1-2.3-13.7 3.2 2.7 1.4 4.3 0.7 0.5 0.8 0.1 0.8-0.1 0.7-0.5 4.4-5.3 7-0.7 13.2 2.4 3.4-0.9 2.5-2.1 4.4-6.1 0.8-1.9 0.4-1.5 1-0.7 2.5 1 0.8 0.7 3.1 4.2 0 1.4-0.4 0.7-1.6 4.3-0.3 2.1 0.4 2.4 1.5 1.5 2.3 4.3-1.4 3.5-2.9 2.6-6.3 3.7-4 1.6-7.1 0.3-1.6 0.8-1.1 2.3 0.3 1.7 7.2 9.1 2.3 1 1.5-0.2 1.2-0.8 1.6-0.3 1.9 0.5 4.1 2 2 0.4 0 0.8-1.3 1.2-0.5 1.3 0.4 1.3 1.4 1.4 1.7 1.9 1 2.6 0.8 2.8 1.2 2.8 1.6 2.3 9.6 9.5 5.3 1.1 5.4-1.6 4.4-3.9 2.7-0.7 5.9-0.2 4.8-1.4 0.7-1-0.2-2.3-1.1-1.6-1.2 0-1.2 0.3-0.8-0.3-0.6-5.2 4.5 1.1 8.6 5.7-0.9 4.2 1.9 2.3 9.4 1.8 2.2 1.2 4.7 4 1.7 0.8 3.5 0.7 1.8 1.3 0.6 1.3 1 3.6 0.8 1.5 3 2.4 2.1-0.4 4.1-3.6-0.3-0.7-0.6-0.1 5.9-0.7 5.7 2 11 6.1 3.4 0 5.9-3.8 2.1 1.4 0.9 4.1-0.3 3.5 0.6 2.8 3.9 2.2-4 4.7 0 6.1 2.6 7 3.5 7.1 1.5 6.7 0.9 1.7 2 1.4 4.5 0.4 2.1 0.6 1.9 1.6 2.9 3.4 1.9 1.2 2.1-0.2 2.4-1 2.3-0.4 2.2 1.6 0.6 1.8 1 7.9 0.7 2.1 1.7 4 0.7 2.1 2.1 9.7 0.4 4.7-0.6 3.8-6.1 0.2-2.7 1-6.1 5.6-4.1 0.2-4.3-1.3-4.8-2.4-1-0.2-1.1 0.2-4.2 2.2-6.5-0.9-3 1.9-0.8 1.9-0.4 4.2-0.7 2-1.2 1.2-4.9 2.6-6.3 7.8-3.3 2.1-4.3-0.9-0.1 2.7z"
                    id="Moravskoslezský" onClick={(e) => {handleClick(e)}}>
                </path>
                <circle cx="233" cy="462.4" id="0">
                </circle>
                <circle cx="705.5" cy="454.6" id="1">
                </circle>
                <circle cx="489.5" cy="204.2" id="2">
                </circle>
            </svg>
        </div>
  );    
}

export default Map;
