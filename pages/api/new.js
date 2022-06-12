import { PrismaClient } from "@prisma/client";
import * as argon2 from "argon2";

const prisma = new PrismaClient();

export default async (req, res) => {
  const {
    first_name,
    last_name,
    dob,
    mobile,
    department,
    studentId,
    email,
    password,
  } = req.body;
  console.log(req.body);
  try {
    const ifStudent = await prisma.student.findUnique({
      where: { email },
    });
    if (ifStudent) {
      res.status(403).json({ success: false });
    }
    const result = await prisma.student.create({
      data: {
        first_name,
        last_name,
        dob,
        mobile,
        department,
        studentId,
        email,
        password: await argon2.hash(password),
      },
    });
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(418).json({ err: "👋🏻 Kichu nai tata!", status: "418" });
  }
};
