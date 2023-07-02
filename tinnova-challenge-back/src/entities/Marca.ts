// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   CreateDateColumn,
//   UpdateDateColumn,
//   OneToMany,
//   ManyToOne
// } from "typeorm";

// import Veiculo from "./Veiculo";

// @Entity("marcas")
// export default class Marca {
//   @PrimaryGeneratedColumn("uuid")
//   id!: string;

//   @Column({ length: 100 })
//   nome!: string;

//   @Column({ length: 20 })
//   nacionalidade!: string;

//   @CreateDateColumn({ type: "timestamp" })
//   criado!: Date;

//   @UpdateDateColumn({ type: "timestamp" })
//   atualizado!: Date;

//   // @ManyToOne(() => Veiculo, (veiculo) => veiculo.marcaId)
//   // veiculo: Veiculo;

//   // @OneToMany(() => Veiculo, (veiculo) => veiculo.marcaId, {cascade: true})
//   // veiculos!: Veiculo[]
// }

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("marcas")
export default class Marca {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ length: 100 })
  nome!: string;

  @Column({ length: 20 })
  nacionalidade!: string;

  @CreateDateColumn({ type: "timestamp" })
  criado!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  atualizado!: Date;
}
