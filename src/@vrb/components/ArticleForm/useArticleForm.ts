import { useState } from 'react';
import { Article } from '../../types/Article';
import { useDispatch } from 'react-redux';
import { addArticle } from '../../core/articles/reducer';

type ArticleFormState = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  author: string;
  setAuthor: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
};

export const useArticleForm = (): ArticleFormState => {
  const [image, setImage] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newArticle: Article = {
      id: Date.now().toString(),
      image,
      author,
      description,
      title,
      pinned: false,
    };

    dispatch(addArticle(newArticle));

    setImage('');
    setAuthor('');
    setDescription('');
    setTitle('');
  };
  return {
    handleSubmit,
    image,
    setImage,
    author,
    setAuthor,
    description,
    setDescription,
    title,
    setTitle,
  };
};
