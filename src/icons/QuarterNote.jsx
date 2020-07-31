import styled from 'styled-components';

const QuarterNote = styled.section`
  background: #000;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  position: relative;
  margin: ${({ margin }) => (margin ? margin : '40px 15px')};

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
`;

export default QuarterNote;
