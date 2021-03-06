// クライアントサイドのレンダリング　Pagesフォルダの中にフォルダとファイルがそのままページ遷移するためのURLになる
// aタグをLinkコンポーネントでラッピングするとクライアントサイドレンダリングになる
// indexファイルがルートになる

import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

// 静的ジェネレーションSSG 外部データがあるときとないときで実装する内容が異なる
// 外部データがあるときはgetStaticPropでデータ取得をおこなう（例えば、ブログの記事データなど）
// getStaticPropはpagesディレクトリ内でのみ使用できる
// getStaticPropはNext.jsに外部データがあることを伝える
// この例ではブログ記事をマークダウン形式で読み取り、オブジェクトにパースする
// 取得したデータはキーをpropとするオブジェクト形式とすること

// サーバーサイドレンダリングSSRを使用するときはgetServerSidePropsとする
// 外部データを取得するときに使用する
// 引数として"context"を指定する
//
export async function getServerSideProps(context) {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

//SWR
// Next.jsで用意されているHooks
// クライアントサイドで取得したデータをキャッシュするために使用する
