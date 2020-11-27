import React from 'react'

function UniCards(props) {
    return (
        <>
                <div className="uni-1">
                    <img src={props.image} alt="" />
                    <h4 className="center h4">{props.text1}</h4>
                    <p className="center p">{props.text2}</p>
                    <button className="btn-gr">{props.text3}</button>
                    <p className="center p">{props.text4}</p>
                    <p className="center p">{props.text5}</p>
                    <div className="uni1-btns">
                        <button className="btn-o">{props.text6}</button>
                        <button className="btn-pr">{props.text7}</button>
                    </div>
                </div>
        </>
    )
}

export default UniCards
