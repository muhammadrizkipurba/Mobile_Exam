import  { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'


import AuthScreen from './src/screens/Auth/Auth'
import SharePlaceScreen from './src/screens/SharePlace/SharePlace'
import FindPlaceScreen from './src/screens/FindPlace/FindPlace'
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail'
import SideDrawerScreen from './src/screens/SideDrawer/SideDrawer'

const store = configureStore()

// Register Screens
Navigation.registerComponent(
  "jc08_Mobile_Exam.AuthScreen",
  () => AuthScreen,
  store,
  Provider
)

Navigation.registerComponent(
  "jc08_Mobile_Exam.SharePlaceScreen",
  () => SharePlaceScreen,
  store,
  Provider
)

Navigation.registerComponent(
  "jc08_Mobile_Exam.FindPlaceScreen",
  () => FindPlaceScreen,
  store,
  Provider
)

Navigation.registerComponent(
  'jc08_Mobile_Exam.PlaceDetailScreen',
  () => PlaceDetailScreen,
  store,
  Provider
)

Navigation.registerComponent(
  'jc08_Mobile_Exam.SideDrawerScreen',
  () => SideDrawerScreen,
  store,
  Provider
)


// Start Screens
Navigation.startSingleScreenApp({
  screen: {
    screen: 'jc08_Mobile_Exam.AuthScreen',
    title: 'Login'
  }
})