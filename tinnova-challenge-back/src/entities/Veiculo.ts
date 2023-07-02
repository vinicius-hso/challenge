// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   CreateDateColumn,
//   UpdateDateColumn,
//   ManyToOne,
//   JoinColumn
// } from "typeorm";

// import Marca from "./Marca";

// @Entity("veiculos")
// export default class Veiculo {
//   @PrimaryGeneratedColumn("uuid")
//   id!: string;

//   @Column({ length: 20 })
//   veiculo!: string;

//   // @ManyToOne(() => Marca, (marca) => marca.id)
//   @ManyToOne(() => Marca, { eager: true })
//   @JoinColumn({ name: "marcaId" }) //
//   marcaId!: Marca;

//   @Column({ length: 4 })
//   ano!: string;

//   @Column({ length: 20 })
//   cor!: string;

//   @Column({ type: "text", nullable: true })
//   descricao!: string | null;

//   @Column({ default: false })
//   vendido!: boolean;

//   @CreateDateColumn({ type: "timestamp" })
//   criado!: Date;

//   @UpdateDateColumn({ type: "timestamp" })
//   atualizado!: Date;
// }

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import Marca from "./Marca";

@Entity("veiculos")
export default class Veiculo {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ length: 20 })
  veiculo!: string;

  @ManyToOne(() => Marca, { eager: true })
  @JoinColumn({ name: "marca_id" })
  marca!: Marca;

  @Column({ length: 4 })
  ano!: string;

  @Column({ length: 20 })
  cor!: string;

  @Column({ type: "text", nullable: true })
  descricao!: string | null;

  @Column({ default: false })
  vendido!: boolean;

  @CreateDateColumn({ type: "timestamp" })
  criado!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  atualizado!: Date;
}
