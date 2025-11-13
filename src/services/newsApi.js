import axios from "axios";
import {
  API_KEY,
  API_BASE_URL,
  ENDPOINTS,
  DEFAULT_COUNTRY,
  DEFAULT_PAGE_SIZE,
  DEFAULT_LANGUAGE,
} from "../utils/constants";

const newsApiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add API key
newsApiClient.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      apiKey: API_KEY,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
newsApiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with error
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
 * Fetch top headlines
 * @param {Object} params - Query parameters
 * @param {string} params.country - Country code (default: 'us')
 * @param {string} params.category - News category
 * @param {number} params.pageSize - Number of articles
 * @param {number} params.page - Page number
 * @returns {Promise<Object>} News articles data
 */
export const getTopHeadlines = async ({
  country = DEFAULT_COUNTRY,
  category = "",
  pageSize = DEFAULT_PAGE_SIZE,
  page = 1,
} = {}) => {
  try {
    const params = {
      country,
      pageSize,
      page,
    };

    // Only add category if it's not empty
    if (category) {
      params.category = category;
    }

    const response = await newsApiClient.get(ENDPOINTS.TOP_HEADLINES, {
      params,
    });

    return {
      articles: response.data.articles || [],
      totalResults: response.data.totalResults || 0,
      status: response.data.status,
    };
  } catch (error) {
    throw error;
  }
};

/**
 * Search for news articles
 * @param {Object} params - Query parameters
 * @param {string} params.query - Search query
 * @param {string} params.category - News category
 * @param {number} params.pageSize - Number of articles
 * @param {number} params.page - Page number
 * @param {string} params.language - Language code
 * @returns {Promise<Object>} News articles data
 */
export const searchNews = async ({
  query,
  category = "",
  pageSize = DEFAULT_PAGE_SIZE,
  page = 1,
  language = DEFAULT_LANGUAGE,
} = {}) => {
  try {
    if (!query || query.trim() === "") {
      // If no query, return top headlines
      return getTopHeadlines({ category, pageSize, page });
    }

    const params = {
      q: query,
      pageSize,
      page,
      language,
      sortBy: "publishedAt",
    };

    const response = await newsApiClient.get(ENDPOINTS.EVERYTHING, { params });

    return {
      articles: response.data.articles || [],
      totalResults: response.data.totalResults || 0,
      status: response.data.status,
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
 * @param {number} params.pageSize - Number of articles
 * @param {number} params.page - Page number
 * @returns {Promise<Object>} News articles data
 */
export const getNewsByCategory = async ({
  category = "",
  searchQuery = "",
  pageSize = DEFAULT_PAGE_SIZE,
  page = 1,
} = {}) => {
  try {
    if (searchQuery && searchQuery.trim() !== "") {
      // If there's a search query, use search endpoint
      return searchNews({ query: searchQuery, category, pageSize, page });
    } else {
      // Otherwise use top headlines
      return getTopHeadlines({ category, pageSize, page });
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
