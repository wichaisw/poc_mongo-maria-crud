import fastify, { FastifyReply, FastifyRequest } from 'fastify';
import "reflect-metadata";

import userRouter from './user/user.router';
import * as dotenv from 'dotenv';
import { mongoDataSource } from './utils/database';
dotenv.config();

const PORT: number = Number(process.env.PORT) || 8000;

mongoDataSource
  .initialize()
  .then(() => {
    console.log("Mongo Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Mongo Data Source initialization: ", err)
  })

const server = fastify()

server.register(userRouter, {prefix: '/users'});

server.listen({ port: PORT, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})