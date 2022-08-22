import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'users', database: "mongo-crud-poc" })
// @Entity()
export class User extends BaseEntity {
    @ObjectIdColumn()
    id!: ObjectID;

    // @PrimaryGeneratedColumn()
    // _id!: number

    @Column()
    firstName!: string;

    @Column()
    lastName!: string
}