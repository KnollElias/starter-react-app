// server.js
const testing = false;
let obj = {
  uri: "http://16.16.197.20:8080",
};

if (testing) { // For local development
  obj = {
    uri: "http://localhost:8080",
  };
}

export default obj;
