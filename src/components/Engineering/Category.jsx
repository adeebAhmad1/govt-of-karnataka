import React from 'react'

function Category(props) {
    return (
        <>
            
            <div className="category1">
                    <label htmlFor={props.categoryId}>{props.categoryName}</label>
                    <select name={props.categoryId} id={props.categoryId}>
                        <option value="all">{props.categoryOption1}</option>
                        <option value="all">{props.categoryOption2}</option>
                        <option value="all">{props.categoryOption3}</option>
                        <option value="all">{props.categoryOption4}</option>
                    </select>
                </div>
        </>
    )
}

export default Category
