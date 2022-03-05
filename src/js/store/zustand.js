import create from "zustand";

const useStore = create((set, get) => ({
  demo: [
    { background: "#888", initial: "#345", title: "This is a title." }
  ],
  people: [],
  addPeople: (person) => {
    set({
      people: get().people.concat(person)
    });
  },
  addDemoData: (item) => {
    set({
      demo: get().demo.concat([item])
    });
  },
  removeDemoData: (itemName) =>
    set({
      demo: get().demo.filter((demoItem) => {
        return demoItem.name !== itemName;
      }),
    }),
}));

export default useStore;
