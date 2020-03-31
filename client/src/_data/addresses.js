const axios = require("axios");

module.exports = async function() {
  try {
    const response = await axios.get('http://localhost:8080/api/addresses')
    return response.data;
  } catch (error) {
    console.error(error.message);
  }

};
