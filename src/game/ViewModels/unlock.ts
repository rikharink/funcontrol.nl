import { UnlockState, Unlock } from '../Models/unlock';

export class UnlockViewModel {
    constructor(state: UnlockState, unlock: Unlock) {
        this.id = state.id;
        this.name = unlock.Name;
        this.description = unlock.Description;
        this.price = unlock.Price;
    }

    private id: string;
    private name: string;
    private description: string;
    private price: number;

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
}