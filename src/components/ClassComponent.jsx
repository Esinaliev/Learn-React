import React from "react";

class CC extends React.Component {

    constructor({name, setName}){
        super();
        this.name = name;
        this.setName = setName;
    }

    change = (event) => {
        this.setName(event.target.value)
        this.name = event.target.value
    }

    send = (event) => {
        event.preventDefault();
        console.log(this.name)
    }

    render() {
        return (
        <div> 
            <p>Class C</p>
            <input type="text" onChange={this.change} value={this.name}></input>
            <button type="submit" onClick={this.send}>click me</button>
        </div>
        )
    }
}

export default CC
