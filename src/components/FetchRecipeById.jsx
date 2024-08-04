import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/App_Context";
import { Link , useLocation} from "react-router-dom";

const FetchRecipeById = ({ id }) => {
  const location = useLocation()
  const { getRecipeById } = useContext(AppContext);
  const [recipe, setrecipe] = useState("");
  
  
  useEffect(() => {
    const fetchRecipe = async (id) => {
      const result = await getRecipeById(id);
      
      setrecipe(result.data.recipe);
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
        <>
          
            <div className="details">
             <strong className="instru">Ingrediants :</strong> <br /> {recipe.ingrediants}
            </div>
            <br />
             <strong className="instru"> Instructions :</strong> <br />
            <div className="details">
             {recipe.instructions}
            </div>
         
          <Link to={"/"} className="btn btn-warning my">
            Back to Home
          </Link>
        </>
      )}
    </div>)
  );
};

export default FetchRecipeById;
