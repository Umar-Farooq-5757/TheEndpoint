import axios from "axios";

const getMethod = async (url,setResData) => {
  try {
    const response = await axios.get(url, {});
    console.log(response);
    setResData(response.data);
  } catch (err) {
    console.error(err);
  }
};
export default getMethod;
