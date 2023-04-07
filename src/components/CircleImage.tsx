import styled from 'styled-components';


interface CircleProps {
    src: string;
  }

const CircleImage = styled.img<CircleProps>`
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;

export default CircleImage; 