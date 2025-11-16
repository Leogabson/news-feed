import axios from "axios";

// Use Vercel serverless function instead of direct API calls
const API_BASE = "/api/news";

const newsApiClient = axios.create({
  baseURL: API_BASE,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

newsApiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 401:
          throw new Error("Invalid API key. Please check your configuration.");
        case 429:
          throw new Error("Too many requests. Please try again later.");
        case 500:
          throw new Error("Server error. Please try again later.");
        default:
          throw new Error(
            data.message || "An error occurred while fetching news."
          );
      }
    } else if (error.request) {
      throw new Error("Network error. Please check your internet connection.");
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
);

export const getTopHeadlines = async ({
  category = "",
  pageSize = 10,
} = {}) => {
  try {
    const params = { pageSize };
    if (category) params.category = category;

    const response = await newsApiClient.get("", { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchNews = async ({ query, pageSize = 10 } = {}) => {
  try {
    if (!query || query.trim() === "") {
      return getTopHeadlines({ pageSize });
    }

    const params = { query, pageSize };
    const response = await newsApiClient.get("", { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getNewsByCategory = async ({
  category = "",
  searchQuery = "",
  pageSize = 10,
} = {}) => {
  try {
    if (searchQuery && searchQuery.trim() !== "") {
      return searchNews({ query: searchQuery, pageSize });
    } else {
      return getTopHeadlines({ category, pageSize });
    }
  } catch (error) {
    throw error;
  }
};

export default {
  getTopHeadlines,
  searchNews,
  getNewsByCategory,
};
