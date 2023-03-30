import Vehicle from "../models/vehicle";

class VehicleRepository {
  async findAllHashes(): Promise<string[]> {
    const vehicles: Vehicle[] = await Vehicle.findAll({ attributes: ["hash"] });
    return vehicles.map((vehicle) => vehicle.hash);
  }
}

export default new VehicleRepository();