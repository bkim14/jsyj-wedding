import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Flex } from '../components/Flex.tsx';
import Text from '../components/Text.tsx';
import image from '../assets/MainImage.jpeg';
import pause from '../assets/pause.png';
import play from '../assets/play.png';
import tokens from '../css/tokens.ts';
import { css, keyframes } from '@emotion/react';

const fadeIn = keyframes`
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
`;

const up = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ThemeGra = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.7) 50%,
    rgba(255, 255, 255, 1) 100%
  );
`;

const TextWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 12;
  color: #0c6a31;
`;

const Title = styled.div`
  opacity: 0;
  transform: translateY(20px);
  animation: ${up} 2s 0.5s forwards;
`;

const Content = styled.div`
  opacity: 0;
  margin: 10px 0 0 0;
  transform: translateY(20px);
  animation: ${up} 2s 1.5s forwards;
`;

const BASE_URL = import.meta.env.BASE_URL;

const IntroFeature = () => {
  const [currentImage, setCurrentImage] = useState(pause);
  const [audio] = useState(new Audio(`${BASE_URL}assets/videoplayback.mp3`));
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isAnimationEnded, setIsAnimationEnded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
    const [isTitleVisible, setIsTitleVisible] = useState(false);

  useEffect(() => {
    void audio.play();
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const handleImageClick = () => {
    if (audio.paused) {
      audio.play();
      setCurrentImage(pause);
    } else {
      audio.pause();
      setCurrentImage(play);
    }
  };

    const handleAnimationEnd = () => {
        setIsAnimationEnded(true);
        setTimeout(() => {
            setIsHidden(true);
            setIsTitleVisible(true); // Start TitleText animation
        }, 1000); // Set display: none after the fade-out animation
    };

  return (
    <Flex fullWidth gap={'30px'}>
      <AnimatedFlex
        isAnimationEnded={isAnimationEnded}
        isHidden={isHidden}
        style={{
          height: '100vh',
          width: '100%',
          left: '50%',
          background: '#bee2be',
        }}
        onAnimationEnd={handleAnimationEnd}
      >
        <ThemeGra>
          <TextWrapper>
            <Title>정선 ♥ 윤정</Title>
            <Content>결혼식에 초대합니다.</Content>
          </TextWrapper>
        </ThemeGra>
      </AnimatedFlex>
      <Flex
        style={{
          zIndex: 100,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: isImageLoaded && isAnimationEnded ? 1 : 0,
          transform:
            isImageLoaded && isAnimationEnded ? 'scale(1)' : 'scale(0.8)',
          transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
        }}
      >
        <Flex css={{ paddingTop: '4vh' }} column={false}>
          <img
            src={currentImage as string}
            alt=""
            width="5%"
            style={{ position: 'absolute', top: '10px', right: '10px' }}
            onClick={handleImageClick}
          />
          <TitleText prettyColor cursive isVisible={isTitleVisible}>
            Our Wedding Day
          </TitleText>
        </Flex>
        <img
          src={image as string}
          alt=""
          width="100%"
          style={{ visibility: 'hidden' }}
          onLoad={() => setIsImageLoaded(true)}
        />
      </Flex>
    </Flex>
  );
};

const TitleText = styled(Text)<{ isVisible: boolean }>`
  font-size: ${tokens.fontSize.xxl};
  animation: ${({ isVisible }) => (isVisible ? fadeIn : 'none')} 4s;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimatedFlex = styled(Flex)<{
  isAnimationEnded: boolean;
  isHidden: boolean;
}>`
  opacity: ${({ isAnimationEnded }) => (isAnimationEnded ? 0 : 1)};
  transition: opacity 1s cubic-bezier(0.25, 0.1, 0.25, 1);
  ${({ isAnimationEnded }) =>
    isAnimationEnded &&
    css`
      animation: ${fadeOut} 1s forwards;
    `}
  ${({ isHidden }) => isHidden && 'display: none;'}
  ${({ isAnimationEnded }) => isAnimationEnded && 'pointer-events: none;'}
`;

export default IntroFeature;
