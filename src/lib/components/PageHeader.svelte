<script lang="ts">
  import { Badge } from '$lib/components/ui/badge'
  import * as Card from '$lib/components/ui/card'

  export let stepCount: number
</script>

<Card.Root class="shadow-2xl shadow-black/20" aria-labelledby="page-title">
  <Card.Content class="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
    <div>
      <Badge variant="secondary" class="uppercase tracking-wide"
        >Star Wars Droid Tycoon</Badge
      >
      <h1
        id="page-title"
        class="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
      >
        Super rebirth toolbox
      </h1>
      <p
        class="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base"
      >
        Check the next rebirth, look up whether a droid matters later in the
        current pattern, and scan the full four-pattern overview.
      </p>
    </div>

    <div
      class="grid grid-cols-3 gap-2 text-center"
      aria-label="Toolbox summary"
    >
      <span
        class="rounded-md border bg-muted/40 px-3 py-2 text-xs text-muted-foreground"
      >
        <strong class="block text-lg text-foreground">{stepCount}</strong> steps
      </span>
      <span
        class="rounded-md border bg-muted/40 px-3 py-2 text-xs text-muted-foreground"
      >
        <strong class="block text-lg text-foreground">4</strong> patterns
      </span>
      <span
        class="rounded-md border bg-muted/40 px-3 py-2 text-xs text-muted-foreground"
      >
        <strong class="block text-lg text-foreground">5</strong> variants
      </span>
    </div>
  </Card.Content>
</Card.Root>
