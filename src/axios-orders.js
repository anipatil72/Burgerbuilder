import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://react-my-burger-20a6a-default-rtdb.asia-southeast1.firebasedatabase.app",
});

export default instance;
