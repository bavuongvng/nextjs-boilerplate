import SampleComponent from "../components/SampleComponent";
import { parseCookies, setCookie, destroyCookie } from "nookies";

export default function Home({ cookies }) {
  console.log({ cookies });

  return <SampleComponent title="Index Page" linkTo="/other" />;
}

export async function getServerSideProps(ctx) {
  const cookies = parseCookies(ctx);
  console.log({ cookies });

  // Set
  setCookie(ctx, "fromGetServerSideProps", "value", {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });

  return {
    props: { cookies },
  };
}
