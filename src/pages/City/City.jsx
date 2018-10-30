import React, { Component } from "react";

class City extends Component {
    state = {
        city: "Phoenix"
    }

    render(){
        return (
            <div className="City">
                <p>City</p> 
            </div>
        )
    }
}

export default City;