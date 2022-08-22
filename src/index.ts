import fastify from 'fastify';
import formBody from '@fastify/formbody';
import "reflect-metadata";

import userRouter from './user/user.router';
import * as dotenv from 'dotenv';
import { mongoDataSource } from './utils/database';
dotenv.config();

const PORT: number = Number(process.env.PORT) || 8080;

// data sources initialization 
mongoDataSource
  .initialize()
  .then(() => {
    console.log("Mongo Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Mongo Data Source initialization: ", err)
  })

const server = fastify()

// middleware & route
server.register(formBody);
server.register(userRouter, {prefix: '/users'});

server.listen({ port: PORT }, (err, address) => {
  if (err) {
    console.error('Server Error: ', err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})