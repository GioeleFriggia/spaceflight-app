export interface Article {
  id: string;
  title: string;
  publishedAt: string;
  imageUrl: string;
  summary: string;
}

export async function getArticles(): Promise<Article[]> {
  const response = await fetch(
    "https://api.spaceflightnewsapi.net/v4/articles"
  );
  const data = await response.json();
  return data.results; // Return only the 'results' array
}

export async function getArticle(id: string): Promise<Article> {
  const response = await fetch(
    `https://api.spaceflightnewsapi.net/v4/articles/${id}`
  );
  const data = await response.json();
  return data;
}
