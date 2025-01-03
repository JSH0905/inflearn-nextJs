import { Html, Head, Main, NextScript } from "next/document";

// 모든 페이지에 공통적으로 적용되어야하는 Next 앱의 HTML 컴포넌트

export default function Document() {
  return (
    <Html lang="kr">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
