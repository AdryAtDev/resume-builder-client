import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", {
  state: () => {
    return {
      locale: "en",
    };
  },
  actions: {
    changeLocale(newLocale){
      // console.log(newLocale)
      this.locale = newLocale
      console.log(this.locale);
    }
  }
});
