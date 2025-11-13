export const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
export const API_BASE_URL = import.meta.env.VITE_NEWS_API_BASE_URL;

export const CATEGORIES = [
  { id: "all", label: "All", value: "" },
  { id: "top-stories", label: "Top Stories", value: "general" },
  { id: "world", label: "World", value: "general" },
  { id: "politics", label: "Politics", value: "politics" },
  { id: "business", label: "Business", value: "business" },
  { id: "tech", label: "Tech", value: "technology" },
  { id: "sports", label: "Sports", value: "sports" },
  { id: "culture", label: "Culture", value: "entertainment" },
  { id: "science", label: "Science", value: "science" },
  { id: "health", label: "Health", value: "health" },
];

export const ENDPOINTS = {
  TOP_HEADLINES: "/top-headlines",
  EVERYTHING: "/everything",
};

export const DEFAULT_COUNTRY = "us";
export const DEFAULT_PAGE_SIZE = 20;
export const DEFAULT_LANGUAGE = "en";

export const ERROR_MESSAGES = {
  FETCH_FAILED: "Failed to fetch news articles. Please try again.",
  NO_RESULTS: "No articles found. Try adjusting your search or filters.",
  API_KEY_MISSING: "API key is missing. Please check your configuration.",
  NETWORK_ERROR: "Network error. Please check your internet connection.",
};

export const LOADING_TEXT = "Loading latest news...";

export const SEARCH_PLACEHOLDER = "Search for news, topics...";
