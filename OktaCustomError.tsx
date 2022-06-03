/* eslint-disable import/order */
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
