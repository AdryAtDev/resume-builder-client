import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", {
  state: () => {
    return {
      locale: "en",
    };
  },
  actions: {
    changeLocale(newLocale){
      this.locale = newLocale
    }
  }
});
