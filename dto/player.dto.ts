interface IPlayer {
  name: string;
}

interface IPlayerWithVehicle {
  id: number;
  name: string;
  vehicles: {
    id: number;
    name: string;
    hash: string;
  }[];
}

export {IPlayer, IPlayerWithVehicle};
