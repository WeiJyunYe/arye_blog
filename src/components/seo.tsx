import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import useSiteMetadata from "../hooks/useSiteMetaData";

interface SeoProps {
  tag: string;
}

const Seo = ({ tag }: SeoProps) => {
  const { title } = useSiteMetadata();

  return (
    <title>
      {tag} | {title}
    </title>
  );
};

export default Seo;
