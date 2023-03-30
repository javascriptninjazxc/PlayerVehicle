import { Column, DataType, Table, Model, HasMany, Sequelize } from "sequelize-typescript";
import {IPlayer} from "../dto/player.dto";
import Vehicle from "./vehicle";

@Table({ tableName: "users" })
export class Player extends Model<Player, IPlayer> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id!: number;

  @Column({ type: DataType.STRING(32), allowNull: false })
  name!: string;

  @Column({ type: DataType.DATE, allowNull: false })
  createdAt!: Date;

  @HasMany(() => Vehicle)
  vehicles!: Vehicle[];
}

export default Player;