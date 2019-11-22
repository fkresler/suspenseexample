import React, { Suspense } from 'react';

const CatFacts = ({ resource }) => {
  const catfacts = resource.catfacts.read();
  return (
    <Suspense fallback={<div>This will display some random cat facts! Hooray!</div>}>
      {
        catfacts.all.map((fact) => (
          <div key={fact._id}>{fact.text}</div>
        ))
      }
    </Suspense>
  );
};

export default CatFacts;