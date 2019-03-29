export class Item {
    private id!: string;
    private description!: string;
    private name!: string;
    private baseCost!: number;
    private owned: number = 0;
    private multiplier!: number;
    private baseFps!: number;
    private baseDps!: number;
    private baseFailureChanceMultiplier!: number;
    private fpsMultiplier: number = 1;
    private dpsMultiplier: number = 1;
    private unlocked: boolean = true;

    public constructor(id: string, name: string, description: string, baseCost: number, baseFps: number,
        baseDps: number, multiplier?: number | undefined,
        baseFailureChanceMultiplier?: number | undefined) {
        this.id = id;
        this.description = description;
        this.name = name;
        this.baseCost = baseCost;
        this.baseFps = baseFps;
        this.baseDps = baseDps;
        this.multiplier = multiplier ? multiplier : 1.15;
        this.baseFailureChanceMultiplier = baseFailureChanceMultiplier ? baseFailureChanceMultiplier : 0;
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

    public get Owned(): number {
        return this.owned;
    }

    public get Price(): number {
        return Math.floor(this.baseCost * Math.pow(this.multiplier, this.owned));
    }

    public get Fps(): number {
        return this.owned * this.baseFps * this.fpsMultiplier;
    }

    public get Dps(): number {
        return this.owned * this.baseDps * this.dpsMultiplier;
    }

    public get Unlocked(): boolean {
        return this.unlocked;
    }

    public get FailureChanceMultiplier(): number {
        return this.owned * this.baseFailureChanceMultiplier;
    }

    public purchase(amount: number): void {
        this.owned += amount;
    }

    public unlock(): void {
        this.unlocked = true;
    }
}
