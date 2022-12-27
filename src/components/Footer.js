import React from "react"

// Penulisan variabel dalam function
// const Footer = ()=>{
//     var nama = "Niomic"
//     return(
//         <div>
//             <p>ini function component file terpisah{nama}</p>
//         </div>
//     )
// }

// Penulisan function tanpa variabel
// const Footer = ()=>{
   
//         <div>
//             <p>ini function component file terpisah{nama}</p>
//         </div>
    
// }

// Penulisan Props pada function 
const Footer = (props) =>{
    return(
        <div>
            <h4>Halaman Footer{props.name}</h4>
            <p>sejak tahun @{props.tahun}</p>
        </div>
    )
}

export default Footer;