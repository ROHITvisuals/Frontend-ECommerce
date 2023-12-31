import React, { Fragment, useEffect, useState ,useContext} from "react";
import "./newProduct.css";
// import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
// import AccountTreeIcon from "@material-ui/icons/AccountTree";
// import DescriptionIcon from "@material-ui/icons/Description";
// import StorageIcon from "@material-ui/icons/Storage";
// import SpellcheckIcon from "@material-ui/icons/Spellcheck";
// import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { Link , useNavigate } from "react-router-dom";
import noteContext from "../../context/notes/noteContext.js"
import Loading from "../layout/Loader/Loader.js"
import SideBar from "./Sidebar";

const NewProduct = () => {
    let history = useNavigate();
    const context = useContext(noteContext);
    const { Admin_createProduct , isUpdated , setIsUpdated , loading  } = context;



  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [Stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const categories = [
    "Laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "SmartPhones",
  ];

  useEffect(() => {

    if (isUpdated) {
      console.log(`alert.success("Product Created Successfully");`);
      setIsUpdated(false)
      history("/admin/dashboard");
    }
  }, [isUpdated]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("Stock", Stock);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    Admin_createProduct(myForm);
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    
    // <Fragment>
    //   {loading? (<Loading/>):(
          <Fragment>
      <MetaData title="Create Product" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          {loading? (<Loading/>): (
     <form
     className="createProductForm"
     encType="multipart/form-data"
     onSubmit={createProductSubmitHandler}
   >
     <h1>Create Product</h1>

     <div>
       {/* <SpellcheckIcon /> */}
       <i class="fa-solid fa-user"></i>
       <input
         type="text"
         placeholder="Product Name"
         required
         value={name}
         onChange={(e) => setName(e.target.value)}
       />
     </div>
     <div>
       {/* <AttachMoneyIcon /> */}
       <i class="fa-solid fa-dollar-sign"></i>
       <input
         type="number"
         placeholder="Price"
         required
         onChange={(e) => setPrice(e.target.value)}
       />
     </div>

     <div>
       {/* <DescriptionIcon /> */}
       <i class="fa-sharp fa-solid fa-file-lines"></i>

       <textarea
         placeholder="Product Description"
         value={description}
         onChange={(e) => setDescription(e.target.value)}
         cols="30"
         rows="1"
       ></textarea>
     </div>

     <div>
       {/* <AccountTreeIcon /> */}
       <i class="fa-solid fa-border-all"></i>
       <select onChange={(e) => setCategory(e.target.value)}>
         <option value="">Choose Category</option>
         {categories.map((cate) => (
           <option key={cate} value={cate}>
             {cate}
           </option>
         ))}
       </select>
     </div>

     <div>
       {/* <StorageIcon /> */}
       <i class="fa-brands fa-stack-exchange"></i>
       <input
         type="number"
         placeholder="Stock"
         required
         onChange={(e) => setStock(e.target.value)}
       />
     </div>

     <div id="createProductFormFile">
       <input
         type="file"
         name="avatar"
         accept="image/*"
         onChange={createProductImagesChange}
         multiple
       />
     </div>

     <div id="createProductFormImage">
       {imagesPreview.map((image, index) => (
         <img key={index} src={image} alt="Product Preview" />
       ))}
     </div>


     {/* <Button
       id="createProductBtn"
       type="submit"
       disabled={loading ? true : false}
     >
       Create
     </Button> */}
     <button
       id="createProductBtn"
       type="submit"
       disabled={loading ? true : false}
     >
       Create
     </button>


   </form>
          ) }
     
        </div>
      </div>
    {/* </Fragment>)} */}
    </Fragment>

  
  );
};

export default NewProduct;
