import axios from "axios";
import toast from "react-hot-toast";

const putMethod = async (url, data, setResData) => {
  try {
    const response = await axios.put(url, data);
    setResData(response.data);
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      setResData({
        message: err.response.data.message || err.response.statusText,
        status: err.response.status,
      });
      toast.error(`Request failed with status: ${err.response.status}`);
    } else if (axios.isAxiosError(err) && err.request) {
      setResData({
        message: "Network Error or Server Unreachable",
        status: "N/A",
      });
      toast.error("Network Error or Server Unreachable");
    } else {
      setResData({
        message: "An unexpected error occurred",
        status: "N/A",
      });
      toast.error("An unexpected error occurred");
    }
  }
};

export default putMethod;
