import React from 'react'

function SelectCards({options,selectDistrict,searchId,placeSearchDistrict}) {
    const showOptions = ()=>{
        return options.map((el,i)=>{
            return <div key={i} className="mc1-content">
            <input type="radio" name="radio" id="radio" />
            <p className="p">{el}</p>
        </div>
        }) 
    }
    return (
        <>
            <div className="mc1-card mb-lg-3 mb-0 p-lg-3 px-2 py-3">
                <p className="blue hide_on_med p">{selectDistrict}</p>
                {window.innerWidth > 768 ? <input type="text" name={searchId} id={searchId} placeholder={placeSearchDistrict} /> : <select className="select-mb"> {options.map((el,i)=> <option value={el} key={i}> {el} </option>)} </select>}
                {window.innerWidth > 768 ? showOptions() : ""}
            </div>
        </>
    )
    // 2837308766
}

export default SelectCards
