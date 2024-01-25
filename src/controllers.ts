import { PrismaClient } from "@prisma/client";
import { Response } from "express";

const client = new PrismaClient();

interface userI {
  name: string;
  email: string;
  birth: string;
}

const createUser = async (body: userI, res: Response) => {
  const newUser = await client.user.create({
    data: {
      name: body.name,
      email: body.email,
      birth: new Date(body.birth),
    },
  });

  res.status(201).send(newUser);
};

const findAllUsers = async (res: Response) => {
  const users = await client.user.findMany();

  res.status(200).send(users);
};

const findUser = async (id: string, res: Response) => {
  const user = await client.user.findUnique({
    where: {
      id,
    },
  });

  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send();
  }
};

const updateUser = async (id: string, user: userI, res: Response) => {
  const updatedUser = await client.user.update({
    where: {
      id,
    },
    data: {
      name: user.name,
      email: user.email,
      birth: new Date(user.birth),
    },
  });

  res.status(200).send(updatedUser);
};

const deleteUser = async (id: string, res: Response) => {
  const result = await client.user.delete({
    where: {
      id,
    },
  });

  res.status(200).send(result);
};

export { createUser, findAllUsers, findUser, updateUser, deleteUser };
