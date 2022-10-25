// import React from "react";  ===> when we use the functions
import React, {Component} from "react";
import './App.css';
import Header from './components/Header';
import Items from "./components/Items";


// function App() {
//     return (
//         <div className="container">
//             <Header />
//             <Items />
//         </div>
//     );
// }

class App extends Component{
    render() {
        return (
            <div className="container">
                <Header />
                <Items />
            </div>
        );
    }
}

export default App;