import axios from "axios";

const getAllSeries = () => {
  return axios
    .get("http://localhost:3310/api/programs")
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export { getAllSeries };
