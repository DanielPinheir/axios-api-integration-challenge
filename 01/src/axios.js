const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: "https://companyenrichment.abstractapi.com/v1/",
  params: {
    api_key: "34655b15ff81401c970aa74fd4589bbe",
  },
});

module.exports = axiosInstance;
