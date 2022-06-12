import cookie from "cookie";
import { PrismaClient } from "@prisma/client";
import * as argon2 from "argon2";

const prisma = new PrismaClient();

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { username, password } = req.body;
    const getUser = await prisma.user.findUnique({
      where: { uname: username },
    });
    const verifyPass = await argon2.verify(getUser.password, password);
    if (username === getUser.uname && verifyPass) {
      const user = getUser.uname;
      res.setHeader(
        "Set-Cookie",
        cookie.serialize(
          "ucs_token",
          user + "~" + process.env.NEXT_PUBLIC_COOKIE_KEY,
          {
            maxAge: 60 * 60,
            sameSite: "strict",
            path: "/",
          }
        )
      );
      res.redirect("/admin");
    } else {
      res.status(400).json("Wrong Credentials!");
    }
  }
};

export default handler;
