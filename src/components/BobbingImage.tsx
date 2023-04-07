import styled, { keyframes, css } from 'styled-components';
import React, { useEffect, useState } from 'react';

const BobbingImageComponent = ({ className, src }: { className?: string, src: string }) => {
  const [bobbing, setBobbing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBobbing((prev) => !prev);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <BobbingImage
      src={src}
      className={className}
      bobbing={bobbing}
    />
  );
};

const BobbingImage = styled.img<{ bobbing: boolean }>`
  ${({ bobbing }) =>
    bobbing &&
    css`
      animation: ${bob} .8s infinite;
    `}
    
    width: 300px;
    height: 300px;
    border-radius: 50%;
`;

const bob = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(calc(cos(0.5turn) * 15px));
  }
  100% {
    transform: translateY(0);
  }
`;

export default BobbingImageComponent;