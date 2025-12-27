const MIN_QUALITY = 0;
const MAX_QUALITY = 50;

export class NormalItem {
  updateQuality(item) {
    item.sellIn--;
    let degrade = item.sellIn < 0 ? 2 : 1;
    if (item.quality > MIN_QUALITY) item.quality -= degrade;
  }
}

export class GoodWineItem {
  updateQuality(item) {
    item.sellIn--;
    let increase = item.sellIn < 0 ? 2 : 1;
    if (item.quality < MAX_QUALITY) item.quality += increase;
  }
}

export class BackstagePassesItem {
  updateQuality(item) {
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

export class LegendaryItem {
  updateQuality(item) {
    item.quality = 80;
  }
}

export class SmellyItem {
  updateQuality(item) {
    item.sellIn--;
    let degrade = item.sellIn < 0 ? 4 : 2;
    if(item.quality > MIN_QUALITY) item.quality -= degrade;
  }
}