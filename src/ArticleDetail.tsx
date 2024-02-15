import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticle, Article } from "./api";

interface ArticleDetailProps {
  id: string;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ id }) => {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await getArticle(id);
        setArticle(data);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };
    fetchArticle();
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div>
      <h2>{article.title}</h2>
      <img
        src={article.image_url}
        className="card-img-top"
        alt={article.title}
      />
      <p>{article.summary}</p>
      {/* <p>{article.content}</p>{" "} */}
      {/* Assicurati che la proprietà content esista nell'oggetto Article */}
    </div>
  );
};

export default ArticleDetail;
