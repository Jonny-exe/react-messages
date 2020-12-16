import React from 'react'

function Tweet(props: any) {
  return (
    <div>
      <h3> {props.name} </h3>
      <p> {props.message} </p>
      <h2> Number of likes </h2>
    </div>
  )
}

export default Tweet
