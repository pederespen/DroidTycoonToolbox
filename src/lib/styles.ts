import type { Rarity } from './types'

export const rarityCardClass = (rarity: Rarity) => {
  const classes: Record<Rarity, string> = {
    Common: 'border-slate-500/60 bg-slate-900/80',
    Rare: 'border-sky-400/70 bg-sky-950/50',
    Epic: 'border-fuchsia-400/70 bg-fuchsia-950/45',
    Legendary: 'border-amber-300/80 bg-amber-950/45',
  }

  return classes[rarity]
}
