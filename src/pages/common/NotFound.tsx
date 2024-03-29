import React from 'react';
import notFound from '@/assets/illustrations/404.svg';
import { useNavigate } from 'react-router-dom';
import { Button } from '@arco-design/web-react';
import Pager from '@/components/Pager';
import Text from '@/components/Text';
import Surface from '@/components/Surface';
const NotFound = () => {
  console.log('NotFound render...');
  const nav = useNavigate();

  return (
    <>
      <Pager as={`section`} className={`h-full flex items-center justify-center`}>
        <Surface className={` px-3 sm:px-0 w-full sm:w-200 rounded`}>
          <div className="box shadow dark:border dark:border-gray/20 flex rounded sm:flex-row flex-col items-center">
            <img src={notFound} alt="not found" className={`w-1/2`} />
            <section
              className={`w-full p-3 sm:w-1/2 flex flex-col justify-center items-center`}>
              <Text as={`h3`} className={`font-bold text-lg`}>
                你来到了一片荒野~
              </Text>
              <div className={`space-x-3 mt-6`}>
                <Button
                  onClick={() => {
                    nav(-1);
                  }}>
                  返回上级
                </Button>
                <Button
                  type={`primary`}
                  onClick={() => {
                    nav('/');
                  }}>
                  返回首页
                </Button>
              </div>
            </section>
          </div>
        </Surface>
      </Pager>
    </>
  );
};

export default NotFound;
