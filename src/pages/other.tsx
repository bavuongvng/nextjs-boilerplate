import SampleComponent from "../components/SampleComponent";
import { parseCookies, setCookie, destroyCookie } from "nookies";

export default function Other({ cookies }) {
  console.log({ cookiesOther: cookies });

  return <SampleComponent title={"Other Page"} linkTo="/" />;
}

export async function getServerSideProps(ctx) {
  const cookies = parseCookies(ctx);
  console.log({ cookies });

  return {
    props: { cookies },
  };
}
