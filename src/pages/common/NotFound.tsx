import React from 'react';
import notFound from '@/assets/illustrations/404.svg';
import { Button } from '@douyinfe/semi-ui';
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
  console.log('NotFound render...');
  const nav = useNavigate();

  return (
    <>
      <div
        className={`dark:bg-dark w-full h-full flex items-center flex-col sm:flex-row select-none`}>
        <img className={`h-3/5 sm:h-3/5`} src={notFound} alt={`not found`} />
        <section className={`justify-items-start`}>
          <h3 className={`dark:text-white font-bold text-4xl`}>Oh No! 你来到了荒野！</h3>
          <section className={`text-center sm:text-left mt-4 space-x-3`}>
            <Button
              onClick={() => {
                nav('/');
              }}>
              返回首页
            </Button>
            <Button
              type={`primary`}
              theme={`solid`}
              onClick={() => {
                nav(-1);
              }}>
              返回上级
            </Button>
          </section>
        </section>
      </div>
    </>
  );
};

export default NotFound;
