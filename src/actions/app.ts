import _ from 'lodash'
import {
  APP_FETCHBLOCKCHAINLIST_SUCCEED,
  APP_FETCHTAGLIST_SUCCEED, APP_FETCHUSER_FAIL, APP_FETCHUSER_LOAD,
  APP_FETCHUSER_SUCCEED, APP_LOGIN_SET,
  APP_LOGOUT_SET, APP_SETCOOKIESACCEPTED_SET
} from 'constants/actionTypes'
import api from 'utils/apiCore'

export const setCookiesAccepted = () => (dispatch: any) => {
  dispatch({ type: APP_SETCOOKIESACCEPTED_SET })
}

export const userSignIn = (values: any) => (dispatch: any) => {
  const {
    rememberMe,
    accessToken,
  } = values
  // only save the access token to local storage when rememberMe is true
  // rememberMe &&
  localStorage.setItem('accessToken', accessToken)
  dispatch({
    type: APP_LOGIN_SET,
    accessToken,
  })
}

export const userSignOut = () => (dispatch: any) => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('isEVMWalletConnected')
  dispatch({ type: APP_LOGOUT_SET })
}

export const fetchUser = (params: any) => async (dispatch: any) => {
  dispatch({ type: APP_FETCHUSER_LOAD })
  try {
    const { accessToken } = params
    const [
      userResult,
      // userFollowerResult,
      userFollowingResult,
      userProjectUpvoteResult,
      userProjectPostUpvoteResult,
      userProjectPostDownvoteResult,
      userProjectPostCommentUpvoteResult,
      userProjectPostCommentDownvoteResult,
    ] = await Promise.all([
      api.get(dispatch, 'me', {}, accessToken),
      // api.get(dispatch, 'me/user_follower', {}, accessToken),
      api.get(dispatch, 'me/user_following', {}, accessToken),
      api.get(dispatch, 'me/project_upvote', {}, accessToken),
      api.get(dispatch, 'me/project_post_upvote', {}, accessToken),
      api.get(dispatch, 'me/project_post_downvote', {}, accessToken),
      api.get(dispatch, 'me/project_post_comment_upvote', {}, accessToken),
      api.get(dispatch, 'me/project_post_comment_downvote', {}, accessToken),
    ])
    // console.log('userProjectPostUpvoteResult', userProjectPostUpvoteResult)
    // console.log('userProjectPostDownvoteResult', userProjectPostDownvoteResult)
    // console.log('userProjectPostCommentUpvoteResult', userProjectPostCommentUpvoteResult)
    // console.log('userProjectPostCommentDownvoteResult', userProjectPostCommentDownvoteResult)
    // const {
    //   follower_username: userFollowerUsernames = [],
    // } = userFollowerResult
    const {
      following_username: userFollowingUsernames = [],
    } = userFollowingResult
    const {
      project_slug: userProjectUpvoteSlugs = [],
    } = userProjectUpvoteResult
    const {
      project_post_uuid: userProjectPostUpvoteUuids = [],
    } = userProjectPostUpvoteResult
    const {
      project_post_uuid: userProjectPostDownvoteUuids = [],
    } = userProjectPostDownvoteResult
    const {
      project_post_activity_uuid: userProjectPostCommentUpvoteUuids = [],
    } = userProjectPostCommentUpvoteResult
    const {
      project_post_activity_uuid: userProjectPostCommentDownvoteUuids = [],
    } = userProjectPostCommentDownvoteResult
    const user = userResult
    // const userFollowerUsernameMap = userFollowerUsernames.reduce((prev: any, current: any) => ({ ...prev, [current]: 1 }), {})
    const userFollowingUsernameMap = userFollowingUsernames.reduce((prev: any, current: any) => ({ ...prev, [current]: 1 }), {})
    const userProjectUpvoteSlugMap = userProjectUpvoteSlugs.reduce((prev: any, current: any) => ({ ...prev, [current]: 1 }), {})
    const userProjectPostUpvoteUuidMap = userProjectPostUpvoteUuids.reduce((prev: any, current: any) => ({ ...prev, [current]: 1 }), {})
    const userProjectPostDownvoteUuidMap = userProjectPostDownvoteUuids.reduce((prev: any, current: any) => ({ ...prev, [current]: 1 }), {})
    const userProjectPostCommentUpvoteUuidMap = userProjectPostCommentUpvoteUuids.reduce((prev: any, current: any) => ({ ...prev, [current]: 1 }), {})
    const userProjectPostCommentDownvoteUuidMap = userProjectPostCommentDownvoteUuids.reduce((prev: any, current: any) => ({ ...prev, [current]: 1 }), {})
    dispatch({
      type: APP_FETCHUSER_SUCCEED,
      user,
      // userFollowerUsernameMap,
      userFollowingUsernameMap,
      userProjectUpvoteSlugMap,
      userProjectPostUpvoteUuidMap,
      userProjectPostDownvoteUuidMap,
      userProjectPostCommentUpvoteUuidMap,
      userProjectPostCommentDownvoteUuidMap,
    })
  } catch (errors) {
    const errorCode = _.get(errors, '[0].code')
    if (errorCode === 401) {
      dispatch(userSignOut())
    }
    dispatch({
      type: APP_FETCHUSER_FAIL,
      fetchUserErrors: errors,
    })
  }
}

export const fetchBlockchainList = () => async (dispatch: any) => {
  try {
    const params = {
      $sort: { title: 1 },
      $offset: 0,
      $limit: 100000,
      enabled: 1,
    }
    const result = await api.get(dispatch, 'blockchain', params)
    const {
      data: items
    } = result
    await dispatch({
      type: APP_FETCHBLOCKCHAINLIST_SUCCEED,
      items,
    })
  } catch (errors) {
  }
}

export const fetchTagList = () => async (dispatch: any) => {
  try {
    const params = {
      $sort: { title: 1 },
      $offset: 0,
      $limit: 100000,
      enabled: 1,
    }
    const result = await api.get(dispatch, 'tag', params)
    const {
      data: items
    } = result
    await dispatch({
      type: APP_FETCHTAGLIST_SUCCEED,
      items,
    })
  } catch (errors) {
  }
}
