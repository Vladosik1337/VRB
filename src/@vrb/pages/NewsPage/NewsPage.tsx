import { News } from '../../components/News/News';
import './NewsPage.scss';
import { useNewsPage } from './useNewsPage';

export const NewsPage = () => {
  const { searchTerm, setSearchTerm, isLoading, error, news, handleLoadMore } =
    useNewsPage();

  return (
    <main>
      <div className="news-page-container">
        <h1>News</h1>
        <input
          type="text"
          placeholder="Search"
          className="input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div className="news">
            {news.map((oneNew) => (
              <News
                key={oneNew.id}
                image={oneNew.image}
                title={oneNew.title}
                description={oneNew.description}
                author={oneNew.author}
              />
            ))}
          </div>
        )}
        <button onClick={handleLoadMore} className="news__btn">
          Load more
        </button>
      </div>
    </main>
  );
};
