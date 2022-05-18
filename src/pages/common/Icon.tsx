import React, { FC } from 'react';
import { styled, SxProps } from '@mui/material';

type IIcon = {
  icon: string;
  sx?: SxProps;
};
const Icon: FC<IIcon> = ({ sx, icon }) => {
  console.log('icon render...');
  const I = styled(`i`)(
    ({ theme }) => `
  color: ${theme.palette.primary.main};
`,
  );
  return <I sx={{ fontSize: 25, ...sx }} className={icon}></I>;
};

export default Icon;
