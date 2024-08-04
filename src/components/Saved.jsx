import React, { useContext } from "react";
import { AppContext } from "../context/App_Context";
import FetchRecipeById from "./FetchRecipeById";
import './comp.css'
const Saved = () => {
  const { savedRecipe } = useContext(AppContext);
  console.log(savedRecipe);
  return (
    <div>
      { savedRecipe.length===0?<h1 className="text-center">No recipies saved</h1>:
      (<div className="row container mx-auto my-3">
        {savedRecipe?.map((data) => (
          <div className="col-md-3" key={data.recipe}>
            <div><FetchRecipeById id={data.recipe} /></div>
          </div>
        ))}
      </div>)}
    </div>
  );
};

export default Saved;
