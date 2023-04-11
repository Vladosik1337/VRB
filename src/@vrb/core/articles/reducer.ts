import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from '../../types/Article';

export interface ArticlesState {
  articles: Article[];
}

const initialState: ArticlesState = {
  articles: [
    {
      id: 'angnskdjg3123',
      image:
        'https://cdn.cnn.com/cnnnext/dam/assets/200213150327-pentagon-building-aerial-file-large-tease.jpg',
      author: 'Alex Marquardt',
      description:
        'The Biden administration is scrambling to assess and contain the fallout from a major leak of classified Pentagon documents that has rattled US officials, members of Congress and key allies in recent days. The Justice Department is investigating how the trove of highly sensitive documents, which include details about how the US spies on friends and foes as well as intelligence on the war in Ukraine, ended up on social media sites.',
      title:
        'Biden administration scrambling to contain fallout from leak of classified Pentagon documents that has rattled US officials and key allies',
      pinned: false,
    },
    {
      id: 'asdkmn3k12312x',
      image:
        'https://cdn.cnn.com/cnnnext/dam/assets/230410123607-02-china-taiwan-drills-medium-tease.jpg',
      author: 'Brad Lendon',
      description:
        'Taiwanese are rushing to buy patches being worn by their air force pilots that depict a Formosan black bear punching Winnie the Pooh – representing China’s leader Xi Jinping – as a defiant symbol of the island’s resistance to Chinese military exercises.',
      title:
        'A punch in the face for Xi caricature: Taiwan air force badge goes viral',
      pinned: false,
    },
    {
      id: 'dashbdasjkh1231231cads',
      image:
        'https://cdn.cnn.com/cnnnext/dam/assets/211116155603-jassasiya-1-large-tease.jpg',
      author: 'Dimitris Sideridis',
      description:
        'Some shoot out of the soft rock like reptiles bathing in the sun. Others are mysterious depressions resembling an ancient board game played all over the world. And a few are straight-up puzzling.',
      title: 'The mysterious symbols found in the desert',
      pinned: false,
    },
    {
      id: 'aasdasd123123sda',
      image:
        'https://cdn.cnn.com/cnnnext/dam/assets/230410072321-02-captagon-syria-file-113021-medium-tease.jpg',
      author: 'Celine Alkhaldi',
      description:
        'Abu Dhabi, UAE CNN — A highly addictive drug that became Syria’s economic lifeline over a decade of isolation may now be serving as a bargaining chip as it tries to normalize ties with neighboring states, analysts say.',
      title:
        'A little-known drug brought billions to Syria`s coffers. Now it`s a bargaining chip',
      pinned: false,
    },
  ],
};

export const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addArticle: (state, action: PayloadAction<Article>) => {
      state.articles = [...state.articles, action.payload];
    },
    removeArticle: (state, action: PayloadAction<string>) => {
      state.articles = state.articles.filter(
        (article) => article.id !== action.payload
      );
    },
    pinArticle: (state, action: PayloadAction<string>) => {
      const articleToPin = state.articles.find(
        (article) => article.id === action.payload
      );

      if (articleToPin) {
        articleToPin.pinned = true;
        state.articles = [
          articleToPin,
          ...state.articles
            .filter((article) => article.id !== action.payload)
            .map((article) => ({ ...article, pinned: false })),
        ];
      }
    },
  },
});

export const { addArticle, removeArticle, pinArticle } = articleSlice.actions;
