import { prisma } from "../config/prisma";
import bcrypt from "bcryptjs";
import { SignupDTO, LoginDTO } from "../dto/auth.dto";
import { User } from "@prisma/client";

export const registerUser = async (data: SignupDTO): Promise<User> => {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  return prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
    },
  });
};

export const validateUser = async (data: LoginDTO): Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (user && (await bcrypt.compare(data.password, user.password))) {
    return user;
  }

  return null;
};
