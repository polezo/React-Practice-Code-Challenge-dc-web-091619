import React, { Fragment } from 'react'

const imageHelper = (url) => {
  let newUrl
  if (url.includes("imgur")) {
    newUrl = require('../assets/RJGr3Xs.png')
  } else {
    newUrl = require(`../assets/sushi-slice_${url.split("_")[1]}`)
  }
  return newUrl
}


const Sushi = (props) => {
 
  return (
    <div className="sushi">
      <div className="plate" >
        { 
          props.eaten &&
            <img onClick={()=>props.eatSushi(props.id,props.sushi.price)} src={imageHelper(props.sushi.img_url)} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi