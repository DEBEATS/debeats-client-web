import qs from 'qs'
import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'
import Cookies from 'js-cookie'

const { publicRuntimeConfig } = getConfig()
const { CORE_API_URL } = publicRuntimeConfig

// import { logout } from '../actions/app'

const uploadImagePath = 'asset_image'

interface ApiParams {
  url: string,
}

class Api {

  apiUrl?: string

  constructor(params: ApiParams) {
    this.apiUrl = `${params.url}`
  }

  async get(dispatch: any, endpoint: string, query = {}, accessToken?: string) {
    return this.call(dispatch, endpoint, query, 'GET', accessToken)
  }

  async post(dispatch: any, endpoint: string, data: any, accessToken?: string) {
    return this.call(dispatch, endpoint, data, 'POST', accessToken)
  }

  async patch(dispatch: any, endpoint: string, data: any, accessToken?: string) {
    return this.call(dispatch, endpoint, data, 'PATCH', accessToken)
  }

  async delete(dispatch: any, endpoint: string, data: any, accessToken?: string) {
    return this.call(dispatch, endpoint, data, 'DELETE', accessToken)
  }

  async uploadImage(dispatch: any, data: any, accessToken?: string) {
    return this.call(dispatch, uploadImagePath, data, 'POST', accessToken)
  }

  async call(dispatch: any, endpoint: string, data: any, method: string, accessToken?: string) {
    const param: any = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
    const cookieLangauge = Cookies.get('language')
    if (cookieLangauge) {
      param.headers['Accept-Language'] = cookieLangauge
    }
    if (accessToken) {
      param.headers.Authorization = `Bearer ${accessToken}`
    }
    if (method !== 'GET') {
      if (endpoint === uploadImagePath) {
        const formData = new FormData()
        formData.append('file', data, data.name)
        delete param.headers['Content-Type']
        param.body = formData
      } else {
        param.body = JSON.stringify(data)
      }
    }
    const url = method === 'GET' ? `${endpoint}?${qs.stringify(data)}` : endpoint
    if (process.env.NODE_ENV === 'development') {
      console.log('API', method, endpoint, data, accessToken) // eslint-disable-line
    }
    try {
      let res = null
      if (url.indexOf('https://') !== -1 || url.indexOf('http://') !== -1) {
        res = await fetch(`${url}`, param)
      } else {
        res = await fetch(`${this.apiUrl}/${url}`, param)
      }
      const json = await res.json()
      if (res.status >= 200 && res.status <= 300) {
        return Promise.resolve(json)
      }
      // if (dispatch && res.status === 401) {
      //   dispatch(logout())
      // }
      return Promise.reject(json.errors)
    } catch (error: any) {
      const errors = [{ message: error.message || 'Please try again later.' }]
      return Promise.reject(errors)
    }
  }
}

export default new Api({ url: CORE_API_URL })
