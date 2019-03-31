import { ItemState } from './item';

export class Unlock {
    constructor(id: string, name: string, description: string, price: number, effect: UnlockEffect, trigger: UnlockTrigger) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.effect = effect;
        this.trigger = trigger;
        this.trigger.id = id;
    }

    private id: string;
    private name: string;
    private description: string;
    private price: number;
    private effect: UnlockEffect;
    private trigger: UnlockTrigger;

    public get Id(): string {
        return this.id;
    }

    public get Name(): string {
        return this.name;
    }

    public get Description(): string {
        return this.description;
    }

    public get Price(): number {
        return this.price;
    }

    public get Effect(): UnlockEffect {
        return this.effect;
    }

    public get Trigger(): UnlockTrigger {
        return this.trigger;
    }
}

export interface UnlockTrigger {
    id?: string;
    minDeclaratieClicks?: number | undefined;
    minHerdeclaratieClicks?: number | undefined;
    minDps?: number | undefined;
    minItemAmount?: ItemTrigger | undefined;
}

export interface UnlockState {
    id: string;
    unlocked: boolean;
    purchased: boolean | undefined;
}

export interface UnlockEffect {
    clickDpsAmount: number;
    clickMultiplier: number;
    itemEffects: ItemEffect[];
}

export interface ItemEffect {
    itemId: string;
    dpsMultiplier: number;
    failureChanceMultiplier: number;
}

export interface ItemTrigger {
    itemId: string;
    amount: number;
}