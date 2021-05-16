import React, { useState } from "react";

import AppScreen from "./app/component/AppScreen";
import ImageInputList from "./app/component/ImageInputList";

export default function App() {
  const [imageUris, setImageUris] = useState();

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <AppScreen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </AppScreen>
  );
}
