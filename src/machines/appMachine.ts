import { createMachine } from "xstate";

export const appMachine = createMachine({
  id: "app",
  initial: "main",
  states: {
    main: { on: { TOGGLE: "browse" } },
    browse: { on: { TOGGLE: "main" } },
  },
});
