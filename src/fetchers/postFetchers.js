import axios from "axios";
import { getConfiguration } from "../config";

const BASE_URL = getConfiguration().apiUrl;

export const postEmployeeDetails = async (empData) => {
  const url = `${BASE_URL}/employeeDetails`;
  const response = await axios.post(url, empData);
  const data = await response.data;
  return data;
};
