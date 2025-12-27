import { Item } from './item';

const MIN_QUALITY: number = 0;
const MAX_QUALITY: number = 50;

export interface ITEMS_CATEGORY {
    updateQuality(item: Item): void;
}

export class NormalItem implements ITEMS_CATEGORY {
    updateQuality(item: Item): void {
        item.sellIn--;
        let degrade = item.sellIn < 0 ? 2 : 1;
        if (item.quality > MIN_QUALITY) item.quality -= degrade;
    }
}

export class GoodWineItem implements ITEMS_CATEGORY {
    updateQuality(item: Item): void {
        item.sellIn--;
        let increase = item.sellIn < 0 ? 2 : 1;
        if (item.quality < MAX_QUALITY) item.quality += increase;
    }
}

export class BackstagePassesItem implements ITEMS_CATEGORY {
    updateQuality(item: Item): void {
        item.sellIn--;
        if (item.sellIn < 0) {
            item.quality = 0;
        }
        else {
            if (item.quality < MAX_QUALITY) item.quality++;
            if (item.sellIn < 10 && item.quality < MAX_QUALITY) item.quality++;
            if (item.sellIn < 5 && item.quality < MAX_QUALITY) item.quality++;
        }
    }
}

export class LegendaryItem implements ITEMS_CATEGORY {
    updateQuality(item: Item): void {
        item.quality = 80;
    }
}

export class SmellyItem implements ITEMS_CATEGORY {
    updateQuality(item: Item): void {
        item.sellIn--;
        let degrade = item.sellIn < 0 ? 4 : 2;
        if (item.quality > MIN_QUALITY) item.quality -= degrade;
    }
}