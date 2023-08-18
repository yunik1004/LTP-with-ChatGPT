import {
	ChatGPTUnofficialProxyAPI,
	type ChatMessage,
	type SendMessageBrowserOptions
} from 'chatgpt';

export class ChatAPI {
	protected api: ChatGPTUnofficialProxyAPI;

	protected access_token: string;
	protected api_reverse_proxy_url: string;

	constructor(access_token: string, api_reverse_proxy_url: string) {
		this.access_token = access_token;
		this.api_reverse_proxy_url = api_reverse_proxy_url;

		this.api = new ChatGPTUnofficialProxyAPI({
			accessToken: this.access_token,
			apiReverseProxyUrl: this.api_reverse_proxy_url
		});
	}

	public async sendMessage(
		text: string,
		opts?: SendMessageBrowserOptions | undefined
	): Promise<ChatMessage> {
		return this.api.sendMessage(text, opts);
	}
}
