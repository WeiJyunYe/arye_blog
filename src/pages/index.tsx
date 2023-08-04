import * as React from "react";
import { HeadFC, Link, graphql } from "gatsby";
import Seo from "../components/seo";
import useSiteMetadata from "../hooks/useSiteMetaData";
import useQueryAllMdx from "../hooks/useQueryAllMdx";

interface AllMdxProps {
  frontmatter: {
    title: string;
    date: string;
    slug: string;
    category: string;
    tags?: [string?];
  };
  id: string;
  excerpt: string;
  parent: {
    id: string;
    modifiedTime: string;
  };
}

const IndexPage = () => {
  const { title } = useSiteMetadata();
  const allMdx = useQueryAllMdx();
  return (
    <div className="w-full h-auto mt-4 flex flex-col items-center">
      <main>
        <Link to="/">
          <h1 className="text-4xl font-medium font-sans text-[#455A64] hover:text-[#78909C]">
            {title}
          </h1>
        </Link>
      </main>
      <div className="flex flex-col items-center">
        {allMdx.map((node: AllMdxProps) => (
          <article
            className="group w-full max-w-[60%] h-auto p-4 my-4 bg-[#CFD8DC]/20 rounded-[4px] shadow-md cursor-pointer"
            key={node.id}
          >
            <Link to={`/blog/${node.frontmatter.slug}`}>
              <header>
                <h2 className="font-sans text-2xl text-[#01579B] group-hover:text-[#0288D1]">
                  {node.frontmatter.title}
                </h2>
              </header>
              <time className="font-serif text-xs">
                {node.frontmatter.date}
              </time>
              <p className="font-serif text-sm mt-2">{node.excerpt}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo tag="Home" />;
