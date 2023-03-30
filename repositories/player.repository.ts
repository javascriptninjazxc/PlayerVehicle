import { Op } from "sequelize";
import Player from "../models/player";
import Vehicle from "../models/vehicle";

class PlayerRepository {
  async findById(id: number): Promise<Player> {
    const player = await Player.findByPk(id, { include: [Vehicle] });
    if (!player) {
      throw new Error(`Пользователь с ID: ${id} не найден!`);
    }
    return player;
  }

  async findByNameContaining(name: string): Promise<Player[]> {
    const players = await Player.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
        "$vehicles.id$": null
      },
      include: [
        {
          model: Vehicle,
          required: false,
        },
      ],
    });
    return players;
  }
}

export default new PlayerRepository();