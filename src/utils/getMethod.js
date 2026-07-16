import axios from "axios";

const getMethod = async (url, setResData, token, headersObj) => {
  const config = {
    headers: { ...headersObj },
  };

  if (token && token.trim() !== "") {
    config.headers.Authorization = `Bearer ${token}`;
  }
  try {
    const response = await axios.get(url, config);
    setResData(response.data);
  } catch (err) {
    setResData({
      message: "Not Found",
      status: 404,
    });
  }
};
export default getMethod;
