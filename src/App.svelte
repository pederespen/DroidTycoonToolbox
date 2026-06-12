<script lang="ts">
  import DroidLookupView from './lib/components/DroidLookupView.svelte'
  import NextRebirthView from './lib/components/NextRebirthView.svelte'
  import OverviewTable from './lib/components/OverviewTable.svelte'
  import PageHeader from './lib/components/PageHeader.svelte'
  import RebirthControls from './lib/components/RebirthControls.svelte'
  import ToolTabs from './lib/components/ToolTabs.svelte'
  import {
    getCoveredFutureMatches,
    getDroidNames,
    getExactFutureMatches,
    variants,
  } from './lib/droidUtils'
  import { rebirthSteps } from './lib/rebirthData'
  import type { ToolTab, Variant } from './lib/types'

  const droidNames = getDroidNames(rebirthSteps)

  let activeTab: ToolTab = 'next'
  let activePattern = 0
  let currentLevel = 0
  let ownedVariant: Variant = variants[0]
  let selectedDroid = droidNames[0]

  $: selectedStep =
    rebirthSteps.find((step) => step.from === Number(currentLevel)) ??
    rebirthSteps[0]
  $: selectedRequirements = selectedStep.patterns[Number(activePattern)]
  $: futureMatches = getCoveredFutureMatches(
    rebirthSteps,
    Number(currentLevel),
    Number(activePattern),
    ownedVariant,
    selectedDroid,
  )
  $: exactFutureMatches = getExactFutureMatches(
    rebirthSteps,
    Number(currentLevel),
    Number(activePattern),
    selectedDroid,
  )
</script>

<main class="min-h-screen bg-slate-950 text-slate-100">
  <div
    class="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-5 sm:px-6 lg:px-8"
  >
    <PageHeader stepCount={rebirthSteps.length} />

    <ToolTabs bind:activeTab />

    <RebirthControls bind:activePattern bind:currentLevel {rebirthSteps} />

    {#if activeTab === 'next'}
      <NextRebirthView {selectedStep} {selectedRequirements} />
    {:else if activeTab === 'lookup'}
      <DroidLookupView
        bind:ownedVariant
        bind:selectedDroid
        {activePattern}
        {droidNames}
        {futureMatches}
        {exactFutureMatches}
      />
    {:else}
      <OverviewTable activeLevel={Number(currentLevel)} {rebirthSteps} />
    {/if}
  </div>
</main>
