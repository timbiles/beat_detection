import styled from 'styled-components';

const BarLine = styled.section`
  background: #000;
  height: 80px;
  width: 2px;
  margin: ${({ margin }) => margin ? margin : '2px 15px'};
`;

export default BarLine;