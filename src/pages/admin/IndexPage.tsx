import React, { FC } from 'react';
import Text from '@/components/Text';

type IAdminIndex = {};
const IndexPage: FC<IAdminIndex> = (props) => {
  console.log('indexPage render...');
  return (
    <div>
      <Text>AdminIndexPage</Text>
    </div>
  );
};

export default IndexPage;
