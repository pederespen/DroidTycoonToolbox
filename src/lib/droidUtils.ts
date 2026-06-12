import type {
  RebirthStep,
  Requirement,
  RequirementMatch,
  Rarity,
  Variant,
} from './types'

export const variants: Variant[] = [
  'Basic',
  'Gold',
  'Diamond',
  'Rainbow',
  'Beskar',
]
export const variantRank = new Map<Variant, number>(
  variants.map((variant, index) => [variant, index]),
)

export const req = (
  variant: Variant,
  name: string,
  rarity: Rarity,
): Requirement => ({ variant, name, rarity })

export const formatRequirement = (requirement: Requirement) =>
  `${requirement.variant} ${requirement.name}`

export const normalizeDroidName = (name: string) =>
  name
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '')
    .replace('WLKR', 'WALKER')
    .replace('WALKR', 'WALKER')
    .replace('STRK', 'STRIKE')

export const getDroidNames = (rebirthSteps: RebirthStep[]) =>
  Array.from(
    new Map(
      rebirthSteps
        .flatMap((step) => step.patterns.flat())
        .map((requirement) => [
          normalizeDroidName(requirement.name),
          requirement.name,
        ]),
    ).values(),
  ).sort((first, second) => first.localeCompare(second))

export const getCoveredFutureMatches = (
  rebirthSteps: RebirthStep[],
  currentLevel: number,
  activePattern: number,
  ownedVariant: Variant,
  selectedDroid: string,
): RequirementMatch[] =>
  rebirthSteps
    .filter((step) => step.from >= currentLevel)
    .map((step) => ({
      step,
      requirements: step.patterns[activePattern].filter(
        (requirement) =>
          normalizeDroidName(requirement.name) ===
            normalizeDroidName(selectedDroid) &&
          (variantRank.get(ownedVariant) ?? 0) >=
            (variantRank.get(requirement.variant) ?? 0),
      ),
    }))
    .filter((match) => match.requirements.length > 0)

export const getExactFutureMatches = (
  rebirthSteps: RebirthStep[],
  currentLevel: number,
  activePattern: number,
  selectedDroid: string,
): RequirementMatch[] =>
  rebirthSteps
    .filter((step) => step.from >= currentLevel)
    .map((step) => ({
      step,
      requirements: step.patterns[activePattern].filter(
        (requirement) =>
          normalizeDroidName(requirement.name) ===
          normalizeDroidName(selectedDroid),
      ),
    }))
    .filter((match) => match.requirements.length > 0)
