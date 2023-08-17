<script lang="ts">
	import { ChatGPTUnofficialProxyAPI } from 'chatgpt';
	import { beforeUpdate } from 'svelte';
	import { get } from 'svelte/store';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { access_token, api_reverse_proxy_url } from '../store';
	import BubbleLeft from './bubble_left.svelte';
	import BubbleRight from './bubble_right.svelte';

	let api: ChatGPTUnofficialProxyAPI;

	beforeUpdate(async () => {
		try {
			api = new ChatGPTUnofficialProxyAPI({
				accessToken: get(access_token),
				apiReverseProxyUrl: get(api_reverse_proxy_url)
			});
		} catch (error) {
			goto(base + '/login');
		}
	});
</script>

<div>
	<BubbleLeft content="바다거북 스프" />
	<BubbleRight content="안녕" />
</div>
