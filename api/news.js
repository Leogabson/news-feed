export default async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { category, query, pageSize = 10 } = req.query;
  const API_KEY = process.env.VITE_NEWS_API_KEY;

  if (!API_KEY) {
    return res.status(500).json({ error: "API key not configured" });
  }

  try {
    const params = new URLSearchParams({
      apikey: API_KEY,
      lang: "en",
      max: pageSize,
      country: "us",
    });

    // Determine endpoint and add category/query
    let endpoint = "top-headlines";

    if (query) {
      endpoint = "search";
      params.append("q", query);
    } else if (category) {
      const topicMap = {
        "breaking-news": "breaking-news",
        world: "world",
        nation: "nation",
        business: "business",
        technology: "technology",
        entertainment: "entertainment",
        sports: "sports",
        science: "science",
        health: "health",
      };
      params.append("topic", topicMap[category] || "breaking-news");
    }

    const response = await fetch(
      `https://gnews.io/api/v4/${endpoint}?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }

    const data = await response.json();

    return res.status(200).json({
      articles: data.articles || [],
      totalResults: data.totalArticles || 0,
      status: "ok",
    });
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({
      error: "Failed to fetch news",
      message: error.message,
    });
  }
}
