import Link from "next/link";

function NewsPage() {
  return (
    <div>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/first-news">First News item</Link>
        </li>
        <li>
          <Link href="/news/second-news">Second News item</Link>
        </li>
        <li>
          <Link href="/news/third-news">Third News item</Link>
        </li>
      </ul>
    </div>
  );
}

export default NewsPage;
