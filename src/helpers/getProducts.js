import axios from "axios";

const API_URL = "https://demo.tsifactur.cpe.pe/api/item";
const token = localStorage.getItem("mjVjhO5tf1JtZojEQDOGIB5wdcf7D5gM4Flt1K5Gd34crU4UUzkNxo3rSupq");

export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
