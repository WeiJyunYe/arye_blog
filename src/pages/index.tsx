import * as React from "react";
import { HeadFC, PageProps, Link } from "gatsby";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <main>
        <Link to="/">
          <h1 className="text-4xl font-sans text-[#01579B] hover:text-[#0288D1]">
            <span className="">Arye </span>的筆記與部落格
          </h1>
        </Link>
      </main>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Arye 的筆記與部落格</title>;
