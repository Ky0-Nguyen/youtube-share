import { Dimensions, Platform } from 'react-native'

export const BaseURL = 'http://5be31487d53daf0013250efd.mockapi.io/API'
export const RouteKey = {
  Home: 'Home',
  Login: 'Login',
  Detail: 'Detail',
  Drawer: 'Drawer',
  Settings: 'Settings',
  HomeScreen: 'HomeScreen',
  MainTabbar: 'MainTabbar',
  PlayScreen: 'PlayScreen'
}
export const KeyStore = {
  AUTHEN_TOKEN: 'AUTHEN_TOKEN'
}

// Redux
export const actionsType = {
  // CHECK AUTHEN
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
  CANCEL_LOGIN: 'CANCEL_LOGIN',

  // REGISTER
  REGISTER: 'REGISTER',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAIL: 'REGISTER_FAIL',
  CANCEL_REGISTER: 'CANCEL_REGISTER',

  LOGOUT: 'LOGOUT',
  SET_TOKEN: 'SET_TOKEN',
  CHECK_AUTHEN: 'CHECK_AUTHEN',
  AUTHEN_SUCCESS: 'AUTHEN_SUCCESS',
  // CURRENCY
  SET_CURRENCY: 'SET_CURRENCY',
  // LANGUAGE
  SET_LANGUGAE: 'SET_LANGUGAE',
  // CLIENT
  FETCH_CLIENT: 'FETCH_CLIENT',
  FETCH_CLIENT_FAIL: 'FETCH_CLIENT_FAIL',
  FETCH_CLIENT_SUCCESS: 'FETCH_CLIENT_SUCCESS',
  UPDATE_CLIENT_SUCCESS: 'UPDATE_CLIENT_SUCCESS',
  CANCEL_FETCHING_CLIENT: 'CANCEL_FETCHING_CLIENT',
  // Loading
  SHOW_LOADING_ICON: 'SHOW_LOADING_ICON',
  HIDE_LOADING_ICON: 'HIDE_LOADING_ICON',
  // NAVIGATION
  PUSH: 'push',
  POP: 'pop',
  POP_TO_TOP: 'popToTop',
  RESET_TO_ROUTE: 'resetToRoute',
  RESET: 'reset',
  CLEAR: 'clear'
}
export const initState = {
  currency: 'VND',
  language: 'vi',
  users: [],
  places: [],
  authenStateInit: {
    id: '',
    userName: '',
    passWord: '',
    token: '',
    displayName: '',
    Avatar: null
  }
}
/**
 * TIME_OUT: 30s
 */
export const TIME_OUT = 30000
/**
 * tlError
 */
export const ttError = 'Lỗi'
/**
 * ttInfor
 */
export const ttInfor = 'Thông báo'
/**
 * strMessageTimeout
 */
export const strMessageTimeout = 'Không thể kết nối server!'
/**
 * statusCode
 */
export const statusCode = {
  CODE_200: 200, // ok
  CODE_201: 201, // ok
  CODE_404: 404, // Not found
  CODE_500: 500 // Server error
}

export function isIphoneX () {
  let dimen = Dimensions.get('window')
  return (
    Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        (dimen.height === 812 || dimen.width === 812)
  )
}

export function ifIphoneX (iphoneXStyle, regularStyle) {
  if (isIphoneX()) {
    return iphoneXStyle
  } else {
    return regularStyle
  }
}
