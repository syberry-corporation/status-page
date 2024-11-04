import React from 'react';
import { Amplify } from "aws-amplify";


Amplify.configure({
    Auth: {
        region: 'us-east-2',
        userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
        userPoolWebClientId: process.env.NEXT_PUBLIC_USER_POOL_WEBCLIENT_ID,
        oauth: {
            domain: process.env.NEXT_PUBLIC_OAUTH_DOMAIN,
            scope: ['email', 'openid'],
            redirectSignIn: process.env.NEXT_PUBLIC_OAUTH_REDIRECT_SIGNIN,
            redirectSignOut: process.env.NEXT_PUBLIC_OAUTH_REDIRECT_SIGNOUT,
            responseType: 'code',
        },
    },
});

const AmplifyConfigWrapper = ({children}: any) => {
    return <>{children}</>;
}

export default AmplifyConfigWrapper;
