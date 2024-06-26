import NewsList from "@/components/NewsList";
import { DUMMY_NEWS } from "@/dummy-news";

function NewsPage() {
  return (
    <div>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </div>
  );
}

export default NewsPage;
