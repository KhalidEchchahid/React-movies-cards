import React, { Component } from "react";
// import React from 'react'
import '../App.css';
import ElementsItem from "./ElementsItem";
import Memberinfo from "./Info";



class Items extends Component {
    constructor() {
        super()
        this.state = {
            info: Memberinfo,
            newInfo: [],
            counter: 0
        }


        this.mapping = this.mapping.bind(this);
        this.ClickHandler = this.ClickHandler.bind(this);
    }

    mapping(x) {
        const members = x.map(ok => <ElementsItem
            key={ok.id}
            img={ok.img}
            name={ok.name}
            kind={ok.kind}
            phone={ok.phone}
            mail={ok.mail}
            website={ok.website}
        />);
        return members;
    }

    ClickHandler() {
        if (this.state.counter < this.state.info.length) {
            this.state.newInfo.push(this.state.info[this.state.counter])
            this.setState(prev => { return { counter: prev.counter + 1 } })
        }

    }


    render() {


        return (<div className="row">
            <button className="btn btn-primary rounded mb-3" onClick={this.ClickHandler}>Click Me if you wanna add a movie !</button>
            {this.mapping(this.state.newInfo)}
        </div>);

    }



}

export default Items;
