<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { ChatAPI } from '$lib/chatapi';
	import { ChatBot } from '$lib/chatbot';
	import { proxy_default } from '$lib/database';

	let token: string;
	let proxy = proxy_default;

	let auth_failed = false;

	async function handleSubmit() {
		let chatapi = new ChatAPI(token, proxy);
		ChatBot.initialize(chatapi)
			.then(() => {
				goto(base + '/');
			})
			.catch((error) => {
				console.log(error);
				auth_failed = true;
			});
	}
</script>

<div class="relative flex flex-col justify-center h-full overflow-hidden">
	<div class="w-full p-6 m-auto rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
		{#if auth_failed}
			<div class="alert alert-warning">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
					/>
				</svg>
				<span>Wrong accessToken or reverseProxyUrl</span>
			</div>
		{/if}
		<form class="space-y-4" on:submit|preventDefault={handleSubmit}>
			<div>
				<label class="label" for="token">
					<span class="text-base label-text">Access Token</span>
				</label>
				<input
					id="token"
					type="text"
					placeholder="Enter OpenAI Access Token"
					class="w-full input input-bordered"
					bind:value={token}
				/>
			</div>
			<a
				href="https://chat.openai.com/api/auth/session"
				target="_blank"
				class="text-xs text-gray-600 hover:underline hover:text-blue-600"
			>
				Want to find access token?
			</a>
			<div>
				<label class="label" for="proxy">
					<span class="text-base label-text">API Reverse Proxy URL</span>
				</label>
				<input
					id="proxy"
					type="text"
					placeholder="Enter Reverse Proxy URL"
					class="w-full input input-bordered"
					bind:value={proxy}
				/>
			</div>
			<a
				href="https://github.com/transitive-bullshit/chatgpt-api#reverse-proxy"
				target="_blank"
				class="text-xs text-gray-600 hover:underline hover:text-blue-600"
			>
				Other reverse proxies?
			</a>
			<div>
				<button type="submit" class="btn btn-block">Login</button>
			</div>
		</form>
	</div>
</div>
