import React, { useState } from 'react';
import AppPicker from './app/component/AppPicker';

import AppScreen from './app/component/AppScreen';
import AppTextInput from './app/component/AppTextInput';

const categories = [
  {label: "Furniture", value: 1},
  {label: "Clothing", value: 2},
  {label: "Cameras", value: 3},
  
]


export default function App() {
  const [category, setCategory] = useState();

  return (
    <AppScreen>
      <AppPicker selectedItem={category} onSelectItem={item => setCategory(item)} icon="apps" items={categories} placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email" />
    </AppScreen>
  ); 
}
