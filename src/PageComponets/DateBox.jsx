import React from "react"

export default function DateBox() {

    const dateBuilder = (d) => {
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day} ${date} ${month} ${year}`
      }

    return (
        <div className="date">
                {dateBuilder(new Date())}
        </div>
    );
    
}