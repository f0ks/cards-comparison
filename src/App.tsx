import React from 'react';
import Card from './components/card';
import {schemaMotorbikes} from './mocks/cardSchemaMotorbikes';
import {motorbikesData} from './mocks/motorbikesData';

function App() {
  return (
    <div className="App">
      <h1>Sample cards:</h1>
      {motorbikesData.map((card, i) =>
        <Card key={i} data={card} schema={schemaMotorbikes}/>
      )}
    </div>
  );
}

export default App;
