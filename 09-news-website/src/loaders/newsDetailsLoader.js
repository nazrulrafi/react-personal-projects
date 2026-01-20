import {homeLoader} from "./homeLoader.js";

export async function newsDetailsLoader({params}){
        const allNewsData = await homeLoader();
        const index = parseInt(params.index);
        return allNewsData.allNews[index]
}