import React from 'react'


const Props = ({data}) => {
  return (
    <div>
        <h1>name:{data.name}</h1>
      <p>age:{data.age}</p>
      <p>gender:{data.gender}</p>
      <img src={data.image} alt="" />
    </div>
  )
}

export default Props