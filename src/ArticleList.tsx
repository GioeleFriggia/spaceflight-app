import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getArticles, Article } from "./api";
// import "./ArticleList.css"; // Importa il file di stili CSS per la lista degli articoli

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getArticles();
        if (Array.isArray(data)) {
          setArticles(data);
          setLoading(false);
        } else {
          console.error("Data received is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Spaceflight News</h2>
      <div className="row">
        {articles.length > 0 ? (
          articles.map((article) => (
            <div className="col-md-4" key={article.id}>
              <Link
                to={`/article/${article.id}`}
                className="text-decoration-none"
              >
                <div className="card mb-4">
                  <img
                    src={article.image_url} // Usa image_url per visualizzare le immagini
                    className="card-img-top"
                    alt={article.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.summary}</p>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-primary">Leggi Articolo</button>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div>No articles found</div>
        )}
      </div>
    </div>
  );
};

export default ArticleList;
