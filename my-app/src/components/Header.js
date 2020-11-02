import React from "react"

function Header() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
        timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon";
    } else {
        timeOfDay = "night";
    }

    return (
        <header id="header">
            <div>This is the header</div>
            <h1>Good {timeOfDay}</h1>
        </header>
    )
}

export default Header