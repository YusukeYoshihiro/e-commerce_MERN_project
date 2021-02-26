import React from 'react';
// import { Spinner as Div } from 'react-bootstrap';
import loadingLogo from '../asset/loader_spinner.gif';
import styled from 'styled-components';


const Loader = () => {
  return (
    <>
      <LoadingImg src={loadingLogo} alt="loading..." />
    </>
  )
}
export default Loader;

// Styles
export const LoadingImg = styled.img`
width: 100%;
display: block;
margin:0 auto;

@media screen and (min-width: 780px) {
 .full-width-img {
  margin: auto;
  width: 100%;
  }
}
`;

