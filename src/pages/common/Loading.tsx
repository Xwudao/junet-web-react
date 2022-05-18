import React, { FC } from 'react';
import Icon from '@/pages/common/Icon';
import { keyframes, styled } from '@mui/material';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const StyledIcon = styled(Icon)(`
  animation: ${rotate} 1s linear infinite;
`);
type ILoading = {};
const Loading: FC<ILoading> = (props) => {
  console.log('loading render...');
  return <StyledIcon icon={`i-eos-icons-spinner`} />;
};

export default Loading;
