import React, { Component } from 'react';
import Header from './Header'; // import file Header.js
import Footer from './Footer'; // import nama export from nama file.js
import List from './List';

class App extends Component{
  render(){
    return(
      <div>
        <Header list="3 Terbaik" /> {/* function header di atas di masukin ke app biar bisa di munculin */}
        <List />
        <Footer name="Makanan Nusantara" tahun="1994" />
      </div>
    );
  }
}

export default App;
