import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'users', database: "mongo-crud-poc" })
export class User extends BaseEntity {
    @ObjectIdColumn()
    id!: ObjectID;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string
}