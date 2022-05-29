import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Paper from '@/components/Paper';
import Text from '@/components/Text';
import Icon from '@/components/Icon';
import {
  Avatar,
  Button,
  Dropdown,
  Menu,
  Skeleton,
  Tooltip,
  Trigger,
} from '@arco-design/web-react';
import { useTheme } from '@/providers/ThemeProvider';
import classNames from 'classnames';

function Popup() {
  return (
    <div className="demo-trigger-popup" style={{ width: 300 }}>
      <Tooltip content="123" defaultPopupVisible>
        <span>123123</span>
      </Tooltip>
      <Skeleton />
    </div>
  );
}
type IAdminPage = {};
const AdminPage: FC<IAdminPage> = (props) => {
  console.log('adminPage render...');
  const { theme, darK, toggleTheme } = useTheme();

  return (
    <>
      <Paper className={`h-full flex flex-col`}>
        {/*  header*/}
        <header className={`h-15 flex items-center justify-between shadow px-5`}>
          <section className={``}>
            <Text className={`font-bold text-xl`}>Admin Template</Text>
            {/*<div className="brand w-30 rounded h-9 bg-black/80"></div>*/}
          </section>

          <section className={`flex items-center space-x-3`}>
            <div className="mode inline-block" onClick={toggleTheme}>
              {theme === 'dark' ? (
                <Icon
                  icon={`i-carbon-sun`}
                  autoMode
                  className={`text-lg cursor-pointer`}
                />
              ) : (
                <Icon
                  icon={`i-carbon-moon`}
                  autoMode
                  className={`text-lg cursor-pointer`}
                />
              )}
            </div>
          </section>
        </header>
        <main className={`flex-1 flex h-full`}>
          <section className={`left w-50 overflow-y-auto flex flex-col shadow`}>
            {/*admin avatar*/}
            <div
              className={`user px-3 bg-gray-4/20 py-2 space-x-3 flex rounded items-center m-2 cursor-pointer`}>
              <img
                src="https://cravatar.cn/avatar/9befcd571ae0d21cc19ab59244922a39"
                className={`w-10 h-10 rounded-full`}
                alt="avatar"
              />
              <div className={`flex flex-col`}>
                <h4 className={`text-base font-bold`}>
                  <Text>Admin</Text>
                </h4>
                <span className={`text-gray-5`}>
                  <Text>good!</Text>
                </span>
              </div>
            </div>
            {/*menu list*/}
            <ul className={`menu flex-1 h-full overflow-y-auto`}>
              <li className={`font-bold text-base text-gray-7 mx-2`}>
                <span>
                  <Text className={`text-gray-7/80`}>通用</Text>
                </span>
              </li>
              {Array.from({ length: 10 }).map((_, index) => {
                return (
                  <div key={index} className={`my-1 mx-2 text-gray-7 `}>
                    <Link
                      to={'#'}
                      className={`px-3 py-2 flex items-center  block rounded space-x-3 ${classNames(
                        {
                          'hover:bg-primary/20': !darK,
                          'hover:text-primary': !darK,
                          'hover:bg-gray-4/20': darK,
                          'hover:text-gray-4': darK,
                        },
                      )}`}>
                      <Icon
                        icon={`i-material-symbols-dashboard-customize`}
                        className={`text-lg`}
                      />
                      <span>App</span>
                    </Link>
                  </div>
                );
              })}
            </ul>
          </section>
          <section className={`right flex-1 h-full overflow-y-auto p-3`}>
            <Outlet />
            {/*{Array.from({ length: 100 }).map((_, index) => {*/}
            {/*  return (*/}
            {/*    <div key={index} className={`my-1 mx-2 text-gray-7 `}>*/}
            {/*      {index}*/}
            {/*    </div>*/}
            {/*  );*/}
            {/*})}*/}
          </section>
        </main>
      </Paper>
    </>
  );
};

export default AdminPage;
