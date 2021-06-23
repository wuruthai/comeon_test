import axios from "axios";

const mockService = axios.create({
  baseURL: "http://localhost:3001",
});

export default mockService;
