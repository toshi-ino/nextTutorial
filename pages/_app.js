// _app.jsは全ページに適用させたいものを記述する。例えばauthコンポーネントなど
// _app.jsでcssモジュールを読み込めば全てのコンポーネントにcssを適用させる
// 全ページ共通のレイアウトを組み込む
// _app.jsをpageディレクトリの直下に置くこと

import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
