import React, { useState } from 'react';

function FontSelector({ onSelectFont }) {
  const [selectedFont, setSelectedFont] = useState('Default Font');

  const handleFontChange = (event) => {
    const newFont = event.target.value;
    setSelectedFont(newFont);
    onSelectFont(newFont);
  };

  return (
    <div>
      <label>Sélectionner une police</label>
      <select value={selectedFont} onChange={handleFontChange}>
        <option value="Arial">Arial</option>
        <option value='Courier New'>Courier New</option>
        <option value="Times new roman">Times new roman</option>
        <option value="Verdana">Verdana</option>
      </select>
    </div>
    
  );
}

export default FontSelector;
