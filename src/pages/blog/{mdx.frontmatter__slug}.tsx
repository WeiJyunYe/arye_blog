import * as React from "react";
import Seo from "../../components/seo";
import useSiteMetadata from "../../hooks/useSiteMetaData";
import { Link, graphql } from "gatsby";
import { ReactNode } from "react";
import Comments from "../../components/comments";

interface DataProps {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
      category: string;
      tags: string[];
    };
  };
}

interface PostProps {
  data: DataProps;
  children: ReactNode;
}

interface HeadProps {
  data: {
    mdx: {
      frontmatter: {
        title: string;
      };
    };
  };
}

const Posts = ({ data, children }: PostProps) => {
  const { title } = useSiteMetadata();

  return (
    <div className="w-full h-screen p-4 flex justify-center">
      <div className="w-full max-w-[50%] h-auto mt-4 flex flex-col items-start">
        <header>
          <h1 className="mb-4">
            <Link to="/">
              <h1 className="text-xl font-medium font-sans text-[#455A64] hover:text-[#78909C]">
                {title}
              </h1>
            </Link>
          </h1>
          <h2 className="font-sans text-4xl text-[#01579B]">
            {data.mdx.frontmatter.title}
          </h2>
          <time className="font-serif text-sm block mb-2">
            {data.mdx.frontmatter.date}
          </time>
        </header>
        <hr className="w-full border-solid border-[0.5px] border-black" />
        <aside className="font-serif text-md my-2">
          {`類別：` + data.mdx.frontmatter.category}
          <br />
          <span className="text-sm">
            {data.mdx.frontmatter.tags.map((tag: string, index: number) => (
              <li key={index + tag}>{tag}</li>
            ))}
          </span>
        </aside>
        <hr className="w-full border-solid border-[0.5px] border-black" />
        <main className="w-full mt-4 font-serif text-md markdown-body">
          {children}
        </main>
        <Comments />
      </div>
    </div>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        category
        tags
      }
    }
  }
`;

export const Head = ({ data }: HeadProps) => (
  <Seo tag={data.mdx.frontmatter.title} />
);

export default Posts;
