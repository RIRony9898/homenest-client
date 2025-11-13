import { ArrowRight, Calendar, Newspaper, User } from "lucide-react";
import { useEffect, useState } from "react";
import Container from "../Components/Container";
import useTitle from "../Hooks/useTitle";

const News = () => {
  useTitle("News");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/news.json")
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading news:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-12 flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto"></div>
          <p className="mt-4 text-gray-300">Loading news...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Latest Real Estate News
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Stay informed with the latest trends, market insights, and real
            estate news from around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <article
              key={article.id}
              className="bg-gradient-to-br from-slate-800 to-slate-900 shadow-xl rounded-lg overflow-hidden border border-purple-700 hover:border-purple-500 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {article.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors duration-200 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-purple-500/25 flex items-center justify-center space-x-2 group-hover:bg-purple-700">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {news.length === 0 && (
          <div className="text-center text-gray-400 mt-12">
            <Newspaper className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-xl">No news articles available at the moment.</p>
            <p className="mt-2">Check back soon for the latest updates!</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default News;
