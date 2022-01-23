import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

//動的な静的ファイル生成 SSG with Dynamic route
//mdファイルのファイル名でファイルを取得する

//getStaticPropsで取得したpostDataを展開する
//idはファイル名
export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}

//静的なファイルを生成する
//postsフォルダのmdファイルを事前ビルドするときに準備する
//pathsは事前ビルドするパス対象を指定するパラメータ
//path {params:{id: "ssg-ssr"}},{params:{id: "pre-rendering"}}
//fallbackは事前ビルドしたパス以外にアクセスした時の動作
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false, // 指定パス以外なら404を返す
  };
}

//静的に読み込むファイルの中身と場所を取得する
//getPostDataの使用場所は lib/posts.js
//返り値はオブジェクト型でpropsのキーを持つ
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
