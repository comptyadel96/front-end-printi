import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  getAuth,
} from "firebase/auth"

const GoogleLogin = async () => {
  const auth = getAuth()
  const googleProvider = new GoogleAuthProvider()

  return await signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      console.log(token)
      // The signed-in user info.
      const user = result.user
      console.log(user)
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error.message)
      // The AuthCredential type that was used.
      console.log(GoogleAuthProvider.credentialFromError(error))
    })
}
const FacebookLogin = async () => {

  const auth = getAuth()
  const facebookProvider = new FacebookAuthProvider()

  return await signInWithPopup(auth, facebookProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = FacebookAuthProvider.credentialFromResult(
        result
      )
      const token = credential.accessToken
      console.log(token)
      // The signed-in user info.
      const user = result.user
      console.log(user)
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error.message)
      // The AuthCredential type that was used.
      console.log(GoogleAuthProvider.credentialFromError(error))
    })
}
export { GoogleLogin, FacebookLogin }
