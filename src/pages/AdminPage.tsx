import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Paper from '@/components/Paper';
import Text from '@/components/Text';
import Icon from '@/components/Icon';
import { Avatar, Button, Dropdown, Menu } from '@arco-design/web-react';

type IAdminPage = {};
const AdminPage: FC<IAdminPage> = (props) => {
  console.log('adminPage render...');
  const dropList = (
    <Menu>
      <Menu.Item key="1">Beijing</Menu.Item>
      <Menu.Item key="2">Shanghai</Menu.Item>
      <Menu.Item key="3">Guangzhou</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Paper className={`h-full flex flex-col`}>
        {/*  header*/}
        <header className={`h-15 flex items-center justify-between shadow px-5`}>
          <section className={``}>
            <div className="brand w-30 rounded h-9 bg-black/80"></div>
          </section>

          <section className={`flex items-center space-x-3`}>
            <Avatar>K</Avatar>
            <Dropdown droplist={dropList} trigger="click" position="br">
              <Dropdown.Button>
                <Text className={`text-base cursor-pointer`}>Kuan</Text>
              </Dropdown.Button>
            </Dropdown>
          </section>
        </header>
        <main className={`flex-1 flex h-full`}>
          <section className={`left w-50 overflow-y-auto flex flex-col`}>
            {/*admin avatar*/}
            <div
              className={`user px-3 bg-gray-4/20 py-2 space-x-3 flex rounded items-center m-2 cursor-pointer`}>
              <img
                src="https://cravatar.cn/avatar/9befcd571ae0d21cc19ab59244922a39"
                className={`w-10 h-10 rounded-full`}
                alt="avatar"
              />
              <div className={`flex flex-col`}>
                <h4 className={`text-base font-bold`}>Admin</h4>
                <span className={`text-gray-5`}>good!</span>
              </div>
            </div>
            {/*menu list*/}
            <ul className={`menu flex-1 h-full overflow-y-auto`}>
              <li className={`font-bold text-base text-gray-7 mx-2`}>
                <span>通用</span>
              </li>
              {Array.from({ length: 10 }).map((_, index) => {
                return (
                  <div key={index} className={`my-1 mx-2 text-gray-7 `}>
                    <Link
                      to={'#'}
                      className={`px-3 py-2 flex items-center hover:bg-primary/20 hover:text-primary block rounded space-x-3`}>
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
          <section className={`right flex-1 bg-red-3`}></section>
        </main>
      </Paper>
    </>
  );
};

export default AdminPage;
