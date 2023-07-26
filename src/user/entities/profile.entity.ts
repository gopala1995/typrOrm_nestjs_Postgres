import { Entity, PrimaryGeneratedColumn,Column, OneToOne } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Profile {
   @PrimaryGeneratedColumn()
    id:number 
    
    @Column()
    genders:string

    @Column()
    photos:string

    @OneToOne(() => User, (user) => user.profile) // specify inverse side as a second parameter
    user: User
}