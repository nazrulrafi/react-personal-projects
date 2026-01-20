import {getAllNews} from "../utils/newsApi.js";

export async function homeLoader(){
    const allNews = await getAllNews()
    const threeNews = allNews.slice(0,3)
    const recentNews = allNews.slice(3,9)
    return {
        allNews: allNews,      // full array
        threeNews: threeNews, // first 3 articles
        recentNews: recentNews
    };
}