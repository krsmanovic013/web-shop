import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../utils/firebase";
import SignUpForm from "../components/sign-up-form";
import SignInForm from "../components/sign-in-form";
import "./authentication.scss";

const Authentication = () => {
  const logGoogleUser = async () => {
    // const response = await signInWithGooglePopup();
    // createUserDocumentFromAuth(response);
    const { user } = await signInWithGooglePopup();
    const userDocRed = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="authentication-container">
      <SignInForm onClickHandler={logGoogleUser} />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
