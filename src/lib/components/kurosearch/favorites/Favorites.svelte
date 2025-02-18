<script lang="ts">
	import { formatCount } from '$lib/logic/format-count';

	import saveFavoritedToLocalStorage from '$lib/logic/save-favorited-to-local-storage';

	export let post_url: kurosearch.Post;
	console.log(`${POST: }${JSON.stringify(post_url)}`)
</script>

<span
	data-testid="score"
	class="codicon codicon-heart"
	<!-- on:click={() => saveFavoritedToLocalStorage(post_url)} -->
/>

<style>
	span {
		white-space: nowrap;
		display: inline-flex;
		gap: var(--tiny-gap);
		align-items: center;
	}

	span::before {
		font-size: 16px;
	}
</style>
