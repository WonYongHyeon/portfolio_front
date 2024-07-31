import dynamic from "next/dynamic";
import Header from "../src/component/header/header.container";
import Footer from "../src/component/footer/footer.container";

const NotFound = dynamic(
  () => import("../src/component/404/notfound.container"),
  {
    ssr: false,
  }
);

export default function Custom404Page() {
  return (
    <>
      <Header></Header>
      <NotFound></NotFound>
      <Footer></Footer>
    </>
  );
}
