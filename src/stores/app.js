import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", {
  state: () => {
    const i18n = {
      dashboard: {
        en: "Dashboard",
        es: "Panel de Inicio"
      }
    }

    return {
      locale: "en",
      i8n: i18n
    };
  },
  actions: {
    changeLocale(newLocale){
      this.locale = newLocale
    }
  }
});
