const instance = axios.create({
  baseURL: '',
  timeout: 10000
});

function get(url, params) {
  return new Promise((resolve, reject) => {
    instance.get(url, { params: params })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
}

function post(url, data) {
  return new Promise((resolve, reject) => {
    instance.post(url, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
}