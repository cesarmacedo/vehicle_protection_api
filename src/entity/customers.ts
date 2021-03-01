import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, }
    from "typeorm";

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column()
    crlv: string;

    @Column()
    vehicle: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @CreateDateColumn()
    created_date: Date;

    @CreateDateColumn()
    updated_at: Date;

}
