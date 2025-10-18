import axios from "axios";

const getMethod = async (url, setResData) => {
  try {
    const response = await axios.get(url, {});
    setResData(response.data);
  } catch (err) {
    setResData({
      message: "Not Found",
      status: 404,
    });
  }
};
export default getMethod;
