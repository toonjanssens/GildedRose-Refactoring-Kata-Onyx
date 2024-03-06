import { upateQuality } from "./helpers";
import { Item } from "./types";
export class GildedRose {
  constructor(private items: Array<Item> = []) {
    this.items = items;
  }

  updateQuality() {
    return this.items.map(item => {
      if (item.name === 'Sulfuras, Hand of Ragnaros') return item

      item.sellIn--

      if (item.name === 'Aged Brie') {
        return upateQuality(item, 1)
      }

      if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.sellIn <= 0) {
          item.quality = 0
          return item
        }

        item = upateQuality(item, 1)

        if (item.sellIn <= 10) {
          item = upateQuality(item, 1)
        }

        if (item.sellIn <= 5) {
          item = upateQuality(item, 1)
        }

        return item
      }

      return upateQuality(item, item.sellIn > 0 ? -1 : -2)
    })
  }
}
