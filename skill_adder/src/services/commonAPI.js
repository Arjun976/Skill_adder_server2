import axios from "axios";

const commonAPI = async (httpMethod, url, reqBody) => {
  try {
    const reqConfig = {
      method: httpMethod,
      url,
      data: reqBody,
    };
    const response = await axios(reqConfig);
    return response;
  } catch (error) {
    console.error("❌ API Error:", error);
    throw error; // 👈 Throw instead of returning
  }
};

export default commonAPI;
