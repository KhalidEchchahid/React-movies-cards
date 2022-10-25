import React, { Component } from "react";

// function ElementsItem(props) {
//     return (
//         <div className="col-md-4 col-sm-6">
//             <div className="card ">
//                 <div className="card-body">
//                     <img className="card-img-top" src={props.img} />
//                 </div>
//                 <div className="card-body">
//                     <h2>{props.name}</h2>
//                     <h5>{props.kind}</h5>
//                     <div>{props.phone}</div>
//                     <div>{props.mail}</div>
//                     <div>{props.website}</div>
//                 </div>

//             </div>
//         </div>

//     );
// }
class ElementsItem extends Component{
    /* constructor(){ البناء
        super()
        this.state = {
            .................
        }

    } */



    render(){
        return (
            <div className="col-md-4 col-sm-6">
                <div className="card ">
                    <div className="card-body">
                        <img className="card-img-top" src={this.props.img} />
                    </div>
                    <div className="card-body">
                        <h2>{this.props.name}</h2>
                        <h5>{this.props.kind}</h5>
                        <div>{this.props.phone}</div>
                        <div>{this.props.mail}</div>
                        <div>{this.props.website}</div>
                    </div>
    
                </div>
            </div>
    
        );
    }
    }


export default ElementsItem;