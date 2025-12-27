import {Item} from './item';
import {ITEMS_CATEGORY, NormalItem, GoodWineItem, BackstagePassesItem, LegendaryItem, SmellyItem} from './item-categories';


const ITEMS_CATEGORIES: { [key: string]: ITEMS_CATEGORY } = {
    'Good Wine': new GoodWineItem(),
    'Backstage passes for Re:Factor': new BackstagePassesItem(),
    'Backstage passes for HAXX': new BackstagePassesItem(),
    'B-DAWG Keychain': new LegendaryItem(),
    'Duplicate Code': new SmellyItem(),
    'Long Methods': new SmellyItem(),
    'Ugly Variable Names': new SmellyItem(),
};

export class GildedTros {

    constructor(public items: Array<Item>) {

    }

    updateQuality(): void {
        this.items.forEach((item) => {
            const strategy = ITEMS_CATEGORIES[item.name] || new NormalItem();
            strategy.updateQuality(item);
        });

    }
}

