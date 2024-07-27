import { css } from '@emotion/react';

const GlobalCss = css`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
  @font-face {
    font-family: 'Amarillo';
    src:
      url('/font/Amarillo/Amarillo.otf') format('opentype'),
      url('/font/Amarillo/Amarillo.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Blenda';
    src: url('/font/Blenda/Blenda Script.otf') format('opentype');
    font-style: normal;
  }
  @font-face {
    font-family: 'Blockletter';
    src: url('/font/Blockletter/Adlery-Pro-trial.ttf') format('truetype');
    font-style: normal;
  }
  @font-face {
    font-family: 'Broadcast';
    src: url('/font/BroadcastMatter/Broadcast_Matter.ttf') format('truetype');
    font-style: normal;
  }
  @font-face {
    font-family: 'Golden';
    src: url('/font/Golden_Plains/Golden_Plains.ttf') format('truetype');
    font-style: normal;
  }
  @font-face {
    font-family: 'Magnolia';
    src: url('/font/Magnolia/Magnolia Script.otf') format('opentype');
    font-style: normal;
  }
  @font-face {
    font-family: 'Magnolia';
    src: url('/font/Magnolia/Magnolia Script.otf') format('opentype');
    font-style: normal;
  }
  @font-face {
    font-family: 'Pacifico';
    src: url('/font/Pacifico/Pacifico.ttf') format('truetype');
    font-style: normal;
  }
  @font-face {
    font-family: 'SoutGarden';
    src: url('/font/SoutGarden/South Gardens Personal Use.ttf')
      format('truetype');
    font-style: normal;
  }

  html {
    font-size: 16px;
  }

  body {
    font-size: 1rem;
    margin: 0;
    padding: 0;
    font-family: 'Pretendard';
  }
`;

export default GlobalCss;
