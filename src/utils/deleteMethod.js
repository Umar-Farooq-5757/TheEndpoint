import axios from "axios";
import toast from "react-hot-toast";

const deleteMethod = async (url, setResData) => {
  try {
    const response = await axios.delete(url);

    setResData(response.data);
    toast.success("Resource deleted successfully!");
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      setResData({
        message:
          err.response.data.message ||
          err.response.statusText ||
          "Deletion failed.",
        status: err.response.status,
      });
      toast.error(`Deletion failed with status: ${err.response.status}`);
    } else if (axios.isAxiosError(err) && err.request) {
      setResData({
        message:
          "Network Error or Server Unreachable (Request sent, no response received)",
        status: "N/A",
      });
      toast.error("Network Error or Server Unreachable");
    } else {
      setResData({
        message: "An unexpected error occurred during deletion",
        status: "N/A",
      });
      toast.error("An unexpected error occurred");
    }
  }
};

export default deleteMethod;
