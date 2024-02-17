import axios from "axios";

export const searchImages = async (term) => {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID nMF_h8XCl7wgydfp0oUZ4ERWs5pve3lavmHhROVtl8M",
    },
    params: {
      query: term,
    },
  });

  return res.data.results;
};
