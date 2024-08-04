import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/App_Context";
import { Link , useLocation, useNavigate} from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Fetchforedit = ({ id }) => {
  const location = useLocation();
  const navigate=useNavigate();
  const { getRecipeById,editrecipe } = useContext(AppContext);
  const [recipe, setrecipe] = useState("");
  const [editing,setediting]=useState("");
  const [editins,seteditins]=useState("");
 
  const handleedit=async()=>{
    const api = await editrecipe(editing,editins,id);
    toast.success("Recipe updated successfully", {
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
      navigate('/profile')
    }, 1500);
    }

 
  useEffect(() => {
    const fetchRecipe = async (id) => {
      const result = await getRecipeById(id);
      
      setrecipe(result.data.recipe);
      setediting(result.data.recipe.ingrediants)
      seteditins(result.data.recipe.instructions)
    };
   
    fetchRecipe(id);
  }, [id]);

  return (
    
    (<div className="text-center cont">
      <div
        className=" text-center"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="d-flex justify-content-center align-items-center p-3">
          <img
            src={recipe.imgurl}
            className="card-img-top"
            alt="..."
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "10px",
              border: "2px solid yellow",
            }}
          />
        </div>
        <h3 className="whitee">{recipe.title}</h3>
      </div>
      {location.pathname !== "/saved" && (
        <>   <div>
            <label for="ingrediants"><strong className="instru">Ingrediants:</strong></label>
            <br />
            <textarea className="editdetails" id="ingrediants" name="ingrediants" value={editing} onChange={(e)=>setediting(e.target.value)}></textarea>
            <br />
             <strong className="instru"> Instructions :</strong>
             <br />
            <textarea className="editins" value={editins} onChange={(e)=>seteditins(e.target.value)} />
          </div>
          <button className="btn btn-success my" onClick={handleedit}>Save</button>
          <Link to={"/"} className="btn btn-warning my">
            Back to Home
          </Link>
        </>
      )}
    </div>)
  );
};

export default Fetchforedit;
