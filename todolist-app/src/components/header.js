import React from 'react'


const Header = () =>{

    //I'm going to add a function that display the date
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var d = new Date();

    return(
        <div className="Header">
            <h1>To-do App</h1>
            <h2>{days[d.getDay()]}, {months[d.getMonth()]} {d.getUTCDate() + ', ' + d.getFullYear()}</h2>
        </div>
    )
}

export default Header