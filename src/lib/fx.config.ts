// src/lib/fx.config.ts
// Force specific transitions by route. Keys can be exact paths or prefixes.
export const routeFX: Record<string, 'tear' | 'crack'> = {
  '/radio': 'crack',
  '/radio/': 'crack',
  '/drop': 'tear',
  '/product': 'tear',
  '/lookbook': 'tear',
  // add more as you grow
};