<script lang="ts">
	import { base } from '$app/paths';

	export let isUser = false;
	export let content: string;
</script>

{#if isUser}
	<div class="chat chat-end">
		<div class="chat-bubble chat-bubble-primary" style="white-space: pre-line">{content}</div>
	</div>
{:else}
	<div class="chat chat-start">
		<div class="chat-image avatar">
			<div class="w-10 rounded-full">
				<img src="{base}/turtle.png" class="invert" alt="ChatGPT profile" />
			</div>
		</div>
		<div class="chat-bubble chat-bubble-secondary" style="white-space: pre-line">{content}</div>
	</div>
{/if}
