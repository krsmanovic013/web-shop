import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../utils/firebase";
import SignUpForm from "../components/sign-up-form";

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
      <SignUpForm />
    </div>
  );
};
export default SignIn;
