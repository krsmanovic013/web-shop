import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../utils/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    // const response = await signInWithGooglePopup();
    // createUserDocumentFromAuth(response);
    const { user } = await signInWithGooglePopup();
    const userDocRed = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
    </div>
  );
};
export default SignIn;
