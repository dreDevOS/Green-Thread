import { parse } from "mongodb+srv://dwaynemclaren:NNA4rWX9miukbc6s@cluster0.azczv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export default ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));

  return {
    connection: {
      client: "MongoDB",
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl: { rejectUnauthorized: false },
      },
      debug: false,
    },
  };
};
