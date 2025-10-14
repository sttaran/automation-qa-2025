function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: 'Product A' };
      console.log('Data fetched:', data);
      resolve(data);
    }, 1000);
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = {
        ...data,
        price: 29.99,
      };
      console.log(
        'Data processed:',
        processedData,
      );
      resolve(processedData);
    }, 800);
  });
}

function saveData(processedData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const savedResult = {
        status: 'success',
        data: processedData,
      };
      console.log('Data saved:', savedResult);
      resolve(savedResult);
    }, 1200);
  });
}

// Promise chaining example
fetchData().then(processData).then(saveData);
