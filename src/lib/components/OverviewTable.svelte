<script lang="ts">
  import { Badge } from '$lib/components/ui/badge'
  import * as Card from '$lib/components/ui/card'
  import * as Table from '$lib/components/ui/table'
  import type { RebirthStep } from '../types'

  export let activeLevel: number
  export let rebirthSteps: RebirthStep[]
</script>

<Card.Root aria-labelledby="overview-heading">
  <Card.Header class="border-b md:grid-cols-[1fr_auto] md:items-end">
    <div>
      <Badge variant="secondary" class="w-fit uppercase">Reference</Badge>
      <Card.Title id="overview-heading" class="mt-2 text-2xl"
        >Full super rebirth overview</Card.Title
      >
    </div>
    <Card.Description
      >Higher variants count for lower variant requirements.</Card.Description
    >
  </Card.Header>

  <div class="overflow-x-auto">
    <Table.Root class="min-w-[1050px]">
      <Table.Header>
        <Table.Row>
          <Table.Head>Rebirth</Table.Head>
          <Table.Head>Cost</Table.Head>
          <Table.Head>Unlock</Table.Head>
          <Table.Head>Pattern 1</Table.Head>
          <Table.Head>Pattern 2</Table.Head>
          <Table.Head>Pattern 3</Table.Head>
          <Table.Head>Pattern 4</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {#each rebirthSteps as step (step.from)}
          <Table.Row class={step.from === activeLevel ? 'bg-primary/10' : ''}>
            <Table.Cell class="whitespace-nowrap align-top font-semibold"
              >{step.from} -> {step.to}</Table.Cell
            >
            <Table.Cell
              class="whitespace-nowrap align-top text-muted-foreground"
              >{step.cost}</Table.Cell
            >
            <Table.Cell
              class="whitespace-nowrap align-top text-muted-foreground"
              >{step.unlock}</Table.Cell
            >
            {#each step.patterns as patternRequirements, patternIndex (patternIndex)}
              <Table.Cell class="align-top">
                <div class="grid gap-2">
                  {#each patternRequirements as requirement (`${requirement.variant}-${requirement.name}`)}
                    <div class="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        class="w-16 justify-center uppercase"
                        >{requirement.variant}</Badge
                      >
                      <span>{requirement.name}</span>
                    </div>
                  {/each}
                </div>
              </Table.Cell>
            {/each}
          </Table.Row>
        {/each}
      </Table.Body>
    </Table.Root>
  </div>
</Card.Root>
