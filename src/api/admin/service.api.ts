import axios from "axios";

export const getServiceList = async () => {
  return await axios.get("http://localhost:5000/api/v1/services");
};
