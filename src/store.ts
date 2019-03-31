import Vue from 'vue';
import Vuex from 'vuex';
import { ItemPurchase } from '@/game/Models/item';
import createPersistedState from 'vuex-persistedstate';
import GameConfig from './game/game-config';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    startDate: new Date(),
    lastUpdate: new Date(),
    clickAmountPercentageOfDps: 0,
    clickMultiplier: 1,
    declaraties: 0,
    totalDeclaraties: 0,
    declaratieIncrease: 0,
    declaratieClicks: 0,
    herdeclaratieClicks: 0,
    facturen: 0,
    facturenIncrease: 0,
    afgekeurdeDeclaraties: 0,
    totalAfgekeurdeDeclaraties: 0,
    failureChance: 0,
    dps: 0,
    rps: 0,
    loggedIn: true,
    devmode: false,
    items: GameConfig.ItemsStartingState,
    unlocks: GameConfig.UnlockStartingState,
  },
  mutations: {
    update(state) {
      state.lastUpdate = new Date();
      const triggers = state.unlocks.filter((x) => !x.unlocked).map((u) => GameConfig.GetUnlock(u.id).Trigger);
      const unlocks = GameConfig.GetUnlocks(state.declaratieClicks, state.herdeclaratieClicks, state.dps, state.items, triggers);
      for(const unlock of unlocks) {
        const unlockState = state.unlocks.filter((u) => u.id === unlock)[0];
        unlockState.unlocked = true;
      }
      const add = (a: number, b: number) => a + b;
      const dps = state.items.map((i) => GameConfig.GetItem(i.itemId).GetDps(i.amount, i.dpsMultiplier)).reduce(add);
      state.dps = Number(dps.toFixed(1));
      state.declaratieIncrease += dps;
      const declaratieIncreaseInt = Math.trunc(state.declaratieIncrease);
      state.declaratieIncrease = Number((state.declaratieIncrease - declaratieIncreaseInt).toFixed(2));
      state.failureChance = Math.max(0, state.items.map((i) => GameConfig.GetItem(i.itemId).GetFailureChanceMultiplier(i.amount) * i.failureChanceMultiplier).reduce(add, 0));
      state.declaraties += declaratieIncreaseInt;

      if(state.failureChance > 0) {
        for(let i = 0; i < dps; i++){
          const rand = Math.random();
          if(rand < state.failureChance) {
            state.declaraties--;
            state.afgekeurdeDeclaraties++;
            state.totalAfgekeurdeDeclaraties++;
          } else {
            state.totalDeclaraties++;
          }
        }
      } else {
        state.totalDeclaraties += declaratieIncreaseInt;
      }
    },
    purchase(state, item: ItemPurchase) {
      const itmState = state.items.filter(i => i.itemId === item.itemId)[0];
      const itm = GameConfig.GetItem(item.itemId);
      const cost = itm.GetPrice(itmState.amount);
      const unlocked = itmState.unlocked;
      if (unlocked && state.declaraties >= cost) {
        state.declaraties -= cost;
        itmState.amount++;
      }
    },
    purchaseUnlock(state, id: string) {
      const unlockState = state.unlocks.filter((i) => i.id === id)[0];
      const unlock = GameConfig.GetUnlock(id);
      const cost = unlock.Price;
      const unlocked = unlockState.unlocked;
      if(unlocked && state.declaraties >= cost) {
        state.declaraties -= cost;
        unlockState.purchased = true;
        const effect = unlock.Effect;
        state.clickAmountPercentageOfDps += effect.clickDpsAmount;;
        state.clickMultiplier *= effect.clickMultiplier;
        for(let ie of effect.itemEffects) {
          const itemState = state.items.filter((i) => ie.itemId === i.itemId)[0];
          itemState.dpsMultiplier *= ie.dpsMultiplier;
          itemState.failureChanceMultiplier *= ie.failureChanceMultiplier;
        }
      }
    },
    declareer(state) {
      state.declaratieClicks++;
      const clickAmount = Math.floor((1 + state.clickAmountPercentageOfDps * state.dps) * state.clickMultiplier);
      if(state.failureChance <= 0){
        state.declaraties += clickAmount;
        state.totalDeclaraties += clickAmount;
        return;
      }
      for(let i = 0; i < clickAmount; i++) {
        if(!(Math.random() < state.failureChance)) {
          state.declaraties++;
          state.totalDeclaraties++;
        } else {
          state.afgekeurdeDeclaraties++;
          state.totalAfgekeurdeDeclaraties++;
        }
      }
    },
    herdeclareren(state) {
      state.herdeclaratieClicks++;
      const amount = Math.floor((1 + state.clickAmountPercentageOfDps * state.dps) * state.clickMultiplier);
      if (state.afgekeurdeDeclaraties >= amount) {
        state.afgekeurdeDeclaraties -= amount;
        state.declaraties += amount;
        state.totalDeclaraties += amount;
      } else {
        state.declaraties += state.afgekeurdeDeclaraties;
        state.totalDeclaraties += state.afgekeurdeDeclaraties;
        state.afgekeurdeDeclaraties = 0;
      }
    },
    toggleDevmode(state) {
      state.devmode = !state.devmode;
    },
    setDeclaraties(state, value: number) {
      state.declaraties = value;
    },
    setAfgekeurdeDeclaraties(state, value: number) {
      state.afgekeurdeDeclaraties = value;
    },
  },
  actions: {

  },
  plugins: [createPersistedState({

  })],
});
