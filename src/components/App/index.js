import React, { Suspense } from 'react';
import CatFacts from '../CatFacts';
import Api from '../../api';

const App = () => {
  const resource = Api();
  return (
    <React.StrictMode>
      <div>This will be a Suspense example!</div>
      <div>
        <Suspense fallback={<h1>Loading stuff ...</h1>}>
          <CatFacts resource={resource} />
        </Suspense>
      </div>
    </React.StrictMode>
  );
};

export default App;
