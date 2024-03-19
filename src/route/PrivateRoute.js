import React from 'react'
import ProductDetail from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({authenticate}) => {
  return authenticate == true?<ProductDetail/>: <Navigate to="/login"/>;   //Navigate가 리다이렉트 해준다
}

export default PrivateRoute