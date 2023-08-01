export function mapVariantSize(variants: any, sizes: any) {
  const variations = [];
  for (const variant of variants) {
    for (const size of sizes) {
      let content = `${variant} - ${size}`;
      const name = `${variant} - ${size}`;
      variations.push({ name, variant, size, content });
    }
  }
  return variations;
}

export function textToEmojiIfIcon(variations: any, emoji: any) {
  const variationsNew = [];
  for (const variation of variations) {
    if (variation.size === "icon") {
      variation.content = emoji;
    }
    variationsNew.push(variation);
  }
  return variationsNew;
}
