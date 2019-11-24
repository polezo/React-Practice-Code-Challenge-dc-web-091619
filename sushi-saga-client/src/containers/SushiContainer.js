import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis &&
         props.sushis.map(sushiObj=><Sushi 
          key={sushiObj.id} 
          id={sushiObj.id}
          eatSushi={props.eatSushi} 
          sushi={sushiObj} 
          eaten={props.eaten(sushiObj.id)}/>)
        }
        <MoreButton nextSushis={props.nextSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer