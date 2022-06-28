import Container from "../components/Container";
import Head from "next/head";
import fetch from "isomorphic-fetch";
import Users from "../components/Users";

const Index = (props) => {
  return (
    <div>
      <Head>
        <title>Next.js Project - Home</title>
      </Head>
      <Container>
        <h1>Next</h1>
        <Users users={props.users} />
      </Container>
    </div>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch("https://reqres.in/api/users");
  const resJSON = await res.json();
  return { users: resJSON.data };
};

export default Index;
