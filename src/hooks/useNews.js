import { useState, useEffect, useCallback } from "react";
import { getNewsByCategory } from "../services/newsApi";
import { ERROR_MESSAGES } from "../utils/constants";

/**
 * Custom hook for fetching and managing news data
 * @param {string} category - News category to fetch
 * @param {string} searchQuery - Search query string
 * @returns {Object} News data, loading state, and error
 */
const useNews = (category = "", searchQuery = "") => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(0);

  const fetchNews = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getNewsByCategory({
        category,
        searchQuery,
        pageSize: 10,
        page: 1,
      });

      setArticles(data.articles);
      setTotalResults(data.totalResults);

      // If no results found
      if (data.articles.length === 0) {
        setError(ERROR_MESSAGES.NO_RESULTS);
      }
    } catch (err) {
      console.error("Error fetching news:", err);
      setError(err.message || ERROR_MESSAGES.FETCH_FAILED);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  }, [category, searchQuery]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  // Retry function for error recovery
  const retry = useCallback(() => {
    fetchNews();
  }, [fetchNews]);

  return {
    articles,
    loading,
    error,
    totalResults,
    retry,
  };
};

export default useNews;
