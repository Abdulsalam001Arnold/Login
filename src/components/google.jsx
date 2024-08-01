import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import {GoogleOAuthProvider} from '@react-oauth/google';

export default function Google() {
    return(

        <GoogleOAuthProvider clientId="238733901977-0hcduo9jovbj7i7brvme7tqkobjeb9l3.apps.googleusercontent.com">

        <GoogleLogin
  onSuccess={credentialResponse => {
    const credentialResponseOncoded = jwtDecode(credentialResponse.credential)
    console.log(credentialResponseOncoded);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
</GoogleOAuthProvider>

        

    )
}