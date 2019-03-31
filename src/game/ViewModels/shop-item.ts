import { Item, ItemState } from '../Models/item';

export class ShopItemViewModel {
    constructor(item: Item, state: ItemState) {
        this.Id = state.itemId;
        this.Name = item.Name;
        this.Description = item.Description;
        this.Owned = state.amount
        this.Price = item.GetPrice(state.amount);
        this.Unlocked = state.unlocked;
        this.item = item;
        this.state = state;
    }
    private item: Item;
    private state: ItemState;

    public Id: string;
    public Name: string;
    public Description: string;
    public Owned: number;
    public Price: number;
    public Unlocked: boolean;
    public get Dps(): number {
        return this.item.BaseCps * this.state.dpsMultiplier;
    }
}