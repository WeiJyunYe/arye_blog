import * as React from "react";
import Seo from "../../components/seo";
import useQueryAllMdx from "../../hooks/useQueryAllMdx";
import useSiteMetadata from "../../hooks/useSiteMetaData";
import { Link } from "gatsby";

const Posts = () => {
  const { title } = useSiteMetadata();
  const allMdx = useQueryAllMdx();

  return (
    <div className="w-full h-screen p-4 flex justify-center">
      <div className="w-full max-w-[75%] h-auto mt-4 flex flex-col items-start">
        <header>
          <h1 className="mb-4">
            <Link to="/">
              <h1 className="text-xl font-medium font-sans text-[#455A64] hover:text-[#78909C]">
                {title}
              </h1>
            </Link>
          </h1>
          <h2 className="font-sans text-4xl">{allMdx[0].frontmatter.title}</h2>
          <time className="font-serif text-sm">
            {allMdx[0].frontmatter.date}
          </time>
        </header>
        <aside className="font-serif text-sm">
          {allMdx[0].frontmatter.category}
          <br />
          {allMdx[0].frontmatter.tags.map((tag: string) => (
            <li>{tag}</li>
          ))}
        </aside>
        <main></main>
      </div>
    </div>
  );
};

export const Head = () => <Seo tag="" />;

export default Posts;
