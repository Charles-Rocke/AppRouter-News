import { getNewsForYear } from "@/lib/news";

const { default: NewsList } = require("@/components/NewsList");

function FilteredNewsPage({ params }) {
  const newsYear = params.year;
  const news = getNewsForYear(newsYear);
  return <NewsList news={news} />;
}

export default FilteredNewsPage;
