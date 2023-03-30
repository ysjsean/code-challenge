/* eslint-disable array-callback-return */
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import styles from "./index.module.css";

interface LayoutContentProps {
  content: {
    jsx: (props: any) => JSX.Element;
    route: string;
    title: string;
    icon: any;
  }[];
}

const LayoutContent: React.FC<LayoutContentProps> = (props) => {
  const { content } = props;
  const { Content } = Layout;
  return (
    <Content style={{ margin: 16}}>
      <div className={styles.contentBackground}>
        <Routes>
          {content.map((item) => {
            return (
              <Route
                key={item.route}
                path={item.route}
                element={
                  <item.jsx 
                  />
                }
              ></Route>
            );
          })}
        </Routes>
      </div>
    </Content>
  );
};

export default LayoutContent;
