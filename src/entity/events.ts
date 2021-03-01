import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, }
    from "typeorm";

@Entity()
export class Event {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    client_id: number;

    @Column()
    vehicle: string;

    @Column({
        type: 'jsonb',
        array: false,
        nullable: false,
    })
    public third_party!: Array<{
        name: string,
        cpf: string,
        vehicle: string,
        city: string,
        state: string,
    }>;

    @CreateDateColumn()
    created_date: Date;

    @CreateDateColumn()
    updated_at: Date;

}
