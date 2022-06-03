# Setting up callback component in react okta SDK and  within JWT ott-web-ap

### errorComponent
By default, LoginCallback will display any errors from authState.error. If you wish to customise the display of such error messages, you can pass your own component as an errorComponent prop to <LoginCallback>. The authState.error value will be passed to the errorComponent as the error prop.

### Error component implementation within JWT ott-web-app

```react: 
import React, { useEffect } from 'react';

import ErrorPage from '../ErrorPage/ErrorPage';
import styles from './OktaCustomError.module.scss';

type Props = {
  error?: { name: string; errorCode: string; errorSummary: string };
};

const OktaCustomError: React.FC<Props> = ({ error }: Props) => {
  return (
    <ErrorPage title="Something went wrong!  &#9785;">
      {error && (
        <>
          <div className={styles.row}>
            <div className={styles.column}>
              <p>
                <b>Error Code:</b> {error.errorCode}
              </p>
              <p>
                <b>Summary:</b> {error.errorSummary}
              </p>
            </div>
          </div>
        </>
      )}
    </ErrorPage>
  );
};
export default OktaCustomError;
```
The above component wraps ErrorPage component of jwt otp-web-app

### Use errorComponent component to send custom Error handling component 
  ``` <Route path="/login/callback" component={(props) => <LoginCallback {...props} errorComponent={OktaCustomError} />} />
  ```
