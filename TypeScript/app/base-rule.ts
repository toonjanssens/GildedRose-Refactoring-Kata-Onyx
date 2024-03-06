import { Item, Rule } from "./types";

export abstract class BaseRule implements Rule {
  condition(_item: Item) {
    return true;
  };

  abstract action(item: Item): Item;
}
