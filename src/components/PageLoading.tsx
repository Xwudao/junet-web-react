import React, { FC } from 'react';
import classes from './page.module.scss';
type IPageLoading = { text?: string };
const PageLoading: FC<IPageLoading> = ({ text }) => {
  console.log('pageLoading render...');
  return (
    <section className={classes.pageLoading}>
      <i className={`i-eos-icons-loading ${classes.pageLoadingIcon}`}></i>
      <span>{text ? text : 'Loading...'}</span>
    </section>
  );
};

export default PageLoading;
