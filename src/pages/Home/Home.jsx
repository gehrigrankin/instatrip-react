import React, { Component } from "react";

import './Home.css'

class Home extends Component {
    state = {
        city: "Phoenix"
    }

    render(){
        return (
            <div className="Home">
                <p>Home</p>
            </div>
        )
    }
}

export default Home;