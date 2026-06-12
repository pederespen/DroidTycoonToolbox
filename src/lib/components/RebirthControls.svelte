<script lang="ts">
  import * as Card from '$lib/components/ui/card'
  import * as Select from '$lib/components/ui/select'
  import type { RebirthStep } from '../types'

  export let activePattern: number
  export let currentLevel: number
  export let rebirthSteps: RebirthStep[]
</script>

<Card.Root size="sm" aria-label="Super rebirth settings">
  <Card.Content class="grid gap-4 sm:grid-cols-2">
    <div>
      <label
        class="text-xs font-medium uppercase text-muted-foreground"
        for="pattern-select">Pattern</label
      >
      <Select.Root bind:value={activePattern}>
        <Select.Trigger id="pattern-select" class="mt-2 w-full">
          Pattern {Number(activePattern) + 1}
        </Select.Trigger>
        <Select.Content>
          {#each [0, 1, 2, 3] as pattern (pattern)}
            <Select.Item value={pattern} label={`Pattern ${pattern + 1}`} />
          {/each}
        </Select.Content>
      </Select.Root>
    </div>

    <div>
      <label
        class="text-xs font-medium uppercase text-muted-foreground"
        for="level-select">Current rebirth</label
      >
      <Select.Root bind:value={currentLevel}>
        <Select.Trigger id="level-select" class="mt-2 w-full">
          Level {currentLevel}
        </Select.Trigger>
        <Select.Content>
          {#each rebirthSteps as step (step.from)}
            <Select.Item value={step.from} label={`Level ${step.from}`} />
          {/each}
        </Select.Content>
      </Select.Root>
    </div>
  </Card.Content>
</Card.Root>
