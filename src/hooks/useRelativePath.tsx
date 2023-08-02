import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

const useRelativePath = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          relativePath
        }
      }
    }
  `);

  return data.allFile.nodes;
};

export default useRelativePath;
