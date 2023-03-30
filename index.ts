import { Sequelize } from "sequelize-typescript";
import Player from "./models/player";
import Vehicle from "./models/vehicle";
import playerService from "./services/player.service";
import vehicleService from "./services/vehicle.service";

const connection = new Sequelize({
  database: "test",
  username: "postgres",
  password: "123123asd",
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  models: [Player, Vehicle],
});

async function initializeDatabase(): Promise<void> {
  try {
    await connection.authenticate();
    console.log("Соединение установлено.");
  } catch (error) {
    console.error("Ошибка соединения:", error);
  }
}

async function addPlayer(): Promise<void> {
  const playersCount: number = await Player.count();
  if (playersCount === 0) {
    const players: Player[] = await Player.bulkCreate([
      { name: "Федор Учиха" },
      { name: "Дмитрий Сенджу" },
      { name: "Фсаске Учиха" },
    ]);

    await Vehicle.bulkCreate([
      { name: "Sultan", hash: "x2213", playerId: players[0].id },
      { name: "Banshee", hash: "x1233", playerId: players[1].id },
    ]);
  }
}

initializeDatabase();

connection.sync().then(async () => {
  await addPlayer();
  await playerService.getPlayerWithVehicles(1);
  await vehicleService.getVehicleHashes();
  await playerService.getPlayerWithName('Ф');
})

export { connection, Player, Vehicle };
