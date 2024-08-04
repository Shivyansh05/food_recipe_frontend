import React from 'react'
import { useParams } from 'react-router-dom'
import Fetchforedit from './Fetchforedit';
const Edit = () => {
  const {id} = useParams();
  return (
    <div>
      <Fetchforedit id={id} />
    </div>
  );
}

export default Edit