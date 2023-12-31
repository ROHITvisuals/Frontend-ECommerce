import React, { Fragment, useEffect, useState, useContext } from "react";

import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
// import AccountTreeIcon from "@material-ui/icons/AccountTree";
// import DescriptionIcon from "@material-ui/icons/Description";
// import StorageIcon from "@material-ui/icons/Storage";
// import SpellcheckIcon from "@material-ui/icons/Spellcheck";
// import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import noteContext from "../../context/notes/noteContext.js"
import SideBar from "./Sidebar";
import {  useParams} from "react-router-dom";
import Loading from "../layout/Loader/Loader.js"
import { Link , useNavigate } from "react-router-dom";



const UpdateProduct = () => {
  const { id } = useParams();
  let history = useNavigate();

    const context = useContext(noteContext);
    const { Admin_updateProduct, getProductDetails , product , isUpdated , setIsUpdated , loading } = context;


    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [Stock, setStock] = useState(0);
    const [images, setImages] = useState([]);
    const [oldImages, setOldImages] = useState([]);
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

    const productId = id;

    useEffect(() => {
       
        if (product && product._id !== productId) {
            getProductDetails(productId);
        } else {
            setName(product.name);
            setDescription(product.description);
            setPrice(product.price);
            setCategory(product.category);
            setStock(product.Stock);
            setOldImages(product.images);
        }

        if (isUpdated) {
            getProductDetails(productId);
            console.log(`alert.success("Product Updated Successfully");`);
            setIsUpdated(false)
            history("/admin/products");
        }
    }, [  isUpdated,  productId, product ]);

    const updateProductSubmitHandler = (e) => {
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
        Admin_updateProduct(productId, myForm);
    };

    const updateProductImagesChange = (e) => {
        const files = Array.from(e.target.files);

        setImages([]);
        setImagesPreview([]);
        setOldImages([]);

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
        //     {loading? (<Loading/>) : (
                 <Fragment>
            <MetaData title="Create Product" />
            <div className="dashboard">
                <SideBar />
                <div className="newProductContainer">
            {loading? (<Loading/>) : (   <form
                        className="createProductForm"
                        encType="multipart/form-data"
                        onSubmit={updateProductSubmitHandler}
                    >
                        <h1>Update Product</h1>

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
                                value={price}
                            />
                        </div>

                        <div>
                            {/* <DescriptionIcon /> */}
                            <i class="fa-sharp fa-solid fa-file-lines"></i>
                            <textarea placeholder="Product Description" value={description} onChange={(e) => setDescription(e.target.value)} cols="30" rows="1"
                            ></textarea>
                        </div>

                        <div>
                            {/* <AccountTreeIcon /> */}
       <i class="fa-solid fa-border-all"></i>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
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
       <i class="fa-solid fa-circle-check"></i>
                            <input type="number" placeholder="Stock" required onChange={(e) => setStock(e.target.value)} value={Stock} />
                        </div>

                        <div id="createProductFormFile">
                            <input  type="file"  name="avatar"  accept="image/*"  onChange={updateProductImagesChange}  multiple />
                        </div>

                        <div id="createProductFormImage">
                            {oldImages &&
                                oldImages.map((image, index) => (
                                    <img key={index} src={image.url} alt="Old Product Preview" />
                                ))}
                        </div>

                        <div id="createProductFormImage">
                            {imagesPreview.map((image, index) => (
                                <img key={index} src={image} alt="Product Preview" />
                            ))}
                        </div>

                        <Button
                            id="createProductBtn"
                            type="submit"
                            disabled={
                                loading ? true : false 
                                // loading ? true : false || category === "" ? true : false
                            }
                        >
                            Update
                        </Button>
                    </form>
                     ) }
                 
                </div>
            </div>
        {/* </Fragment>) } */}
        </Fragment>

       
    );
};

export default UpdateProduct;
