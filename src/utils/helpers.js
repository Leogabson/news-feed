/**
 * Format date to readable string
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date (e.g., "Oct 26, 2023")
 */
export const formatDate = (dateString) => {
  if (!dateString) return "";

  const date = new Date(dateString);
  const options = { year: "numeric", month: "short", day: "numeric" };

  return date.toLocaleDateString("en-US", options);
};

/**
 * Format date to relative time
 * @param {string} dateString - ISO date string
 * @returns {string} Relative time (e.g., "2 hours ago")
 */
export const formatRelativeTime = (dateString) => {
  if (!dateString) return "";

  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const [unit, seconds] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / seconds);
    if (interval >= 1) {
      return `${interval} ${unit}${interval > 1 ? "s" : ""} ago`;
    }
  }

  return "Just now";
};

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text with ellipsis
 */
export const truncateText = (text, maxLength = 150) => {
  if (!text) return "";
  if (text.length <= maxLength) return text;

  return text.substring(0, maxLength).trim() + "...";
};

/**
 * Remove source name from article title
 * News API often appends " - Source Name" to titles
 * @param {string} title - Article title
 * @returns {string} Clean title
 */
export const cleanTitle = (title) => {
  if (!title) return "";

  // Remove source suffix (e.g., " - CNN", " - BBC News")
  const cleanedTitle = title.replace(/\s-\s[^-]+$/, "");

  return cleanedTitle;
};

/**
 * Get placeholder image if article image is missing
 * @param {string} category - Article category
 * @returns {string} Placeholder image URL
 */
export const getPlaceholderImage = (category = "general") => {
  const placeholders = {
    technology:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    business:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
    sports:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800",
    entertainment:
      "https://images.unsplash.com/photo-1574267432644-f61941d2b98d?w=800",
    health:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
    science:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800",
    general:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800",
  };

  return placeholders[category] || placeholders.general;
};

/**
 * Validate image URL
 * @param {string} url - Image URL
 * @returns {boolean} True if valid
 */
export const isValidImageUrl = (url) => {
  if (!url) return false;

  try {
    const urlObj = new URL(url);
    return urlObj.protocol === "http:" || urlObj.protocol === "https:";
  } catch {
    return false;
  }
};

/**
 * Get article image with fallback
 * @param {string} imageUrl - Original image URL
 * @param {string} category - Article category
 * @returns {string} Valid image URL
 */
export const getArticleImage = (imageUrl, category) => {
  if (isValidImageUrl(imageUrl)) {
    return imageUrl;
  }
  return getPlaceholderImage(category);
};

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, delay = 500) => {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};
