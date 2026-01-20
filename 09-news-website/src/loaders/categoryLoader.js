import {getAllNews} from "../utils/newsApi.js";

export async function categoryLoader({term}){
    const allNews = await getAllNews(term)
    const firstThree = allNews.slice(0,3)
    const restNews = allNews.slice(3)
    return {
        allNews: allNews,      // full array
        firstThree: firstThree, // first 3 articles
        restNews: restNews
    };
}