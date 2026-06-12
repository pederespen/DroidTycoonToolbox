export type Variant = 'Basic' | 'Gold' | 'Diamond' | 'Rainbow' | 'Beskar'
export type Rarity = 'Common' | 'Rare' | 'Epic' | 'Legendary'
export type ToolTab = 'next' | 'lookup' | 'overview'

export type Requirement = {
  variant: Variant
  name: string
  rarity: Rarity
}

export type RebirthStep = {
  from: number
  to: number
  cost: string
  unlock: string
  patterns: [Requirement[], Requirement[], Requirement[], Requirement[]]
}

export type RequirementMatch = {
  step: RebirthStep
  requirements: Requirement[]
}
