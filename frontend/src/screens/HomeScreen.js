import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions';
import loadingLogo from '../asset/loader_spinner.gif';
import styled from 'styled-components';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList);

  const { loading, error, products} = productList;
  console.log(products);
  console.log(loading);
  console.log(error);

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);

  return (
    <>
      <h1>Find Your Best Gears</h1>
      {loading ?
        (<LoadingImg src={loadingLogo} alt="loading..." />)
        : error ? (
          <h3>{error}</h3>
        ) : (
            <Row>
              {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          )}

    </>
  )
}

export default HomeScreen;

export const LoadingImg = styled.img`
  display: block;
  margin:0 auto;
`;

