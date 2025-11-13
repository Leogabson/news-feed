import { MdError, MdRefresh } from "react-icons/md";

/**
 * Error message component with retry option
 * Fully responsive for mobile and desktop
 */
const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 sm:py-12">
      {/* Error Icon */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-full flex items-center justify-center mb-4">
        <MdError className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
      </div>

      {/* Error Message */}
      <h3 className="text-base sm:text-lg font-semibold text-text-primary mb-2 text-center">
        Oops! Something went wrong
      </h3>
      <p className="text-sm sm:text-base text-text-secondary text-center max-w-md mb-6 px-4">
        {message}
      </p>

      {/* Retry Button */}
      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 sm:px-6 sm:py-3 
                     rounded-lg font-medium hover:bg-primary-dark transition-all duration-200 
                     focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                     active:scale-95 text-sm sm:text-base"
          aria-label="Retry loading news"
        >
          <MdRefresh className="w-5 h-5" />
          <span>Try Again</span>
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
