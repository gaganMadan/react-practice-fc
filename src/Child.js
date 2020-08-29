import React from 'react';

const Child = ({obj}) => {

  console.log('Child Component');
  return (
    <>
      <span>This is count from {obj}</span>
    </>

  )

}

export default Child