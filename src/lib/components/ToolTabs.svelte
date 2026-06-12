<script lang="ts">
  import * as Tabs from '$lib/components/ui/tabs'
  import type { ToolTab } from '../types'

  export let activeTab: ToolTab

  const tabs: { id: ToolTab; label: string }[] = [
    { id: 'next', label: 'Next' },
    { id: 'lookup', label: 'Lookup' },
    { id: 'overview', label: 'Overview' },
  ]
</script>

<Tabs.Root bind:value={activeTab} class="w-full" aria-label="Tool views">
  <Tabs.List class="w-full sm:w-fit">
    {#each tabs as tab (tab.id)}
      <Tabs.Trigger value={tab.id}>
        {tab.label}
      </Tabs.Trigger>
    {/each}
  </Tabs.List>
</Tabs.Root>
