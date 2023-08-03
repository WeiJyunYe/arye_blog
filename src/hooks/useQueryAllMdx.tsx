import { graphql, useStaticQuery } from "gatsby";

const useQueryAllMdx = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            slug
            category
            tags
          }
          id
          excerpt
          parent {
            ... on File {
              id
              name
              modifiedTime(formatString: "MMMM D, YYYY")
            }
          }
        }
      }
    }
  `);

  return data.allMdx.nodes;
};

export default useQueryAllMdx;
