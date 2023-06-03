import React, { FC } from 'react';
import classes from './page.module.scss';

type ICmpLoading = { text?: string };
const CmpLoading: FC<ICmpLoading> = ({ text }) => {
  console.log('cmpLoading render...');
  return (
    <div className={classes.cmpLoading}>
      <i className={`i-eos-icons-loading ${classes.cmpLoadingIcon}`}></i>
      <span className={``}>{text ? text : 'Loading...'}</span>
    </div>
  );
};

export default CmpLoading;
