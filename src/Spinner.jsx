import React from 'react';
import styled, { keyframes } from 'styled-components';

const Spinner = keyframes`
 {
  0%   { transform: rotate(0deg);   transform: rotate(0deg); }
  100% { transform: rotate(360deg); transform: rotate(360deg); }
}
`;

const SpinnerContainer = styled.div`
  position: relative;
  margin: 20px;
`;

const SpinnerIcon = styled.section`
  margin: auto;
  width: 200px;
  height: 200px;
  border: solid 5px #4285f4;
  border-top-color: #efefef;
  border-left-color: #4285f4;
  border-radius: 200px;

  animation: ${Spinner} 1s linear infinite;
`;

const LoadingSpinner = () => (
  <SpinnerContainer>
    <SpinnerIcon />
  </SpinnerContainer>
);

export default LoadingSpinner;
