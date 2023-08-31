// import React from "react";
// import { Link } from "react-router-dom";
// function Navbar() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container">
//           <Link className="navbar-brand" to="/">
//             E-Commerece
//           </Link> 
//           <div >
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link to="/"> Home </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/products">products</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/search">Search</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/login">Login</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/account">My Profile</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/cart">Cart</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;



import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../images/logo.png";
import {FaUserAlt} from "react-icons/fa";
import {ImCart} from "react-icons/im";
import {FaSearch} from "react-icons/fa"


const options = {
  burgerColor: "brown",
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  logoHeight: "15vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "2.2vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  link1Color: "rgb(79, 1, 0)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
  profileIcon:true,
  ProfileIconElement:FaUserAlt ,
  cartIcon: true,
  CartIconElement:ImCart,
  searchIcon:true,
  SearchIconElement:FaSearch

 


};

const Navbar = () => {
  return <ReactNavbar  {...options}  />;
};

export default Navbar;
