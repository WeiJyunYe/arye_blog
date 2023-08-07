import * as React from "react";
import { useState, useEffect } from "react";
import { HeadFC, Link, graphql } from "gatsby";
import Seo from "../components/seo";
import useSiteMetadata from "../hooks/useSiteMetaData";
import useQueryAllMdx from "../hooks/useQueryAllMdx";
import ReactPaginate from "react-paginate";

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

type PageClickEvent = {
  selected: number;
};

const IndexPage = () => {
  const { title } = useSiteMetadata();
  const allMdx = useQueryAllMdx();

  const postsTotalCount = allMdx.totalCount;
  const postsPerPage = 1;

  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(postsTotalCount / postsPerPage));
  }, [itemOffset, postsPerPage]);

  const handlePageClick = (event: PageClickEvent) => {
    const newOffset = (event.selected * postsPerPage) % postsTotalCount;
    setItemOffset(newOffset);
  };

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
        {allMdx.nodes
          .slice(itemOffset, itemOffset + postsPerPage)
          .map((node: AllMdxProps) => (
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
      <ReactPaginate
        containerClassName="flex p-4 mt-2 font-mono text-sm select-none"
        pageClassName="inline-blocl flex justify-center items-center w-8 h-8 p-2 font-thin hover:text-[#0288D1] hover:bg-[#455A64]/30 hover:cursor-pointer border-y-[1px] border-l-[1px] border-black"
        pageLinkClassName="block"
        activeClassName="text-[#01579B] font-bold hover:cursor-not-allowed bg-[#455A64]/10"
        activeLinkClassName="cursor-not-allowed disabled"
        previousClassName="inline-block flex justify-center items-center w-8 h-8 p-2 hover:text-[#0288D1] hover:bg-[#455A64]/30 hover:cursor-pointer border-y-[1px] border-l-[1px] border-black rounded-l-[2px]"
        previousLinkClassName="block"
        nextClassName="inline-block flex justify-center items-center w-8 h-8 p-2 hover:text-[#0288D1] hover:bg-[#455A64]/30 hover:cursor-pointer border-[1px] border-black rounded-r-[2px]"
        nextLinkClassName="block"
        breakClassName="inline-blocl flex justify-center items-center w-8 h-8 p-2 border-y-[1px] border-l-[1px] border-black"
        breakLinkClassName=""
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo tag="Home" />;
