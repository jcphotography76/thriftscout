/* ============================================================
   SECOND CHANCE: LISTINGS
   Edit this file to add, change or remove items. Nothing else needs touching.

   Every listing needs:
     id, name, category, price, condition, description, images (3 or more photos)
   Clothing and hats also need: size, measurements
   Optional: brand, was (old price, shows a sale), material, stripe (Stripe Payment Link),
             status ('available' or 'sold'), added ('YYYY-MM-DD')

   A listing that is missing a required field stays hidden and is flagged.
   Add ?check=1 to the page address to see what is missing.
   Listings with sample:true show a Sample tag and cannot be bought. Delete them when you add real ones.
   ============================================================ */
window.SHOP_CONFIG = {
  name: 'Second Chance',
  categories: ['Tops', 'Bottoms', 'Hats', 'Jewelry', 'Home', 'Handmade'],
  conditions: ['Like new', 'Great', 'Good', 'Fair'],
  needsSize: ['Tops', 'Bottoms', 'Hats'],
  minPhotos: 3
};

window.SHOP_PRODUCTS = [
  { id: 'bass-tee', sample: true, name: 'Fishing tee with bass graphic', brand: 'Cabela’s', category: 'Tops', size: 'Men’s M', price: 14, condition: 'Great', measurements: 'Chest 21 in, length 28 in', material: '100% cotton', description: 'Sample listing. Soft, broken-in cotton tee with a large bass graphic on the front. Replace this text with the real condition notes.', images: [], added: '2026-10-18' },
  { id: 'straight-jeans', sample: true, name: 'Straight-leg jeans, vintage wash', brand: 'Levi’s', category: 'Bottoms', size: '32 x 32', price: 38, was: 46, condition: 'Good', measurements: 'Waist 32 in, inseam 32 in, rise 11 in', material: 'Cotton denim', description: 'Sample listing. Classic straight cut with natural fading. Replace this text with the real condition notes.', images: [], added: '2026-10-17' },
  { id: 'trucker-cap', sample: true, name: 'Corduroy trucker cap', category: 'Hats', size: 'Adjustable', price: 11, condition: 'Like new', measurements: 'Adjustable snap back', description: 'Sample listing. Sturdy corduroy front with a mesh back. Replace this text with the real condition notes.', images: [], added: '2026-10-17' },
  { id: 'bead-necklace', sample: true, name: 'Layered bead necklace', category: 'Jewelry', price: 12, condition: 'Great', measurements: 'Longest strand 24 in', material: 'Glass and wood beads', description: 'Sample listing. Costume jewelry with three strands in earthy tones. Replace this text with the real condition notes.', images: [], added: '2026-10-16' },
  { id: 'crochet-fox', sample: true, name: 'Hand-crocheted fox', category: 'Handmade', price: 22, condition: 'Like new', measurements: '8 in tall', material: 'Cotton yarn', description: 'Sample listing. Made by hand, one at a time. Replace this text with the real details.', images: [], added: '2026-10-16' },
  { id: 'slate-coasters', sample: true, name: 'Laser engraved slate coasters, set of 4', category: 'Home', price: 28, condition: 'Like new', measurements: '4 in round, each', material: 'Natural slate', description: 'Sample listing. Four slate coasters with a clean engraved design. Replace this text with the real details.', images: [], added: '2026-10-15' },
  { id: 'stoneware-mug', sample: true, status: 'sold', name: 'Speckled stoneware mug', category: 'Home', price: 9, condition: 'Great', measurements: '12 oz', material: 'Stoneware', description: 'Sample listing, shown as sold so you can see how sold items look. Replace this text with the real details.', images: [], added: '2026-10-14' },
  { id: 'wool-crewneck', sample: true, name: 'Wool crewneck sweater', category: 'Tops', size: 'Men’s L', price: 32, condition: 'Good', measurements: 'Chest 24 in, length 27 in', material: 'Wool blend', description: 'Sample listing. Warm and structured with ribbed cuffs. Replace this text with the real condition notes.', images: [], added: '2026-10-15' },
  { id: 'cuff-bracelet', sample: true, name: 'Silver-tone cuff bracelet', category: 'Jewelry', price: 15, was: 20, condition: 'Great', measurements: 'Fits 6 to 7.5 in wrists', material: 'Metal alloy', description: 'Sample listing. Polished cuff with a hammered finish. Replace this text with the real condition notes.', images: [], added: '2026-10-13' },
  { id: 'bucket-hat', sample: true, name: 'Canvas bucket hat', category: 'Hats', size: 'S/M', price: 11, condition: 'Good', measurements: 'Circumference 22 in', material: 'Cotton canvas', description: 'Sample listing. Lightweight and packable. Replace this text with the real condition notes.', images: [], added: '2026-10-12' },
  { id: 'linen-pants', sample: true, name: 'Wide-leg linen pants', category: 'Bottoms', size: 'Women’s 10', price: 26, condition: 'Like new', measurements: 'Waist 29 in, inseam 29 in, rise 12 in', material: 'Linen blend', description: 'Sample listing. Easy drape with an elastic back waist. Replace this text with the real condition notes.', images: [], added: '2026-10-11' },
  { id: 'wall-hanging', sample: true, name: 'Wood wall hanging with engraved quote', category: 'Home', price: 24, condition: 'Like new', measurements: '12 x 9 in', material: 'Birch wood', description: 'Sample listing. A small engraved wall piece with a hanging cord. Replace this text with the real details.', images: [], added: '2026-10-10' }
];
