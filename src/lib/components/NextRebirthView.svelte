<script lang="ts">
  import { Badge } from '$lib/components/ui/badge'
  import * as Card from '$lib/components/ui/card'
  import { rarityCardClass } from '../styles'
  import type { RebirthStep, Requirement } from '../types'

  export let selectedStep: RebirthStep
  export let selectedRequirements: Requirement[]
</script>

<section
  class="grid gap-4 lg:grid-cols-[0.9fr_1.6fr]"
  aria-labelledby="next-heading"
>
  <Card.Root class="border-primary/30 bg-primary/5">
    <Card.Header>
      <Badge variant="secondary" class="w-fit uppercase">Next rebirth</Badge>
      <Card.Title id="next-heading" class="text-5xl"
        >{selectedStep.from} -> {selectedStep.to}</Card.Title
      >
    </Card.Header>
    <Card.Content class="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
      <Badge variant="outline" class="justify-center rounded-md py-1.5 text-sm"
        >{selectedStep.cost} credits</Badge
      >
      <Badge variant="outline" class="justify-center rounded-md py-1.5 text-sm"
        >{selectedStep.unlock}</Badge
      >
    </Card.Content>
  </Card.Root>

  <div class="grid gap-3 md:grid-cols-3">
    {#each selectedRequirements as requirement (`${requirement.variant}-${requirement.name}`)}
      <Card.Root class={`min-h-40 ${rarityCardClass(requirement.rarity)}`}>
        <Card.Header>
          <Badge variant="secondary" class="w-fit uppercase"
            >{requirement.variant}</Badge
          >
          <Card.Title class="text-2xl">{requirement.name}</Card.Title>
        </Card.Header>
        <Card.Content>
          <Badge variant="outline" class="uppercase">{requirement.rarity}</Badge
          >
        </Card.Content>
      </Card.Root>
    {/each}
  </div>
</section>
