import { ObjectID } from "typeorm";
import { ObjectId } from 'mongodb';
import { mongoDataSource } from "../utils/database";
import { User } from "./user.entity";

async function getAllUser() {
  return await mongoDataSource.getMongoRepository(User).find();
}

// async function getUserById(userId: ObjectID) {
async function getUserById(userId: ObjectID) {
  const userRepository = mongoDataSource.getMongoRepository(User);
  return await userRepository.findOneBy({_id: ObjectId(userId)});
}

async function createUser(user: User) {
  return await mongoDataSource.getMongoRepository(User).save(user);
}

async function updateUserById(userId: ObjectID, user: User) {
  return await mongoDataSource.getMongoRepository(User).findOneAndUpdate({_id: new ObjectId(userId)}, {$set: user} );
}

async function deleteUserById(userId: ObjectID) {
  return await mongoDataSource.getMongoRepository(User).findOneAndDelete({_id: new ObjectId(userId)});
}

export {
  getAllUser,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
}