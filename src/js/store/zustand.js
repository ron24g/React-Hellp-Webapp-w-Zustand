import create from "zustand";

const useStore = create((set, get) => ({
    people: [], 
  vehicles: [],
  planets: [],
  addPeople: (person) => {
    set({
      people: get().people.concat(person)
    });
  },
  addVehicles: (vehicle) => {
    set({
      vehicles: get().vehicles.concat(vehicle)
    });
  },
  addPlanets: (planets) => {
    set({
      planets: get().planets.concat(planets)
    });
  },
}));

export default useStore;
