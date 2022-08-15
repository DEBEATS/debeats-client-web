import { createStore, applyMiddleware } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import { rootReducer } from './reducers'

const isServer = typeof window === 'undefined'

const getInitialState = () => ({
  app: {
    accessToken: isServer ? null : localStorage.getItem('accessToken'),
    userProjectUpvoteSlugMap: {},
    userFollowIdMap: {},
  },
})

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const reducer = (state: any = getInitialState(), action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    return nextState
  }
  return rootReducer(state, action)
}

const initStore = () => createStore(reducer, bindMiddleware([thunkMiddleware]))

const wrapper = createWrapper(initStore)

const storeWrapper = { wrapper }

export default storeWrapper
