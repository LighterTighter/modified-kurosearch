<script lang="ts">
	import { formatCount } from '$lib/logic/format-count';

	import saveFavoritedToLocalStorage from '$lib/logic/save-favorited-to-local-storage';

	export let post: kurosearch.Post;
	console.log('POST:');

	const kurosearchUrl = new URL(
		`https://kurosearch.com/post?id=${post.id}&src=${encodeURIComponent(post.file_url)}`
	);
</script>

<span data-testid="score" class="codicon codicon-heart"
	><textarea>{JSON.stringify(kurosearchUrl)}</textarea></span
>

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
