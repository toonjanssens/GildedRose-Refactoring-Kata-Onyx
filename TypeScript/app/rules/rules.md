# Rules

Rules can be used to pass in the `createRuleApplicator` to apply modification to an `Item` on each `updateQuality()` call.

Example

```typescript
export class ExampleRule extends BaseRule {
  condition(item: Item) {
    return item.sellIn < 5
  }

  action(item: Item) {
    item.quality = 0;

    return item;
  }
}
```

Each Rule must extend the `BaseRule` and must implement the `action` method.
Optionally an `condition` method can be added if the rule can only be applyed in a specific condition.
