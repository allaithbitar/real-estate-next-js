import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url: string) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "10b543814bmsh1135236b3c61f5ep1f8376jsn16d6ed87737e",
    },
  });
  console.log(data);

  return data;
};
