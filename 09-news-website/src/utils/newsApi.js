const API_KEY=import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2"


export async function getAllNews(category){
    const cat = category || "technology"
    const url = `${BASE_URL}/everything?q=${cat}&apiKey=${API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error("Failed to fetch news");
    }
    const data = await res.json();
    return data.articles;
}