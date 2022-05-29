import React, { FC } from 'react';

type IContentWrapper = {
  topBar?: React.ReactNode;
};
const ContentWrapper: FC<IContentWrapper> = ({ topBar }) => {
  console.log('contentWrapper render...');
  return (
    <section className={`flex flex-col`}>
      {topBar && <div className="topbar"></div>}
    </section>
  );
};

export default ContentWrapper;
