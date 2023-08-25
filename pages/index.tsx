import Layout from "@components/layouts/main";
import Main from "@components/banners/main";
import Journey from "@components/banners/journey";
import Functionalities from "@components/banners/functionalities";
import Promote from "@components/banners/promote";
import ContactUs from "@components/banners/contactUs";

export default function Home() {
  return (
    <Layout>
      <Main />
      <Journey />
      <Functionalities />
      <Promote />
      <ContactUs />
    </Layout>
  )
}
