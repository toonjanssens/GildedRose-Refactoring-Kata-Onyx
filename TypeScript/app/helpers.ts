import { Item } from "./types"

/**
 * Updates the qualtiy of an item with checks for min and max values
 */
export const upateQuality = (item: Item, amount: number) => {
  item.quality = item.quality + amount

  if (item.quality > 50) {
    item.quality = 50
  }
  if (item.quality < 0) {
    item.quality = 0
  }

  return item
}
