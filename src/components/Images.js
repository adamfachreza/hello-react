import React, { Component } from "react";

class Images extends Component{
    render(){
        return <img src={this.props.linkgambar} width={this.props.lebar} />
    }
}
export default Images;