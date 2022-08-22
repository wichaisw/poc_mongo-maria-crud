import { ObjectID } from "typeorm";
import { mongoDataSource } from "../utils/database";
import { User } from "./user.entity";


async function getAllUser() {
  return await mongoDataSource.getMongoRepository(User).find();
}

async function getUserById(id: ObjectID) {
  console.log('HIT SERVICE')
  return await mongoDataSource.getMongoRepository(User).findOneBy(id);
}

async function createUser(user: User) {
  return await mongoDataSource.getMongoRepository(User).save(user);
}



export {
  getAllUser,
  getUserById,
  createUser
}