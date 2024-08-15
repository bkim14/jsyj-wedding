import MainLayer from './components/MainLayer.tsx';
import { Global } from '@emotion/react';
import GlobalCss from './css/GlobalCss.ts';
import IntroFeature from './features/IntroFeature.tsx';
import LocationFeature from './features/LocationFeature/LocationFeature.tsx';
import RsvpDialog from './features/RsvpDialog.tsx';
import BankAccountFeature from './features/BankAccountFeature/BankAccountFeature.tsx';
import { createTheme, ThemeProvider } from '@mui/material';
import tokens from './css/tokens.ts';
import GalleryFeature from './features/GalleryFeature/GalleryFeature.tsx';
import DateFeature from '@/features/DateFeature/DateFeature.tsx';

function App() {
  const theme = createTheme({
    palette: {
      primary: { main: tokens.colors['font-color-base'] },
    },
  });

  return (
    <>
      <Global styles={GlobalCss} />
      <ThemeProvider theme={theme}>
        <RsvpDialog />
        <MainLayer>
          <IntroFeature />
          <DateFeature />
          <GalleryFeature />
          <LocationFeature />
          <BankAccountFeature />
        </MainLayer>
      </ThemeProvider>
    </>
  );
}

export default App;
