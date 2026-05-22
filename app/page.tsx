"use client";

import NewsCard from "./components/news/NewsCard";
import { useEffect, useState } from "react";

function Home() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);

  //Make api call to news api
  async function getNewsData() {
    //Set loading boolean to true so that we know to show loading text
    setLoading(true);

    //Make news api call
    const resp = await fetch(
      // "https://newsapi.org/v2/everything?q=bitcoin&apiKey=b738ed2669c54125aae96fba7c1107d5&pageSize=10",
      "/api/news",
    );
    const jsonData = await resp.json();
    setNewsData(jsonData.articles);

    //Set loading boolean to false so that we know to show news articles
    setLoading(false);
  }

  useEffect(() => {
    getNewsData();
  }, []);

  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          {newsData.map((newsData: any, index: number) => (
            <a target="_blank" href={newsData.url} key={index}>
              <NewsCard
                title={newsData.title}
                description={newsData.description}
                imageUrl={newsData.urlToImage}
                source={newsData.source.name}
                publishedAt={newsData.publishedAt}
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
