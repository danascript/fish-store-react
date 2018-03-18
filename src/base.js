import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp(
  {
    apiKey: "AIzaSyCBH8E6YcDYJPGiSh2jDCHFijjIs0R6aqU",
    authDomain: "catch-of-the-day-daniela.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-daniela.firebaseio.com"
  }
)

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base