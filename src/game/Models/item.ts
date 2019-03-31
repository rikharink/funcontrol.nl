export class Item {
    private id!: string;
    private description!: string;
    private name!: string;
    private baseCost!: number;
    private multiplier!: number;
    private baseDps!: number;
    private baseFailureChanceMultiplier!: number;

    public constructor(id: string, name: string, description: string, baseCost: number, baseCPS: number,
        baseFailureChanceMultiplier?: number | undefined,
        multiplier?: number | undefined,
        ) {
        this.id = id;
        this.description = description;
        this.name = name;
        this.baseCost = baseCost;
        this.baseDps = baseCPS;
        this.baseFailureChanceMultiplier = baseFailureChanceMultiplier ? baseFailureChanceMultiplier : 0;
        this.multiplier = multiplier ? multiplier : 1.15;
    }

    public get Id(): string {
        return this.id;
    }

    public get Description(): string {
        return this.description;
    }

    public get Name(): string {
        return this.name;
    }

    public get BaseCps(): number {
        return this.baseDps;
    }

    public GetPrice(owned: number): number {
        return Math.floor(this.baseCost * Math.pow(this.multiplier, owned));
    }

    public GetDps(owned: number, dpsMultiplier: number = 1): number {
        return owned * this.baseDps * dpsMultiplier;
    }
    
    public GetFailureChanceMultiplier(owned: number): number {
        return owned * this.baseFailureChanceMultiplier;
    }
}

export interface ItemState {
    itemId: string;
    unlocked: boolean;
    amount: number;
    dpsMultiplier: number;
    failureChanceMultiplier: number;
}

export interface ItemPurchase {
    itemId: string;
    amount: number;
}