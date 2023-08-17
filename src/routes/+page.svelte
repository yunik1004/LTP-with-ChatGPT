<script lang="ts">
	import { beforeUpdate, afterUpdate } from 'svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { ChatAPI } from '$lib/chatapi';
	import { ChatBot } from '$lib/chatbot';
	import Bubble from './bubble.svelte';

	type LogVisual = {
		isUser: boolean;
		content: string;
	};

	let chatapi: ChatAPI;
	let chatbot: ChatBot;

	let logs_visual: Array<LogVisual> = [];
	let form: HTMLFormElement;
	let question: string;

	beforeUpdate(async () => {
		try {
			chatapi = ChatAPI.getInstance();
			chatbot = new ChatBot(chatapi);
		} catch (error) {
			console.log(error);
			goto(base + '/login');
		}
	});

	afterUpdate(async () => {
		window.scrollTo(0, document.body.scrollHeight);
	});

	function handleSubmit() {
		// Update conversation log
		const log: LogVisual = { isUser: true, content: question };
		logs_visual = [...logs_visual, log];

		// Get chatbot response
		chatapi
			.sendMessage(question)
			.then((res) => {
				const log_res: LogVisual = { isUser: false, content: res.text };
				logs_visual = [...logs_visual, log_res];
			})
			.catch((err) => {
				console.log(err);
				const log_err: LogVisual = { isUser: false, content: '오류가 발생했어요' };
				logs_visual = [...logs_visual, log_err];
			});

		// Reset question box
		question = '';
	}

	function onKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			form.requestSubmit();
		}
	}
</script>

<div class="flex flex-col h-full">
	<div class="container p-2 pb-10 grow">
		{#each logs_visual as log}
			{#if log.isUser}
				<Bubble isUser content={log.content} />
			{:else}
				<Bubble content={log.content} />
			{/if}
		{/each}
	</div>

	<footer class="footer footer-center text-base-content">
		<form class="flex w-full" bind:this={form} on:submit|preventDefault={handleSubmit}>
			<div class="w-full">
				<textarea
					class="textarea textarea-bordered items-center grid-flow-col w-full"
					placeholder="질문을 입력해주세요"
					bind:value={question}
					on:keydown={onKeyDown}
				/>
			</div>
			<div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
				<button type="submit" class="btn btn-primary">Submit</button>
			</div>
		</form>
	</footer>
</div>
