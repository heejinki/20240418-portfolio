import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

const DEFAULT_SEO = {
  title: "김희진 | Front-End Dev",
  description: "프론트엔드 개발자 김희진입니다.",
  canonical: "",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "",
    title: "김희진 | Front-End Dev",
    site_name: "김희진 | Front-End Dev",
    images: [
      {
        url: "/share.png",
        width: 285,
        height: 167,
        alt: "김희진 | Front-End Dev",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  additionalMetaTags: [
    {
      name: "application-name",
      content: "김희진 | Front-End Dev",
    },
    {
      name: "msapplication-tooltip",
      content: "김희진 | Front-End Dev",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
