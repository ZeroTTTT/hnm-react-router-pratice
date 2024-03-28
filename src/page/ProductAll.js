import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {

  const [productlist, setProductList] = useState([]); //UI에 보여주는거는 useState에 보여줘야한다.
  const [query, setQuery] = useSearchParams(); 

  const getProducts= async ()=>{
    let searchQuery = query.get("q") || "";
    console.log("쿼리값은?", searchQuery);
    // let url = `http://localhost:5000/products?q=${searchQuery}`;
    let url = `https://my-json-server.typicode.com/ZeroTTTT/hnm-react-router-pratice/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }

  
  
  useEffect( ()=>{  //api 호출은 useEffect에서 한다!
    getProduhttps://github.com/ZeroTTTTcts()
  },[query]) //query가 바뀔때마다 재실행되도록

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