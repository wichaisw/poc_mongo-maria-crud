import { FastifyReply, FastifyRequest } from "fastify";
import { ObjectID } from "typeorm";
import { Post } from "./post.entity";
import * as postService from './post.service';

const getAllPostController = async(request: FastifyRequest, reply: FastifyReply): Promise<Post[]> => {
  const posts: Post[] = await postService.getAllPost();
  return reply.status(200).send(posts);
}

const getPostByIdController = async(request: FastifyRequest, reply: FastifyReply): Promise<Post | null> => {
  const postObjectId: ObjectID = (<Post>request.params).id;
  const post: Post | null = await postService.getPostById(postObjectId)
  return reply.status(200).send(post);
} 

const createPostController = async(request: FastifyRequest, reply: FastifyReply): Promise<Post> => {
  const { message, like } = request.body as Post;
  const newPost = new Post();
  newPost.message = message;
  newPost.like = like;
  
  const post: Post = await postService.createPost(newPost);

  return reply.status(201).send(post);
  // const postDto = new PostDto(post.message, post.like);
  // return reply.status(201).send(postDto);
}

const updatePostController = async(request: FastifyRequest, reply: FastifyReply): Promise<Post> => {
  const { message, like } = request.body as Post;
  const postObjectId: ObjectID = (<Post>request.params).id;
  const updatedPost = new Post();
  updatedPost.message = message;
  updatedPost.like = like;

  const post: Post = await (await postService.updatePostById(postObjectId, updatedPost)).value;

  return reply.status(200).send(post);
}

const deletePostController = async(request: FastifyRequest, reply: FastifyReply): Promise<void> => {
  const postObjectId: ObjectID = (<Post>request.params).id;

  await postService.deletePostById(postObjectId);

  return reply.status(204).send();
}

export {
  getAllPostController,
  getPostByIdController,
  createPostController,
  updatePostController,
  deletePostController
}