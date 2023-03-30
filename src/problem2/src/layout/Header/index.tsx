import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import styles from "./index.module.css";
import Heading from "./components/Heading"

interface LayoutHeaderProps {
  content: {
    jsx: (props: any) => JSX.Element;
    route: string;
    title: string;
    icon: any;
  }[];
}

const LayoutHeader: React.FC<LayoutHeaderProps> = (props) => {
  const { content } = props;
  const { Header } = Layout;

  return (
    <Header style={{ margin: 16 }} className={styles.header}>
      <Routes>
        {content.map((item) => (
          <Route key={item.route} path={item.route} element={<Heading item={item} />}/>
        ))}
      </Routes>
    </Header>
  );
};

export default LayoutHeader;
