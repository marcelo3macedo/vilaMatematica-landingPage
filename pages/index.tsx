import Layout from "@components/layouts/main";
import Main from "@components/banners/main";
import Journey from "@components/banners/journey";
import Functionalities from "@components/banners/functionalities";

export default function Home() {
  return (
    <Layout>
      <Main />
      <Journey />
      <Functionalities />
    </Layout>
  )
}
