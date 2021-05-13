import React from 'react';

import AppScreen from './app/component/AppScreen';
import AppTextInput from './app/component/AppTextInput';



export default function App() {
  
  return (
    <AppScreen>
      <AppTextInput placeholder="User Name" icon="email"/>
    </AppScreen>
  ); 
}
