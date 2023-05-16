// server.js
const testing = false;
let obj = {
  uri: "http://13.53.137.186:8080",
};

if (testing) { // For local development
  obj = {
    uri: "http://localhost:8080",
  };
}

export default obj;
