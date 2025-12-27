import {NormalItem,GoodWineItem,BackstagePassesItem,LegendaryItem,SmellyItem} from './item-categories.js';

const ITEMS_CATEGORIES = {
  'Good Wine': new GoodWineItem(),
  'Backstage passes for Re:Factor': new BackstagePassesItem(),
  'Backstage passes for HAXX': new BackstagePassesItem(),
  'B-DAWG Keychain': new LegendaryItem(),
  'Duplicate Code': new SmellyItem(),
  'Long Methods': new SmellyItem(),
  'Ugly Variable Names': new SmellyItem(),
};

export class GildedTros {
  constructor(items) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => {
      const category = ITEMS_CATEGORIES[item.name] || new NormalItem();
      category.updateQuality(item);
    });
  }

}