import { useState, useEffect } from "react";

/**
 * Custom hook for debouncing values
 * Delays updating the value until after the specified delay
 * Useful for search inputs to avoid excessive API calls
 *
 * @param {any} value - The value to debounce
 * @param {number} delay - Delay in milliseconds (default: 500ms)
 * @returns {any} Debounced value
 *
 * @example
 * const [searchTerm, setSearchTerm] = useState('');
 * const debouncedSearchTerm = useDebounce(searchTerm, 500);
 *
 * useEffect(() => {
 *   // This will only run 500ms after user stops typing
 *   fetchSearchResults(debouncedSearchTerm);
 * }, [debouncedSearchTerm]);
 */
const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set up a timer to update the debounced value after the delay
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function: cancel the timer if value changes before delay expires
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
