import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '@/components/Paper';
import Text from '@/components/Text';
import { Button } from '@arco-design/web-react';
import { useTheme } from '@/providers/ThemeProvider';
import { OnMdAbove, OnSmAbove, OnXs } from '@/components/responsive/Responsive';
import MediaQuery from 'react-responsive';

type IIndexPage = {};
const IndexPage: FC<IIndexPage> = (props) => {
  console.log('indexPage render...');
  const nav = useNavigate();
  const { toggleTheme } = useTheme();
  return (
    <Paper className={`w-full h-full p-3`}>
      <span className={`block text-txt-emphasize text-lg mb-2`}>Change Theme</span>
      <Button type={`primary`} onClick={toggleTheme}>
        change theme
      </Button>
      <OnMdAbove>
        <Text as={`span`} className={`block text-lg mb-2`}>
          Only show On SM
        </Text>
      </OnMdAbove>
      <div className="text-txt-secondary border-solid">Should Fill Something Here</div>

      <div>
        <h1 className={`dark:text-white bg-primary hover:bg-primary-hover`}>h1 text</h1>
      </div>

      <section className={``}>
        <div className={`text-txt-emphasize`}>Text:</div>

        <div>
          <p className={`text-success hover:text-success-hover`}>SUCCESS</p>
          <p className={`text-warning hover:text-warning-hover`}>WARNING</p>
          <p className={`text-danger hover:text-danger-hover`}>DANGER</p>
          <p className={`text-txt-emphasize`}>emphasize</p>
        </div>
      </section>

      <section>
        <div className={`text-txt-emphasize`}>Border:</div>
        <div className={`space-y-3`}>
          <p className={`border-bd-light text-txt-emphasize`}>hello</p>
          <p className={`bg-bg-material  text-txt-emphasize`}>fasjfisf</p>
        </div>
      </section>
    </Paper>
  );
};

export default IndexPage;
