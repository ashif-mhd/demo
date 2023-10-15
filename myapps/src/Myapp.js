import React from 'react'
import Props from './Props'


const Myapp = (props) => {
  
      
  return (
    <div className='data'>
      <h1>name:{props?.contact?.name}</h1>
      <p>age:{props?.contact?.age}</p>
      <p>gender:{props?.contact?.gender}</p>
      <img src={props?.contact?.image} alt="" />
    </div>
  )
}

export default Myapp