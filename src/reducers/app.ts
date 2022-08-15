import {
  APP_LOGIN_SET,
  APP_LOGOUT_SET,
  APP_FETCHUSER_LOAD,
  APP_FETCHUSER_SUCCEED,
  APP_FETCHUSER_FAIL,
} from 'constants/actionTypes'

const reducers = (state: any = {}, action: any) => {
  switch (action.type) {
    case APP_LOGIN_SET:
      return {
        ...state,
        accessToken: action.accessToken,
      }
    case APP_LOGOUT_SET:
      return {
        ...state,
        accessToken: undefined,
        user: undefined,
      }
    case APP_FETCHUSER_LOAD:
      return {
        ...state,
        isFetchUserLoading: true,
        fetchUserErrors: null,
      }
    case APP_FETCHUSER_SUCCEED: {
      const {
        user,
      } = action
      return {
        ...state,
        isFetchUserLoading: false,
        user: user,
      }
    }
    case APP_FETCHUSER_FAIL:
      return {
        ...state,
        isFetchUserLoading: false,
        user: null,
        fetchUserErrors: action.fetchUserErrors ? [].concat(action.fetchUserErrors) : null,
      }
    // case APP_SETROUTEBEFORESIGNIN_SET:
    //   return {
    //     ...state,
    //     routeBeforeSignIn: {
    //       route: action.route,
    //       params: action.params,
    //     },
    //   }
    // case APP_SETCOOKIESACCEPTED_SET:
    //   return {
    //     ...state,
    //     cookiesAccepted: true,
    //   }
    default:
      return state
  }
}

export default reducers
