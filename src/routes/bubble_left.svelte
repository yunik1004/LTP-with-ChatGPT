<script lang="ts">
	import { base } from '$app/paths';

	export let content: string;
</script>

<div class="chat chat-start">
	<div class="chat-image avatar">
		<div class="w-10 rounded-full">
			<img src="{base}/turtle.png" class="invert" alt="ChatGPT profile" />
		</div>
	</div>
	<div class="chat-bubble chat-bubble-secondary">{content}</div>
</div>
