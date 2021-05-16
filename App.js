import React, { useState } from 'react';

import AppScreen from './app/component/AppScreen';
import ImageInput from './app/component/ImageInput';


export default function App() {
  const [imageUri, setImageUri] = useState();
  return(
    <AppScreen>
      <ImageInput imageUri={imageUri} onChangeImage={uri => setImageUri(uri)}/>
    </AppScreen>
  );
}
