import styled from '@emotion/styled';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { ReactNode, useEffect } from 'react';

const Wrapper = styled.div<{ isVisible: boolean }>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? 'translateY(0)' : 'translateY(20px)'};
  transition:
    opacity 1s ease-in-out,
    transform 1s ease-in-out;
`;

interface FadeInWrapperProps {
  children: ReactNode;
}

const FadeInWrapper: React.FC<FadeInWrapperProps> = ({ children }) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    console.log('isIntersecting:', isIntersecting);
  }, [isIntersecting]);

  return (
    <Wrapper
      ref={ref as React.RefObject<HTMLDivElement>}
      isVisible={isIntersecting}
    >
      {children}
    </Wrapper>
  );
};

const FadeInWrapperHoc = <P extends object>(Component: React.FC<P>) => {
  return (props: P) => {
    return (
      <FadeInWrapper>
        <Component {...props} />
      </FadeInWrapper>
    );
  };
};

export default FadeInWrapperHoc;
