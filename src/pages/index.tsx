import * as React from "react";
import { HeadFC, Link, graphql } from "gatsby";
import Seo from "../components/seo";
import useSiteMetadata from "../hooks/useSiteMetaData";
import useRelativePath from "../hooks/useRelativePath";

interface PathProps {
  relativePath: string;
}

const IndexPage = () => {
  const { title } = useSiteMetadata();
  const path = useRelativePath();
  return (
    <div className="w-full h-auto mt-4 flex flex-col  items-center">
      <main>
        <Link to="/">
          <h1 className="text-4xl font-sans text-[#01579B] hover:text-[#0288D1]">
            {title}
          </h1>
        </Link>
      </main>
      <div>
        {path.map((node: PathProps) => (
          <li key={node.relativePath}>{node.relativePath}</li>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo tag="Home" />;
