import React from "react";

function Category({categoryOptions,categoryId,categoryName}) {
	const show = ()=> categoryOptions.map((el,i)=><option key={i} value="all">{el}</option>)
  return (
    <>
      <div className="category1">
        <label htmlFor={categoryId}>{categoryName}</label>
        <select name={categoryId} id={categoryId}>{show()}</select>
      </div>
    </>
  );
}

export default Category;
