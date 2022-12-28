import React, { Component } from "react";
class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      daftar: "Daftar Makanan Nusantara",
      dataList: this.props.list // di dapet dari list yang di App.js
    };
    this.handlePesan = this.handlePesan.bind(this);
  }
  // handling pada kelas komponen
  // handlePesan(){
  //   alert("Halaman Header");
  // }

  // handle dengan parameter
  // handlePesan(value){
  //   alert(this.state.daftar);
  //   alert(value);
  // }

  handlePesan(value, e){
    e.preventDefault();
    alert(this.state.daftar);
    alert(value);
  }
  render(){
  return (
          <div>
           <h2>Makanan Nusantara</h2>
           <p>{this.state.daftar}</p>
           <p>{this.state.dataList}</p>
           {/* handling pada kelas komponen
           <a href="/" onClick={this.handlePesan}>Halaman Header</a> */}

           {/* handling dengan parameter */}
           {/* <a href="/" onClick={()=> this.handlePesan("Pesan Dari Header")}>Halaman Header</a> */}

           {/* prevent default biar page ga reload setelah alert */}
           <a href="/" onClick={e => this.handlePesan("Pesan Dari Header", e)}>Halaman Header</a>
          </div>
        );
  }
}
  export default Header; // harus di export biar bisa di import di file lain