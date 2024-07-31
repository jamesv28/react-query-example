import axios from "axios";

const fetchRequest = axios.create({
  baseURL: "http://localhost:5001/api/tasks",
});

export default fetchRequest;
