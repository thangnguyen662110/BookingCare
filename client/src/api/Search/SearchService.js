import { get } from "../../utils/request";

export const SearchService = async (q, type = "less") => {
  try {
    const res = await get("users/search", {
      params: {
        q,
        type,
      },
    });

    return res.data;
  } catch (e) {
    console.log(e);
  }
};
