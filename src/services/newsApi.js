import axios from "axios";
import { API_KEY, API_BASE_URL, DEFAULT_LANGUAGE } from "../utils/constants";

// Create axios instance with base configuration
const newsApiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor for error handling
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

/**
 * Fetch top headlines from GNews API
 * @param {Object} params - Query parameters
 * @param {string} params.category - News category
 * @param {number} params.pageSize - Number of articles (max 10 for free plan)
 * @returns {Promise<Object>} News articles data
 */
export const getTopHeadlines = async ({
  category = "",
  pageSize = 10,
} = {}) => {
  try {
    const params = {
      apikey: API_KEY,
      lang: DEFAULT_LANGUAGE,
      max: pageSize,
      country: "us",
    };

    // GNews uses 'topic' instead of 'category'
    if (category) {
      const topicMap = {
        general: "breaking-news",
        business: "business",
        technology: "technology",
        entertainment: "entertainment",
        sports: "sports",
        science: "science",
        health: "health",
        politics: "nation",
      };
      params.topic = topicMap[category] || "breaking-news";
    }

    const response = await newsApiClient.get("/top-headlines", { params });

    return {
      articles: response.data.articles || [],
      totalResults: response.data.totalArticles || 0,
      status: "ok",
    };
  } catch (error) {
    throw error;
  }
};

/**
 * Search for news articles in GNews API
 * @param {Object} params - Query parameters
 * @param {string} params.query - Search query
 * @param {number} params.pageSize - Number of articles (max 10 for free plan)
 * @returns {Promise<Object>} News articles data
 */
export const searchNews = async ({ query, pageSize = 10 } = {}) => {
  try {
    if (!query || query.trim() === "") {
      return getTopHeadlines({ pageSize });
    }

    const params = {
      apikey: API_KEY,
      q: query,
      lang: DEFAULT_LANGUAGE,
      max: pageSize,
    };

    const response = await newsApiClient.get("/search", { params });

    return {
      articles: response.data.articles || [],
      totalResults: response.data.totalArticles || 0,
      status: "ok",
    };
  } catch (error) {
    throw error;
  }
};

/**
 * Get news by category with optional search
 * @param {Object} params - Query parameters
 * @param {string} params.category - News category
 * @param {string} params.searchQuery - Optional search query
 * @param {number} params.pageSize - Number of articles (max 10 for free plan)
 * @returns {Promise<Object>} News articles data
 */
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
