'use client';
import React, { useState } from "react";

let currentMonth = 0;
let currentYear = 2024;



function initMonth(){
    const date = new Date();
    const month = date.getMonth();
    return currentMonth = month;
}

function initYear(){
    const date = new Date();
    const year = date.getFullYear();
    return currentYear = year;
}


export function getTotalDays(year, month){
    return new Date(year, month, 0).getDate();
}



export function strMonth(){
    let months = ["Janurary", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[currentMonth];
}





const Calendar = () => {
    const [fwd, setfwd] = useState(0);
    const [prev, setprev] = useState(0);

    function fwdMonth(){
        setfwd(++currentMonth);
        console.log(currentMonth);
        if (currentMonth > 11){
            currentMonth = 0;
            ++currentYear 
        }
    };

    function prevMonth(){
        setprev(--currentMonth);
        console.log(currentMonth);
        if (currentMonth < 0){
            currentMonth = 11;
            --currentYear 
        }
    };



    return (
        <>
        <div className="">
            <div className="">
                <button className="" onClick={() => fwdMonth()}>Next Month</button>
                <button className="" onClick={() => prevMonth()}>Previous Month</button>
            </div>
            <span className="">
                <h2>{strMonth()}</h2>
                <h2>{currentYear}</h2>
            </span>
            

        </div>
        
        
        
        </>
    )
};

export default Calendar;