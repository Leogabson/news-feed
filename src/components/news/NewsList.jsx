import NewsCard from "./NewsCard";

const NewsList = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <section className="container-custom py-8 sm:py-10 md:py-12">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {articles.map((article, index) => (
          <NewsCard key={article.url || index} article={article} />
        ))}
      </div>
    </section>
  );
};

export default NewsList;
