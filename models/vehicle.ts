import {
  Column,
  DataType,
  Table,
  Model,
  ForeignKey,
} from "sequelize-typescript";
import IVehicle from "../dto/vehicle.dto";
import Player from "./player";

@Table({ tableName: "vehicles" })
class Vehicle extends Model<Vehicle, IVehicle> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  public id!: number;

  @Column({ type: DataType.STRING(32), allowNull: false })
  public name!: string;

  @Column({ type: DataType.STRING(64), allowNull: false })
  public hash!: string;

  @ForeignKey(() => Player)
  @Column({ type: DataType.INTEGER, allowNull: false })
  public playerId!: number;

  toJSON(): any {
    return { ...this.get() };
  }
}

export default Vehicle;
