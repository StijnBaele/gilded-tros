import { Item } from '../src/item';
import { GildedTros } from '../src/gilded-tros';

describe('GildedTros', () => {
  test('Normal items', () => {
    const items = [new Item('foo', 4, 3)];
    const app = new GildedTros(items);
    app.updateQuality();
    expect(app.items[0].sellIn).toEqual(3);
    expect(app.items[0].quality).toEqual(2);
  });

  test('Passed sell by date', () => {
    const items = [new Item('foo', 0, 4)];
    const app = new GildedTros(items);
    app.updateQuality();
    expect(app.items[0].sellIn).toEqual(-1);
    expect(app.items[0].quality).toEqual(2);
  });

  test('Good Wine', () => {
    const items = [new Item('Good Wine', 2, 0)];
    const app = new GildedTros(items);
    app.updateQuality();
    expect(app.items[0].sellIn).toEqual(1);
    expect(app.items[0].quality).toEqual(1);
  });

  test('Backstage passes', () => {
    const items = [new Item('Backstage passes for Re:Factor', 10, 20)];
    const app = new GildedTros(items);
    app.updateQuality();
    expect(app.items[0].sellIn).toEqual(9);
    expect(app.items[0].quality).toEqual(22);
  });

  test('Legendary items', () => {
    const items = [new Item('B-DAWG Keychain', 0, 80)];
    const app = new GildedTros(items);
    app.updateQuality();
    expect(app.items[0].sellIn).toEqual(0);
    expect(app.items[0].quality).toEqual(80);
  });

  test('Smelly items', () => {
    const items = [new Item('Duplicate Code', 3, 6)];
    const app = new GildedTros(items);
    app.updateQuality();
    expect(app.items[0].sellIn).toEqual(2);
    expect(app.items[0].quality).toEqual(4);
  });

  test('Quality never negative', () => {
    const items = [new Item('foo', 5, 0)];
    const app = new GildedTros(items);
    app.updateQuality();
    expect(app.items[0].sellIn).toEqual(4);
    expect(app.items[0].quality).toEqual(0);
  });

  test('Quality never more than 50', () => {
    const items = [new Item('Good Wine', 5, 50)];
    const app = new GildedTros(items);
    app.updateQuality();
    expect(app.items[0].sellIn).toEqual(4);
    expect(app.items[0].quality).toEqual(50);
  });

});