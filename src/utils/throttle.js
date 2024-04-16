const throttle = (fn, throttleTime) => {
  let start = -Infinity;
  let cachedResult;

  return function returnedFunc() {
    const end = Date.now();

    if (end - start >= throttleTime) {
      start = end;
      cachedResult = fn.apply(this, arguments); // eslint-disable-line prefer-rest-params
    }

    return cachedResult;
  };
};

export default throttle;
