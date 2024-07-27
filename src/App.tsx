import { FeatureComponent } from './components/FeatureItem.tsx';
import MainLayer from './components/MainLayer.tsx';
import { Global } from '@emotion/react';
import GlobalCss from './css/GlobalCss.ts';
import IntroFeature from './features/IntroFeature.tsx';
import LocationFeature from './features/LocationFeature/LocationFeature.tsx';
import RsvpDialog from './features/RsvpDialog.tsx';

function App() {
  return (
    <>
      <Global styles={GlobalCss} />
      <RsvpDialog />
      <MainLayer>
        <IntroFeature />
        <FeatureComponent>We're Getting Married</FeatureComponent>
        <LocationFeature />

        <FeatureComponent>456</FeatureComponent>
        <FeatureComponent>456</FeatureComponent>
        <FeatureComponent>456</FeatureComponent>
        <FeatureComponent>456</FeatureComponent>
      </MainLayer>
    </>
  );
}

export default App;
