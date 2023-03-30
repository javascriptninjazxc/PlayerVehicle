import PlayerRepository from "../repositories/player.repository";

class PlayerService {
  async getPlayerWithVehicles(id: number): Promise<void> {
    const player = await PlayerRepository.findById(id);
    console.log({
      id: player.id,
      name: player.name,
      vehicles: player.vehicles.map((vehicle) => ({
        id: vehicle.id,
        name: vehicle.name,
        hash: vehicle.hash,
      })),
    });
  }

  async getPlayerWithName(name: string): Promise<void> {
    const players = await PlayerRepository.findByNameContaining(name);
    console.log(players);
  }
}

export default new PlayerService();
