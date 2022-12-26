import React from 'react';
import Header from './Header'; // import file Header.js
import Footer from './function'; // import nama export from nama file.js

// masukin function ke dalam App
// const Footer = () =>{
//   return (
//     <p>ini tampilan footer</p>
//   )
// }

// import componen dalam file yang sama
// function Header(){
//   return (
//       <div>
//       <p>rendering header</p>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Header /> {/* function header di atas di masukin ke app biar bisa di munculin */}
     <h1>Rendering Elements</h1>
     <Footer />
    </div>
  );
 
}

export default App;
