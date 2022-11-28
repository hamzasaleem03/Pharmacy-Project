import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {!props.noHeader && <Header />}
        <main className="flex-1">{props.children}</main>
        {!props.noFooter && <Footer />}
      </div>
    </>
  );
}
