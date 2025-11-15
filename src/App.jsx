import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/news/HeroSection";
import CategoryFilter from "./components/news/CategoryFilter";
import SearchBar from "./components/common/SearchBar";
import NewsList from "./components/news/NewsList";
import Loader from "./components/common/Loader";
import ErrorMessage from "./components/common/ErrorMessage";
import useNews from "./hooks/useNews";
import useDebounce from "./hooks/useDebounce";
import "./App.css";

function App() {
  const [activeCategory, setActiveCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const { articles, loading, error, retry } = useNews(
    activeCategory,
    debouncedSearchQuery
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSearchQuery(""); // Clear search when changing category
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setActiveCategory(""); // Clear category when searching
  };

  // Get featured article (first article)
  const featuredArticle = articles.length > 0 ? articles[0] : null;
  const remainingArticles = articles.slice(1);

  return (
    <div className="min-h-screen flex flex-col bg-background-gray dark:bg-background-dark">
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {!loading && !error && featuredArticle && !searchQuery && (
          <HeroSection article={featuredArticle} />
        )}

        <div className="container-custom py-6 sm:py-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        {loading && <Loader />}

        {error && !loading && <ErrorMessage message={error} onRetry={retry} />}

        {/* News Articles Grid */}
        {!loading && !error && (
          <>
            {searchQuery ? (
              // Show all articles when searching
              <NewsList articles={articles} />
            ) : (
              // Show remaining articles (excluding hero) when not searching
              <NewsList articles={remainingArticles} />
            )}
          </>
        )}

        {/* No Results Message */}
        {!loading && !error && articles.length === 0 && (
          <div className="container-custom py-16 text-center">
            <p className="text-lg text-text-secondary">
              No articles found. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
