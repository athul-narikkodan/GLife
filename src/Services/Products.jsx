
import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

export const Products = {
  async getProductsByCategory() {
    try {
      const response = await axios.get(`${API_URL}/products/categories`);
      return response;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },
  async getProductsList() {
    try {
      const response = await axios.get(`${API_URL}/products`);
      return response;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },
};
