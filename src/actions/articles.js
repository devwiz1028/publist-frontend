import axios from 'axios';

export const FETCH_ARTICLES_REQUEST = 'FETCH_ARTICLES_REQUEST';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR';

export const fetchArticles = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_ARTICLES_REQUEST });

    const { data } = await axios({
      method: 'POST',
      url: 'jobs.frontend',
      data: {
        query: 'tech',
      },
    });

    const { data: articles } = data;
    dispatch({
      type: FETCH_ARTICLES_SUCCESS,
      data: articles,
    });
  } catch (error) {
    const { data } = error.response;
    const { errors = {} } = data;
    const errorMessage = errors.authorization || 'Cannot fetch articles list';

    dispatch({
      type: FETCH_ARTICLES_ERROR,
      error: errorMessage,
    });
  }
};
