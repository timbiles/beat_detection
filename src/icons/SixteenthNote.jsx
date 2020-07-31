import styled, { css } from 'styled-components';

const SixteenthNote = styled.section`
  background: #000;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  position: relative;
  margin: ${({ connected }) =>
    connected ? '40px 15px 40px 3px' : '40px 15px'};

  &:after {
    position: absolute;
    content: '';
    background: #000;
    height: 40px;
    width: 3px;
    right: 0px;
    bottom: 10px;
    border-radius: 2px;
  }

  &:before {
    position: absolute;
    content: '';
    border: 3px solid #000;
    height: 34px;
    width: 3px;
    right: -3px;
    bottom: 8px;
    border-radius: 2px;
    transform: rotate(0.25turn) translate(-19px, -19px);
  }

  ${({ patternTwo }) =>
    patternTwo &&
    css`
      &:before {
        height: 35px;
        width: 3px;
        bottom: 6px;
      }
    `}
`;

export default SixteenthNote;
