import React from 'react'

const Card = (props) => {
  return (
    <>
        <div className= "card mb-1 mt-1" style={{ borderRight: `4px ${props.val<0 ? "solid red": "solid green"}`, borderLeft: `4px ${props.val<0 ? "solid red": "solid green"}` }}>
            <div className = "d-flex justify-content-between">
                <h5 className = ""> {props.text} </h5>
                <h5 className="">
                    {props.val < 0 ? `-$${Math.abs(props.val)}` : `$${props.val}`}
                </h5>
            </div>

        </div>
    </>
  )
}

export default Card
