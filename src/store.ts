import Vue from 'vue';
import Vuex from 'vuex';
import { Item } from './game/item';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    declaraties: 1000,
    declaratieIncrease: 0,
    facturen: 0,
    facturenIncrease: 0,
    afgekeurdeDeclaraties: 0,
    failureChance: 0,
    loggedIn: true,
    devmode: false,
    items: [new Item('test-item', 'Test Item', 'Test item please ignore', 15, 0.1, 0),
    new Item('test-item2', 'Test 2', 'Ignore me pl0x', 15, 0, 0.1)],
  },
  mutations: {
    update(state) {
      const add = (a: number, b: number) => a + b;
      const fac = state.items.map((i) => i.Fps).reduce(add, 0);
      const dec = state.items.map((i) => i.Dps).reduce(add, 0);
      state.facturenIncrease += fac;
      state.declaratieIncrease += dec;
      const facturenIncreaseInt = Math.trunc(state.facturenIncrease);
      const declaratieIncreaseInt = Math.trunc(state.declaratieIncrease);
      state.facturenIncrease = Number((state.facturenIncrease - facturenIncreaseInt).toFixed(2));
      state.declaratieIncrease = Number((state.declaratieIncrease - declaratieIncreaseInt).toFixed(2));

      state.failureChance = state.items.map((i) => i.FailureChanceMultiplier).reduce(add, 0);
      state.facturen += facturenIncreaseInt;
      if (state.facturen >= declaratieIncreaseInt) {
        state.declaraties += declaratieIncreaseInt;
        state.facturen -= declaratieIncreaseInt;
      }
    },
    purchase(state, item: string) {
      const it = state.items.filter((i) => i.Id === item)[0];
      const cost = it.Price;
      const unlocked = it.Unlocked;
      if (unlocked && state.declaraties >= cost) {
        state.declaraties -= cost;
        it.purchase(1);
      }
    },
    unlock(state, item: string) {
      state.items.filter((i) => i.Id === item)[0].unlock();
    },
    registreer(state) {
      state.facturen++;
    },
    declareer(state) {
      if (state.facturen >= 1) {
        state.facturen--;
        state.declaraties++;
      }
    },
    herdeclareren(state) {
      if (state.afgekeurdeDeclaraties >= 1) {
        state.afgekeurdeDeclaraties--;
        state.declaraties++;
      }
    },
    logIn(state) {
      state.loggedIn = true;
    },
    toggleDevmode(state) {
      state.devmode = !state.devmode;
    },
    setDeclaraties(state, value: number) {
      state.declaraties = value;
    },
    setFacturen(state, value: number) {
      state.facturen = value;
    },
    setAfgekeurdeDeclaraties(state, value: number) {
      state.afgekeurdeDeclaraties = value;
    },
  },
  actions: {

  },
  // plugins: [createPersistedState({

  // })],
});
