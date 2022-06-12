import { PrismaClient } from "@prisma/client";

import Head from "next/head";
import Navbar from "../components/navbar";

import Footer from "../components/footer";
import Container from "../components/container";
import Datatable from "../components/datatable";

export default function Admin({ student, adminUser }) {
  return (
    <div>
      <Head>
        <title>ADMIN | UCS</title>
        <meta name="description" content="UODA Computer Society" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div></div>
      <Navbar isLogin={true} user={adminUser} />
      <Container className="flex w-full justify-center flex-wrap lg:gap-10 lg:flex-nowrap pt-20 pb-10 transition-all ease-in-out delay-150">
        <div className="flex flex-col justify-center items-center w-full h-full px-10 rounded-2xl py-10 bg-trueGray-800">
          <h1 className="text-3xl text-left pb-5 w-full">
            Student application list
          </h1>
          <Datatable data={student} />
        </div>
      </Container>
      <Footer />
    </div>
  );
}
export const getServerSideProps = async (ctx) => {
  const prisma = new PrismaClient();
  const myCookie = ctx.req?.cookies || "";
  if (!myCookie) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const getToken = myCookie.ucs_token;
  const token = getToken === undefined ? "user~token" : getToken.split("~");
  const studentRes = await prisma.student.findMany();
  const isAdmin = await prisma.user.findUnique({
    where: { uname: token[0] },
  });

  if (token[1] !== process.env.NEXT_PUBLIC_COOKIE_KEY) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  //   const orderRes = await axios.get("http://localhost:3000/api/orders");
  return {
    props: {
      // orders: orderRes.data,
      student: studentRes,
      adminUser: token[0],
    },
  };
};
