import React from 'react';
import ReactSkinview3d from 'react-skinview3d';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>3D Minecraft Skin Viewer</h1>
      
      <p>Below is a 3D skin preview:</p>
      
      <ReactSkinview3d
        width={300}
        height={300}
        skinUrl="/textures/McMuffin123.png"
        autoRotate={true}
      />
    </div>
  );
}

export default App;
