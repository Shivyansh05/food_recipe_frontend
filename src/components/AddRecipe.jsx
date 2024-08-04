import React, { useContext, useState } from "react";
import { AppContext } from "../context/App_Context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
   const navigate = useNavigate();
   const { addRecipe } = useContext(AppContext);

   const [formData, setformData] = useState({
     title:"",
     ingrediants:"",
     instructions:"",
     imgurl:"",
   });

   const onChangeHandler = (e) =>{
    const {name ,value} = e.target
    setformData({...formData,[name]:value})
   }

   const onSubmitHandler = async (e) =>{
    e.preventDefault()

    const {
      title,
      ingrediants,
      instructions,
      imgurl,
    } = formData;

    const result = await addRecipe(
      title,
      ingrediants,
      instructions,
      imgurl
    );

    toast.success(result.data.message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    
    setTimeout(() => {
      navigate("/");
    }, 1500);
   }

  return (
    <>
      <ToastContainer />
      <div
        className="container my-5 p-5"
        style={{
          width: "500px",
          border: "2px solid yellow",
          borderRadius: "10px",
        }}
      >
        <h2 className="text-center">Add Recipe</h2>
        <form
          onSubmit={onSubmitHandler}
          style={{
            width: "400px",
            margin: "auto",
          }}
          className="my-3 p-3"
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              title
            </label>
            <input
              value={formData.title}
              onChange={onChangeHandler}
              name="title"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Ingrediants
            </label>
            <input
              value={formData.ingrediants}
              onChange={onChangeHandler}
              name="ingrediants"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Instructions
            </label>
            <input
              value={formData.instructions}
              onChange={onChangeHandler}
              name="instructions"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              imgUrl
            </label>
            <input
              value={formData.imgurl}
              onChange={onChangeHandler}
              name="imgurl"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="container d-grid col-6">
            <button type="submit" className="btn btn-primary mt-3">
              Add Recipe
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddRecipe;
