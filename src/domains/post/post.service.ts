import { ObjectID } from "typeorm";
import { ObjectId } from 'mongodb';
import { mongoDataSource } from "../../utils/database";
import { Post } from "./post.entity";

async function getAllPost() {
  return await mongoDataSource.getMongoRepository(Post).find();
}

async function getPostById(postId: ObjectID) {
  return await mongoDataSource.getMongoRepository(Post).findOneBy({_id: ObjectId(postId)});
}

async function createPost(post: Post) {
  return await mongoDataSource.getMongoRepository(Post).save(post);
}

async function updatePostById(postId: ObjectID, post: Post) {
  return await(await mongoDataSource.getMongoRepository(Post).findOneAndUpdate(
      {_id: new ObjectId(postId)}, 
      {$set: post}, 
      {returnOriginal: false}
    )).value;
}

async function deletePostById(postId: ObjectID) {
  return await mongoDataSource.getMongoRepository(Post).findOneAndDelete({_id: new ObjectId(postId)});
}

export {
  getAllPost,
  getPostById,
  createPost,
  updatePostById,
  deletePostById,
}