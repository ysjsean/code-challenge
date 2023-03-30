/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu,  } from "antd";
import styles from "./index.module.css";
import logo from "./logo192.png"
import { CollapseType } from "antd/lib/layout/Sider";
import { InfoOutlined } from "@ant-design/icons";

interface SidenavProps {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  isBrokenBreakpoint: boolean;
  setIsBrokenBreakpoint: React.Dispatch<React.SetStateAction<boolean>>;
  content: {
    jsx: (props: any) => JSX.Element;
    route: string;
    title: string;
    icon: any;
  }[];
}

const Sidenav: React.FC<SidenavProps> = (props) => {
  const {
    isCollapsed,
    setIsCollapsed,
    isBrokenBreakpoint,
    setIsBrokenBreakpoint,
    content,
  } = props;
  const { Sider } = Layout;

  let location = useLocation();
  console.log(location);

  const [menuItems, setMenuItems] = useState(
      [
        {key:"key", icon: <InfoOutlined/>, label: <Link to="">Title</Link>}
      ]
    )

  useEffect(() => {
    const _menuItems:{
      key: string;
      icon: JSX.Element;
      label: JSX.Element;
    }[] = []

    content.forEach(item => {
      _menuItems.push(
        {
          key: item.route,
          icon: <item.icon/>,
          label: (<Link to={item.route} >{item.title}</Link>)
        }
      )
    })
    setMenuItems(_menuItems);
    return () => {
      
    }
  },[content])

  const onMenuClick = (event: any) => {
    // const { key } = event
    setIsCollapsed((bool) => (isBrokenBreakpoint ? !bool : bool))
    console.log(event)
  }
  
  
  return (
    <Sider
      className={styles.nav}
      breakpoint="xl"
      collapsedWidth="0"
      onBreakpoint={(broken:boolean) => {
        console.log("Breakpoint broken: ", broken);
        setIsBrokenBreakpoint(broken);
      }}
      onCollapse={(collapsed:boolean, type:CollapseType) => {
        console.log("On collapsed; ", collapsed, type);
        setIsCollapsed(!isCollapsed);
        setIsBrokenBreakpoint(!isBrokenBreakpoint);
      }}
      collapsed={isCollapsed}
    >
      <div style={{ textAlign: "center", padding: "6px 0" }}>
        <p style={{ width: "100%", height: "auto", padding: "0", color: "white", fontSize: 32, display: "block", background: "white" }}>
          <img src={logo} width={150} alt="logo" />
        </p>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        defaultSelectedKeys={[location.pathname]}
        items={menuItems}
        onClick={onMenuClick}
      />
      <div
        className={styles.footer}
        style={{ display: isCollapsed ? "none" : "" }}
      >
        &copy; {new Date().getFullYear()}. All rights reserved.
      </div>
    </Sider>
  );
};

export default Sidenav;
