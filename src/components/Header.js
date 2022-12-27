import React, { Component } from "react";

// import componen file terpisah

//penulisan state
class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      daftar: "Daftar Makanan Nusantara",
      dataList: this.props.list // di dapet dari list yang di App.js
    };
  }
  render(){
  return (
          <div>
           <h2>Makanan Nusantara</h2>
           <p>{this.state.daftar}</p>
           <p>{this.state.dataList}</p>
          </div>
        );
  }
}

// 


  export default Header; // harus di export biar bisa di import di file lain