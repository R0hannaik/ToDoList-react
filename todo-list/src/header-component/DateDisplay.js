import React from 'react'
 
function DateDisplay() {

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const getDay = () =>{
        let d = new Date();
        return days[d.getDay()];
    };
    const getMonth = () =>{
        let d = new Date();
        return months[d.getMonth()];
    };
    const getYear = () =>{
        let d = new Date();
        return d.getFullYear();
    };
    const getDate = () =>{
        let d = new Date();
        let presentDate = d.getDate();
        if(presentDate === 1 || presentDate === 21 || presentDate === 31 ){
            return <> {presentDate}st</>
        }
        else if(presentDate === 2 || presentDate === 22){
            return <> {presentDate}nd</>
        }
        else if(presentDate === 3 || presentDate === 23){
            return <> {presentDate}rd</>
        }
        else{
            return <> {presentDate}th</>
        }
    };
    const displayDateAndDay = () =>{
        return(
            <>
                {getDay()},{getDate()} {getMonth()}
            </>
        )
    };
    const displayMonthAndYear = () =>{
        return(
            <>
                {getYear()}
            </>
        )
    };

     return (
        <div>
            <h1>
                {displayDateAndDay()} {displayMonthAndYear()}
            </h1>
        </div>
     )
 }

 export default DateDisplay;