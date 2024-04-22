// must be named default.js when working with parallel routes
// if page.js and default.js contain the same info/data/code, then just use default.js

import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/lib/news";

function LatestNewsPage() {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>Latest News </h2>
      <NewsList news={latestNews} />
    </>
  );
}

export default LatestNewsPage;
