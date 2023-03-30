import vehicleRepository from "../repositories/vehicle.repository";

class VehicleService {
  async getVehicleHashes(): Promise<void> {
    try {
      const hashes = await vehicleRepository.findAllHashes();
      console.log({ vehicles: hashes.map((hash) => ({ hash })) });
    } catch (error) {
      throw new Error(`Ошибка: ${error}`);
    }
  }
}

export default new VehicleService();
