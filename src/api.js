const wrapPromise = (promise) => {
  let status = 'pending';
  let result;
  let suspender = promise.then(
    r => {
      status = 'success';
      result = r;
    },
    e => {
      status = 'error';
      result = e;
    }
  );
  return {
    read() {
      if (status === 'success') {
        return result;
      } else if(status === 'error') {
        throw result;
      } else {
        throw suspender;
      }
    }
  };
};

const fetchCatFacts = () => {
  console.log("Fetch cat facts ...");
  return new Promise((resolve, reject) => {
    fetch("/facts")
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(() => reject('Something bad happened ...'));
  });
};

const fetchData = () => {
  let catFactsPromise = fetchCatFacts();
  return {
    catfacts: wrapPromise(catFactsPromise)
  };
};

export default fetchData;