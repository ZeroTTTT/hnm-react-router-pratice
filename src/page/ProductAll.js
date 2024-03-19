import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const ProductAll = () => {

  const [productlist, setProductList] = useState([]); //UI에 보여주는거는 useState에 보여줘야한다.

  const getProducts= async ()=>{
    let url = 'http://localhost:5000/products/'
    let response = await fetch(url)
    let data = await response.json()
    setProductList(data);
  }

  useEffect( ()=>{  //api 호출은 useEffect에서 한다!
    getProducts()
  },[])

  return ( 
    <div>      
      <Container>  {/* 아이템을 중앙에 배치 */}
        <Row>
          {productlist.map((menu) => (
          <Col lg={3}>
            <ProductCard item={menu}/>
          </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll