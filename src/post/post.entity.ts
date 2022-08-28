import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity({ name: 'posts', database: "mongo-crud-poc" })
export class Post extends BaseEntity {
    @ObjectIdColumn()
    id!: ObjectID;

    @Column()
    message!: string;

    @Column()
    like!: number;

    @CreateDateColumn()
    createdAt!: Date;
    
    @UpdateDateColumn()
    updatedAt!: Date;
}