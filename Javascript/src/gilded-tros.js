class NormalItem {
  updateQuality(item) {
    item.sellIn--;
    let degrade = item.sellIn < 0 ? 2 : 1;
    if (item.quality > 0) item.quality -= degrade;
  }
}

class GoodWineItem {
  updateQuality(item) {
    item.sellIn--;
    let increase = item.sellIn < 0 ? 2 : 1;
    if (item.quality < 50) item.quality += increase;
  }
}

class BackstagePassesItem {
  updateQuality(item) {
    item.sellIn--;
    if (item.sellIn < 0) {
      item.quality = 0;
    }
    else {
      if (item.quality < 50) item.quality++;
      if (item.sellIn < 10 && item.quality < 50) item.quality++;
      if (item.sellIn < 5 && item.quality < 50) item.quality++;
    }
  }
}

class LegendaryItem {
  updateQuality(item) {
    item.quality = 80;
  }
}

const ITEMS_CATEGORIES = {
  'Good Wine': new GoodWineItem(),
  'Backstage passes for Re:Factor': new BackstagePassesItem(),
  'Backstage passes for HAXX': new BackstagePassesItem(),
  'B-DAWG Keychain': new LegendaryItem(),
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

  /* 
   updateQuality() {
    for (let i = 0; i < this.items.length; i++) {

       // Decrease quality for normal items
      if (
        this.items[i].name != 'Good Wine' &&
        this.items[i].name != 'Backstage passes for Re:Factor' &&
        this.items[i].name != 'Backstage passes for HAXX'
      ) {
       // quality may not be negative
        if (this.items[i].quality > 0) {
           // Only lose quality if not a legendary item
          if (this.items[i].name != 'B-DAWG Keychain') {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        // Increase quality for Good Wine and Backstage passes
        // quality may not be more than 50
        if (this.items[i].quality < 50) {
          // good wine
          this.items[i].quality = this.items[i].quality + 1;

          if (this.items[i].name == 'Backstage passes for Re:Factor') {
            // backstage passes
            // increase quality by 2 when there are 10 days or less
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }

            // increase quality by 3 when there are 5 days or less
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }

      // legendary items do not have to be sold
      if (this.items[i].name != 'B-DAWG Keychain') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }

      // if the sell by date has passed
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Good Wine') {
          if (
            this.items[i].name != 'Backstage passes for Re:Factor' ||
            this.items[i].name != 'Backstage passes for HAXX'
          ) {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'B-DAWG Keychain') {
                // normal items
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            // backstage passes
            this.items[i].quality =
              this.items[i].quality - this.items[i].quality;
          }
        } else {
          // Good Wine items
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }
  }*/

}