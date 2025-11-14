import {
  formatRelativeTime,
  cleanTitle,
  getArticleImage,
} from "../../utils/helpers";

/**
 * Hero Section - Featured article display
 * Large showcase for top news story
 */
const HeroSection = ({ article }) => {
  if (!article) return null;

  const { title, description, url, urlToImage, publishedAt, source } = article;
  const cleanedTitle = cleanTitle(title);
  const articleImage = getArticleImage(urlToImage, "general");
  const timeAgo = formatRelativeTime(publishedAt);

  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden group cursor-pointer"
      onClick={handleClick}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={articleImage}
          alt={cleanedTitle}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-end">
        <div className="container-custom pb-8 sm:pb-12 lg:pb-16">
          {/* Source Badge */}
          {source?.name && (
            <div className="inline-block bg-primary text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              {source.name}
            </div>
          )}

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 line-clamp-2 max-w-4xl">
            Breaking: {cleanedTitle}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-base sm:text-lg text-white/90 mb-4 line-clamp-2 max-w-3xl">
              {description}
            </p>
          )}

          {/* Metadata */}
          <div className="flex items-center gap-4 text-sm text-white/80">
            <span>{timeAgo}</span>
            <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
