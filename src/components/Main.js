import React, { Component } from "react";

class Main extends Component {
    constructor (props){
        super(props);
        this.state = {
            title: "Menu Makanan",
            title2: "Menu Minuman",
            inputDefault: "Nasi Padang Ni Boss"

        };
        this.rubahData = this.rubahData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // rubahData(){
    //     this.setState({title: "Pilih Makanan"});
    // }

    // penulisan dengan cara arrow state, di rekomendasikan cara penulisannya seperti ini
    rubahData(){
        this.setState((state, props) => {
            return {
                title: state.title2,
                title2: state.title
            };
        });
    }

    // handleChange(){
    //     console.log("jalan");
    // }

    // event target value, munculin apa yang di ketik ke console
    handleChange(e){
        console.log(e.target.value);
    }

    render(){
        return(
            <div>
                <h3>{this.state.title}</h3>
                <h2>{this.state.title2}</h2>
                <button onClick={this.rubahData}> rubah data</button>
                <br />
                <br />
                <input type="text" onChange={this.handleChange} value={this.state.inputDefault} />
            </div>
        );
    }
}

export default Main;