import { MdAccessTime } from "react-icons/md";
import {
  formatRelativeTime,
  truncateText,
  cleanTitle,
  getArticleImage,
} from "../../utils/helpers";

/**
 * News Card component
 * Displays individual news article with image, title, description, and metadata
 * Fully responsive for mobile and desktop
 */
const NewsCard = ({ article }) => {
  const { title, description, url, urlToImage, publishedAt, source, author } =
    article;

  const cleanedTitle = cleanTitle(title);
  const truncatedDescription = truncateText(description, 120);
  const articleImage = getArticleImage(urlToImage, "general");
  const timeAgo = formatRelativeTime(publishedAt);

  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <article
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      tabIndex={0}
      role="button"
      className="bg-white rounded-card overflow-hidden shadow-card hover:shadow-card-hover 
                 transition-all duration-300 cursor-pointer
                 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                 group h-full flex flex-col"
      aria-label={`Read article: ${cleanedTitle}`}
    >
      {/* Article Image */}
      <div className="relative w-full h-48 sm:h-52 md:h-56 overflow-hidden bg-gray-200">
        <img
          src={articleImage}
          alt={cleanedTitle}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            e.target.src = getArticleImage(null, "general");
          }}
        />
        {/* Source Badge */}
        {source?.name && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-xs sm:text-sm font-medium text-text-primary">
              {source.name}
            </span>
          </div>
        )}
      </div>

      {/* Article Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        {/* Title */}
        <h3
          className="text-base sm:text-lg font-bold text-text-primary mb-2 
                       line-clamp-2 group-hover:text-primary transition-colors"
        >
          {cleanedTitle}
        </h3>

        {/* Description */}
        {truncatedDescription && (
          <p className="text-sm sm:text-base text-text-secondary mb-4 line-clamp-3 flex-1">
            {truncatedDescription}
          </p>
        )}

        {/* Metadata Footer */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-text-light mt-auto pt-3 border-t border-gray-100">
          {/* Author */}
          {author && <span className="truncate max-w-[60%]">By {author}</span>}

          {/* Time */}
          <div className="flex items-center gap-1 ml-auto">
            <MdAccessTime className="w-4 h-4" />
            <span className="whitespace-nowrap">{timeAgo}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
