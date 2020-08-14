import Amplify from 'aws-amplify';
import { data } from './data';

Amplify.configure({
    Auth: {
      mandatorySignIn: true,
      region: data.cognito.REGION,
      userPoolId: data.cognito.USER_POOL_ID,
      identityPoolId: data.cognito.IDENTITY_POOL_ID,
      userPoolWebClientId: data.cognito.APP_CLIENT_ID
    }
});