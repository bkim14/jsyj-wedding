import { Flex } from '../components/Flex.tsx';
import Text from '../components/Text.tsx';
import image from '../assets/MainImage.jpeg';
import pause from '../assets/pause.png';
import play from '../assets/play.png';
import styled from '@emotion/styled';
import tokens from '../css/tokens.ts';
import { keyframes } from '@emotion/react';
import { useEffect, useState } from 'react';

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
const BASE_URL = import.meta.env.BASE_URL;

const IntroFeature = () => {
  const [currentImage, setCurrentImage] = useState(pause);
  const [audio] = useState(
    new Audio(`${BASE_URL}src/assets/videoplayback.mp3`),
  );

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
  return (
    <Flex fullWidth gap={'30px'}>
      <Flex
        style={{
          zIndex: 100,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
          <TitleText prettyColor cursive>
            Our Wedding Day
          </TitleText>
        </Flex>
        <img
          src={image as string}
          alt=""
          width="100%"
          style={{ visibility: 'hidden' }}
        />
      </Flex>
    </Flex>
  );
};

const TitleText = styled(Text)`
  font-size: ${tokens.fontSize.xxl};
  animation: ${fadeIn} 2s;
`;

export default IntroFeature;
