function NewsDetailPage({ params }) {
  const newsId = params.id;
  return (
    <div>
      <h1>News detail page</h1>
      <p>news id: {newsId}</p>
    </div>
  );
}

export default NewsDetailPage;
