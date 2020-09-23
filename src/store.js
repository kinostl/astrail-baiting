import { writable } from "svelte/store";
import numd from "@heroiclabs/nakama-js/dist/nakama-js.umd";

function createSession() {
  const { subscribe, set } = writable(null);
  let existingSession = localStorage.getItem("sessionData");
  if (existingSession) {
    set(JSON.parse(existingSession));
  }
  return {
    subscribe,
    login: (session) => {
      localStorage.setItem("sessionData", JSON.stringify(session));
      set(session);
    },
    logout: () => {
      localStorage.removeItem("sessionData");
      set(null);
    },
  };
}

export const session = createSession();
export const client = new numd.Client("defaultkey");
