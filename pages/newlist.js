import React from "react";
import Newslist from "../components/newslistPage/index";
import Layout from "../components/layout";
function store() {
  return (
    <Layout>
      <Newslist/>
    </Layout>
  );
}

export default store;
