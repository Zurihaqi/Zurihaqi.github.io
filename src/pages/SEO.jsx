import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <meta
        name="google-site-verification"
        content="z8pGOmitSn3gu0IRBk02bA9Gqa3orzxemClCTbxjE6U"
      />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Zul Fahri Baihaqi",
            "url": "https://zurihaqi.github.io/",
            "sameAs": [
              "https://linkedin.com/in/zurihaqi",
              "https://github.com/zurihaqi"
            ],
            "jobTitle": "Web Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            }
          }
        `}
      </script>
    </Helmet>
  );
};

export default Seo;
