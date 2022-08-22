import { mongoDataSource } from "../utils/database";
import { User } from "./user.entity";


async function getAllUser() {
  // return await mongoDataSource.getMongoRepository(User).find();
  // return await mongoDataSource.getRepository(User).find();
}

async function createUser(user: User) {
  return await mongoDataSource.getMongoRepository(User).save(user);
}

export {
  getAllUser,
  createUser
}