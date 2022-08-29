import { mariaDataSource } from "../../utils/database";
import { User } from "./user.entity";

async function getAllUser() {
  return await mariaDataSource.getRepository(User).find();
}

async function getUserById(userId: number) {
  return await mariaDataSource.getRepository(User).findOneBy({id: userId});
}

async function createUser(user: User) {
  return await mariaDataSource.getRepository(User).save(user);
}

async function updateUserById(userId: number, user: User) {
  user.id = userId;
  return await mariaDataSource.getRepository(User).save(user);
}

async function deleteUserById(userId: number) {
  return await mariaDataSource.getRepository(User).delete(userId);
}

export {
  getAllUser,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
}