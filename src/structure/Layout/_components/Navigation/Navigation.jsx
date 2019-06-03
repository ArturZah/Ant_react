import React, {useState} from 'react';
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import Logo from './../../../../components/Logo'
import {NavLink, Redirect} from 'react-router-dom'
import {Menu, Icon, Button} from 'antd';
import {withRouter} from 'react-router';

const StyledMenu = styled(Menu)`
 
  margin-top: 10% !important;

  .log-out_btn {
    width: 80%;
    margin: 5% 10%;
  }
`;

const SubMenu = Menu.SubMenu;
const cookies = new Cookies();

const Navigation = () => {
    const [ openKeys, setOpenKeys ] = useState([ '' ]);
    const [ redirect, setRedirect ] = useState(false);
    const rootSubmenuKeys = [ 'sub1', 'sub2' ];

    const onOpenChange = (openKeysVal) => {
        const latestOpenKey = openKeysVal.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(openKeysVal);
        } else {
            setOpenKeys(latestOpenKey ? [ latestOpenKey ] : []);
        }
    };

    const redirection = () => {
        setRedirect(true);
    }

    const renderRedirect = () => {
        if (redirect) {
          return <Redirect to='/login' />
        }
      }

    const logOut = () => {
        cookies.remove('jwttoken');
        cookies.remove('role');
        cookies.remove('user');
        redirection();
    };

    const newDiet = () => {
        cookies.remove('currentDietId');
    };

    return (
        <>
            {renderRedirect()}
            <Logo />
            <StyledMenu
                mode="inline"
                theme="dark"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
            >
                <Menu.Item key="1">
                    <NavLink to="/">
                        <Icon type="home"/>
                        <span>Dashboard</span>
                    </NavLink>
                </Menu.Item>

                <SubMenu key="sub1" title={<span><Icon type="solution"/><span>Items</span></span>}>
                    <Menu.Item key="2"><NavLink to="/add_items">Add New</NavLink></Menu.Item>
                    <Menu.Item key="3"><NavLink to="/item_list">List</NavLink></Menu.Item>
                </SubMenu>

                <SubMenu key="sub2" title={<span><Icon type="pie-chart"/><span>Users</span></span>}>
                    <Menu.Item key="4">
                        <NavLink
                            to="/add_user"
                            onClick={newDiet}
                        >
                            Add New
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="5"><NavLink to="/user_list">List</NavLink></Menu.Item>
                </SubMenu>

                <Menu.Item>
                    <Button type="primary" onClick={logOut} className="log-out_btn">
                        Log out
                    </Button>
                </Menu.Item>
            </StyledMenu>
        </>
    );
}

Navigation.defaultProps = {};
Navigation.propTypes = {};

export default withRouter(Navigation);