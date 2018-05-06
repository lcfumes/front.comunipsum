export const TOGGLE_RAND = 'phrases/TOGGLE_RAND'
export const INCREMENT = 'phrases/INCREMENT'
export const DECREMENT = 'phrases/DECREMENT'
export const MORE_PHRASES = 'phrases/MORE_PHRASES'
export const LESS_PHRASES = 'phrases/LESS_PHRASES'

const initialState = {
  rand: false,
  total: 0,
  phrases: []
}

export default (state = initialState, action) => {
  const phrases = state.phrases;
  switch (action.type) {
    case TOGGLE_RAND:
      return {
        ...state,
        rand: !state.rand
      }
    case INCREMENT:
      return {
        ...state,
        total: state.total + 1
      }

    case DECREMENT:
      return {
        ...state,
        total: (state.total === 0) ? 0 : state.total - 1
      }

    case MORE_PHRASES:
      phrases.push(action.result[0].phrase)
      return {
        ...state,
        phrases
      }

    case LESS_PHRASES:
      phrases.pop()
      return {
        ...state,
        phrases
      }

    default:
      return state
  }
}

export const increment = () => {
  return (dispatch, getState) => {
    fetchPhrases(getState().phrases.total, dispatch);
  }
}

export const decrement = () => {
  return (dispatch, getState) => {
    dispatch({
      type: DECREMENT
    })
    dispatch({
      type: LESS_PHRASES
    })
  }
}

export const toggleRand = () => {
  return dispatch => {
    dispatch({
      type: TOGGLE_RAND
    })
  }
}

export const fetchPhrases = (total, dispatch) => {
  fetch(`http://api.comunipsum.com.br/phrases/rand/1`)
  .then(res => res.json())
  .then(
    result => {
      dispatch({
        type: MORE_PHRASES,
        result: result._embedded
      })
      dispatch({
        type: INCREMENT
      })
      return result;
    }
  )
}