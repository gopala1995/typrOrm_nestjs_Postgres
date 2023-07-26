import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile.entity";

@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    firstName:string;
    
    @Column()
    lastName:string;
    
    @Column()
    age:number;
    
    @OneToOne(()=>Profile,(profile) => profile.user)
    @JoinColumn()
    profile:Profile;
    
}
