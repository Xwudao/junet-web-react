import useMediaQuery from 'react-responsive';
import React, { FC } from 'react';
import MediaQuery from 'react-responsive';

const Desktop = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery({ minWidth: 976 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }: { children: React.ReactNode }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return isMobile ? children : null;
};
const Default = ({ children }: { children: React.ReactNode }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

export type IResponsive = {
  children: React.ReactNode;
};

const OnXs: FC<IResponsive> = ({ children }) => {
  return <MediaQuery minWidth={0}>{children}</MediaQuery>;
  // const ok = useMediaQuery({ minWidth: 0 });
  // console.log('ok', ok);
  // if (!ok) return null;
  // return <>{children}</>;
};
const OnSmAbove: FC<IResponsive> = ({ children }) => {
  return <MediaQuery minWidth={480}>{children}</MediaQuery>;

  // const ok = useMediaQuery({ minWidth: 480 });
  // if (!ok) return null;
  // return <>{children}</>;
};
const OnMdAbove: FC<IResponsive> = ({ children }) => {
  return <MediaQuery minWidth={768}>{children}</MediaQuery>;
  // const ok = useMediaQuery({ minWidth: 768 });
  // if (!ok) return null;
  // return <>{children}</>;
};
const OnLgAbove: FC<IResponsive> = ({ children }) => {
  return <MediaQuery minWidth={976}>{children}</MediaQuery>;

  // const ok = useMediaQuery({ minWidth: 976 });
  // if (!ok) return null;
  // return <>{children}</>;
};
const OnXlAbove: FC<IResponsive> = ({ children }) => {
  return <MediaQuery minWidth={1440}>{children}</MediaQuery>;

  // const ok = useMediaQuery({ minWidth: 1440 });
  // if (!ok) return null;
  // return <>{children}</>;
};

export {
  Desktop,
  Tablet,
  Mobile,
  Default,
  OnXs,
  OnSmAbove,
  OnMdAbove,
  OnLgAbove,
  OnXlAbove,
};
