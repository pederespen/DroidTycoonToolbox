<script lang="ts">
  import { Badge } from '$lib/components/ui/badge'
  import * as Card from '$lib/components/ui/card'
  import * as Select from '$lib/components/ui/select'
  import { formatRequirement, variants } from '../droidUtils'
  import type { RequirementMatch, Variant } from '../types'

  export let activePattern: number
  export let selectedDroid: string
  export let ownedVariant: Variant
  export let droidNames: string[]
  export let futureMatches: RequirementMatch[]
  export let exactFutureMatches: RequirementMatch[]
</script>

<section
  class="grid gap-4 lg:grid-cols-[0.9fr_1.4fr]"
  aria-labelledby="lookup-heading"
>
  <Card.Root>
    <Card.Header>
      <Badge variant="secondary" class="w-fit uppercase">Droid lookup</Badge>
      <Card.Title id="lookup-heading" class="text-2xl"
        >Will I need this later?</Card.Title
      >
    </Card.Header>

    <Card.Content class="grid gap-4">
      <div>
        <label
          class="text-xs font-medium uppercase text-muted-foreground"
          for="variant-select">Variant owned</label
        >
        <Select.Root bind:value={ownedVariant}>
          <Select.Trigger id="variant-select" class="mt-2 w-full">
            {ownedVariant}
          </Select.Trigger>
          <Select.Content>
            {#each variants as variant (variant)}
              <Select.Item value={variant} label={variant} />
            {/each}
          </Select.Content>
        </Select.Root>
      </div>

      <div>
        <label
          class="text-xs font-medium uppercase text-muted-foreground"
          for="droid-select">Droid</label
        >
        <Select.Root bind:value={selectedDroid}>
          <Select.Trigger id="droid-select" class="mt-2 w-full">
            {selectedDroid}
          </Select.Trigger>
          <Select.Content>
            {#each droidNames as droidName (droidName)}
              <Select.Item value={droidName} label={droidName} />
            {/each}
          </Select.Content>
        </Select.Root>
      </div>
    </Card.Content>
  </Card.Root>

  <Card.Root>
    <Card.Content>
      {#if futureMatches.length > 0}
        <Badge class="bg-emerald-500 text-emerald-950 hover:bg-emerald-500"
          >Needed later</Badge
        >
        <h3 class="mt-4 text-xl font-semibold text-foreground">
          {ownedVariant}
          {selectedDroid} covers {futureMatches.length} upcoming requirement{futureMatches.length ===
          1
            ? ''
            : 's'}.
        </h3>
        <div class="mt-5 grid gap-2">
          {#each futureMatches as match (match.step.from)}
            {#each match.requirements as requirement (`${match.step.from}-${requirement.variant}-${requirement.name}`)}
              <div
                class="grid gap-1 rounded-md border bg-muted/30 p-3 sm:grid-cols-[90px_1fr_auto] sm:items-center"
              >
                <Badge variant="outline" class="w-fit"
                  >{match.step.from} -> {match.step.to}</Badge
                >
                <strong class="text-sm text-foreground"
                  >{formatRequirement(requirement)}</strong
                >
                <small class="text-xs uppercase text-muted-foreground"
                  >{match.step.cost} credits</small
                >
              </div>
            {/each}
          {/each}
        </div>
      {:else if exactFutureMatches.length > 0}
        <Badge class="bg-amber-400 text-amber-950 hover:bg-amber-400"
          >Variant too low</Badge
        >
        <h3 class="mt-4 text-xl font-semibold text-foreground">
          {selectedDroid} appears later, but {ownedVariant} will not satisfy the required
          variant.
        </h3>
        <div class="mt-5 grid gap-2">
          {#each exactFutureMatches as match (match.step.from)}
            {#each match.requirements as requirement (`${match.step.from}-${requirement.variant}-${requirement.name}`)}
              <div
                class="grid gap-1 rounded-md border bg-muted/30 p-3 opacity-75 sm:grid-cols-[90px_1fr_auto] sm:items-center"
              >
                <Badge variant="outline" class="w-fit"
                  >{match.step.from} -> {match.step.to}</Badge
                >
                <strong class="text-sm text-foreground"
                  >Needs {formatRequirement(requirement)}</strong
                >
                <small class="text-xs uppercase text-muted-foreground"
                  >{match.step.cost} credits</small
                >
              </div>
            {/each}
          {/each}
        </div>
      {:else}
        <Badge variant="destructive">Not needed</Badge>
        <h3 class="mt-4 text-xl font-semibold text-foreground">
          No later requirement uses {selectedDroid} in Pattern {activePattern +
            1}.
        </h3>
      {/if}
    </Card.Content>
  </Card.Root>
</section>
