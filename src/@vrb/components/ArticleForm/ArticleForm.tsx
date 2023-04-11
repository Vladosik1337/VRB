import './ArticleForm.scss';
import { useArticleForm } from './useArticleForm';

const ArticleForm = () => {
  const {
    handleSubmit,
    image,
    setImage,
    author,
    setAuthor,
    description,
    setDescription,
    title,
    setTitle,
  } = useArticleForm();

  return (
    <div className="article-form">
      <form onSubmit={handleSubmit} className="article-form__form">
        <label className="article-form__label">
          Image URL:
          <input
            className="article-form__input"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </label>
        <label className="article-form__label">
          Author:
          <input
            type="text"
            value={author}
            className="article-form__input"
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </label>
        <label className="article-form__label">
          Description:
          <input
            type="text"
            value={description}
            className="article-form__input"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label className="article-form__label">
          Title:
          <input
            type="text"
            value={title}
            className="article-form__input"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="article-form__button">
          Add Article
        </button>
      </form>
    </div>
  );
};

export default ArticleForm;
