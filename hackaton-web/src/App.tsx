import React, { useState } from 'react';
import FontSelector from './font-selector';

function App() {
  const [selectedFont, setSelectedFont] = useState('Arial');

  const handleFontChange = (newFont : string) => {
    setSelectedFont(newFont);
  };

  return (
    <div className="App">
      <FontSelector onSelectFont={handleFontChange} />
      <p style={{ fontFamily: selectedFont }}>This text uses the selected font.</p>

    </div>
  );
}

export default App;
