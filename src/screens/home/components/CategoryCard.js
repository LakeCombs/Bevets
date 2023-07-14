import React from "react";
import { useNavigate } from "react-router-dom";


const CategoryCard = (cat ) => {
    const navigate = useNavigate();
    const { _id, image, name } = cat?.cat;

  return (
    <div onClick={() => {
        navigate(`/categories/${name}`, { state: { _id, name } });
    }}>
      {/*<div className="grad w-full h-[362px] rounded-[8px] overflow-hidden relative group">*/}
        <div className="grad rounded-[8px] overflow-hidden relative group w-[180px] h-[200px] flex items-center flex-col bg-bright-blue m-[6px] px-[10px] py-[6px] pt-[4px] hover:cursor-pointer hover:shadow-md  ">
        <div className="w-full h-[200px] flex items-center justify-center relative">
          <img
            className="w-[160px] h-[160px] group-hover:scale-90 transition-all"
            src={image}
          />
        </div>
        <div className="px-6 pb-8 flex flex-col">
          <div className="text-sm text-accent capitalize mb-2">
            {name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
