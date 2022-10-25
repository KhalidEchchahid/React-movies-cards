// import React from "react";
import React, { Component } from 'react';
import '../App.css';
import Logo from "./Logo";

// function Header() {
//     return (

//             <h1 className="bg-primary text-white rounded my-3 p-2 text-center">
//             <Logo />
//              Most famous series</h1>


//     );
// }

class Header extends Component{
    // hna fin kanktbo les methods


    render() {
        // const name = 'khalid'     ====> hna fin kandiclariw les variables......


        return (
            <h1 className="bg-dark text-white rounded my-3 p-2 text-center">
                <Logo />
                Most famous series</h1>
        )
    }
}

export default Header;