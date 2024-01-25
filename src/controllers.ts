import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const client = new PrismaClient();

interface userI {
  name: string,
  email: string,
  birth: Date,
}

const createUser = async (body: userI, res: Response) => {
  const newUser = await client.user.create({
    data: body
  })

  res.status(201).send(newUser)
}

const findUser = async (id: string, res: Response) => {
  const user = await client.user.findUnique({
    where: {
      id
    }
  })

  if (user) {
    res.status(200).send(user)
  } else {
    res.status(404).send()
  }
}

const updateUser = async (id: string, user: userI, res: Response) => {
  const updatedUser = await client.user.update({
    where: {
      id
    },
    data: user
  })

  res.status(200).send(updatedUser);
}

const deleteUser = async (id: string, res: Response) => {
  const result = await client.user.delete({
    where: {
      id
    }
  })

  res.status(200).send(result);
}

export = {
  createUser,
  findUser,
  updateUser,
  deleteUser
}
