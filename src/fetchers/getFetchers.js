import axios from "axios";
import { getConfiguration } from "../config";

const BASE_URL = getConfiguration().apiUrl;

export const getEmployeeDetails = async () => {
  let url = `${BASE_URL}/employeeDetails`;
  const response = await axios.get(url);
  const data = await response.data;
  return data;
};
