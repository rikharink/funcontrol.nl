import { Item, ItemState } from './Models/item';
import { Unlock, UnlockState, UnlockTrigger } from './Models/unlock';

export default class GameConfig {
    public static AvailableItems: Item[] = [
        new Item("item1", "willekeurige voorbijganger", "lorem", 15, 0.1, 0.005),
        new Item("item2", "werkstudent", "ipsum", 100, 0.5, 0.0035),
        new Item("item3", "developer", "ipsum", 500, 4, 0.002),
        new Item("item4", "analist", "ipsum", 3000, 10, 0.002),
        new Item("item5", "functioneel tester", "ipsum", 10000, 42, -0.01),
        new Item("item6", "test-automatiseerder", "ipsum", 40000, 112, -0.02),
        new Item("item7", "declaratie-robot", "ipsum", 212121, 420, -0.04),
        new Item("item8", "declaratie-botnet", "ipsum", 1666666, 7000, -0.08),
        new Item("item9", "declaratie-swarm", "ipsum", 123456789, 98765, -0.16),
        new Item("item10", "quantum-declaratie-swarm", "ipsum", 4000000000, 999999, -0.25),
        new Item("item11", "declaratie-singularity", "ipsum", 75000000000, 13371337, -0.333),
    ];

    public static AvailableUnlocks: Unlock[] = [
        new Unlock("unlock1", "UX Lab", "Voorbijgangers worden 2x zo effectief door inzet van een comfortabel UX Lab", 150, {
            clickDpsAmount: 0,
            clickMultiplier: 1,
            itemEffects: [{
                itemId: "item1",
                dpsMultiplier: 2,
                failureChanceMultiplier: 1,
            }]}, 
            {
                minItemAmount: {
                    itemId: "item1",
                    amount: 5,
                }
            }),
        new Unlock("unlock2", "Saxion", "Door slimme onderhandelingen met Saxion zijn je werkstudenten vaker vrij en 2x zo effectief", 1000, {
            clickDpsAmount: 0,
            clickMultiplier: 1,
            itemEffects: [{
                itemId: "item2",
                dpsMultiplier: 2,
                failureChanceMultiplier: 1,
            }]},
            {
                minItemAmount: {
                    itemId: "item2",
                    amount: 5,
                }
            }),
        new Unlock("unlock3", "Tafelvoetbal", "Strategische inzet van tafelvoetbaltafels verdubbeld de effectiviteit van je developers", 2000, {
            clickDpsAmount: 0,
            clickMultiplier: 1,
            itemEffects: [{
                itemId: "item3",
                dpsMultiplier: 2,
                failureChanceMultiplier: 0.8,
            }]},
            {
                minItemAmount: {
                    itemId: "item3",
                    amount: 2,
                }
            }),
        new Unlock("unlock4", "Zorg & Ict", "Je analisten zijn geinspireerd door de Zorg & ICT beurs en hun effectiviteit verdubbeld", 10000, {
            clickDpsAmount: 0,
            clickMultiplier: 1,
            itemEffects: [{
                itemId: "item4",
                dpsMultiplier: 2,
                failureChanceMultiplier: 0.9,
            }]},
            {
                minItemAmount: {
                    itemId: "item4",
                    amount: 2,
                }
            }),
        new Unlock("unlock5", "TMAP", "Je functioneel testers hebben allemaal TMAP gedaan en testen nu dubbel zo hard", 40000, {
            clickDpsAmount: 0,
            clickMultiplier: 1,
            itemEffects: [{
                itemId: "item5",
                dpsMultiplier: 2,
                failureChanceMultiplier: 1,
            }]},
            {
                minItemAmount: {
                    itemId: "item5",
                    amount: 2,
                }
            }),
        new Unlock("unlock6", "Katalon", "Je weet samen met je test automatiseerders Katalon succesvol in te zetten en verdubbeld de test snelheid", 100000, {
            clickDpsAmount: 0,
            clickMultiplier: 1,
            itemEffects: [{
                itemId: "item6",
                dpsMultiplier: 2,
                failureChanceMultiplier: 1,
            }]},
            {
                minItemAmount: {
                    itemId: "item6",
                    amount: 2,
                }
            }),
        new Unlock("unlock7", "IMPACT", "IMPACT 2.5", 2525252, {
            clickDpsAmount: 0.0025,
            clickMultiplier: 2.5,
            itemEffects: [{
                itemId:"item2",
                dpsMultiplier: 2.5,
                failureChanceMultiplier: 1,
            },
            {
                itemId:"item3",
                dpsMultiplier: 2.5,
                failureChanceMultiplier: 1,
            },
            {
                itemId:"item4",
                dpsMultiplier: 2.5,
                failureChanceMultiplier: 1,
            },
            {
                itemId:"item5",
                dpsMultiplier: 2.5,
                failureChanceMultiplier: 1,
            },
            {
                itemId:"item6",
                dpsMultiplier: 2.5,
                failureChanceMultiplier: 1,
            },
            ]},
            {
                minDps: 4242
            }),
        new Unlock("click1", "UX Verbetering", "Door UX verbeteringen is klikken twee keer zo effectief", 50, {
            clickDpsAmount: 0,
            clickMultiplier: 2,
            itemEffects: [],
        }, {
            minDeclaratieClicks: 25
        }),
        new Unlock("click2", "Design Thinking", "Structurele inzet van design thinking zorgt ervoor dat je 5% van je dps per klik erbij krijgt.", 5000, {
            clickDpsAmount: 0.05,
            clickMultiplier: 1,
            itemEffects: [],
        }, {
            minItemAmount: {
                itemId: "item4",
                amount: 1
            }
        })
    ];

    public static UnlockStartingState: UnlockState[] = GameConfig.AvailableUnlocks.map(GameConfig.GetStartStateUnlock)

    public static ItemsStartingState: ItemState[] = GameConfig.AvailableItems.map(GameConfig.GetStartingStateItem);

    public static GetStartingStateItem(i: Item): ItemState {
        return {
            itemId: i.Id,
            unlocked: true,
            amount: 0,
            dpsMultiplier: 1,
            failureChanceMultiplier: 1,
        };
    }

    public static GetStartStateUnlock(i: Unlock): UnlockState {
        return {
            id: i.Id,
            unlocked: false,
            purchased: false,
        };
    }
    public static GetItem(id: string): Item {
        return GameConfig.AvailableItems.filter((i) => i.Id === id)[0];
    }

    public static GetUnlock(id: string): Unlock {
        return GameConfig.AvailableUnlocks.filter((i) => i.Id === id)[0];
    }

    public static GetUnlocks(declaratieClicks: number, herdeclaratieClicks: number, dps: number, items: ItemState[], triggers: UnlockTrigger[]): string[] {
        return triggers.filter((t) => {
            let succes = true;
            if (t.minDeclaratieClicks) {
                succes = succes && declaratieClicks >= t.minDeclaratieClicks;
            }
            if (t.minHerdeclaratieClicks) {
                succes = succes && herdeclaratieClicks >= t.minHerdeclaratieClicks;
            }
            if (t.minDps) {
                succes = succes && dps >= t.minDps;
            }
            if(t.minItemAmount) {
                const id = t.minItemAmount.itemId;
                const item = items.filter((i) => i.itemId === id)[0];
                succes = succes && item.amount >= t.minItemAmount.amount
            }
            return succes && t.id;
        }).map((t) => t.id ? t.id : "");
    }
}