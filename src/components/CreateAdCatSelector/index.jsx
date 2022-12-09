import React from "react";
import "./styles.css";
import { useState } from "react";
import categories from "../../data/categories";
import CreateAdSelector from "../CreateAdSelectorCard";

const CreateAdCatSelector = () => {
  const [subCat,SetSubCat] =  useState(0)
  let subCategories=[]
  return (
    <div className="createad-catselector">
      <div className="category-selector">
        {categories.map((ad) => {
          if (subCat===ad.id){
            subCategories=ad.sub_categories;
          }
          return (
            <CreateAdSelector
            dataid={ad.id} 
            name={ad.name} 
            imgDefault={ad.image_default} 
            SetSubCat={SetSubCat}
            />
          );
        })}
      </div>
      <div className="subcategory-selector">
        {subCategories.map((temps) => {
          return(
            <div className="create-ad-sub-div">{temps.name}</div>
          )
        })}
      </div>
    </div>
  );
};

export default CreateAdCatSelector;
