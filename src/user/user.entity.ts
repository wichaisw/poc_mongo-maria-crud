import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, } from "typeorm"

@Entity({ name: 'users', database: "maria_crud_poc" })
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({type: 'int'})
    id!: number;

    @Column({name: 'first_name', type: 'varchar', width: 255})
    firstName!: string;

    @Column({name: 'last_name', type: 'varchar', width: 255})
    lastName!: string

    @CreateDateColumn({name: 'created_at', type: 'datetime'})
    createdAt!: Date;
    
    @UpdateDateColumn({name: 'updated_at', type: 'datetime'})
    updatedAt!: Date;
}