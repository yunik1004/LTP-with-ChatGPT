import {
	ChatGPTUnofficialProxyAPI,
	type ChatMessage,
	type SendMessageBrowserOptions
} from 'chatgpt';

export class ChatBot {
	protected static instance: ChatBot;

	protected api: ChatGPTUnofficialProxyAPI;

	protected access_token: string;
	protected api_reverse_proxy_url: string;

	protected constructor(access_token: string, api_reverse_proxy_url: string) {
		this.access_token = access_token;
		this.api_reverse_proxy_url = api_reverse_proxy_url;

		this.api = new ChatGPTUnofficialProxyAPI({
			accessToken: this.access_token,
			apiReverseProxyUrl: this.api_reverse_proxy_url
		});
	}

	public static async login(
		access_token: string,
		api_reverse_proxy_url: string
	): Promise<ChatMessage> {
		ChatBot.instance = new ChatBot(access_token, api_reverse_proxy_url);
		return await ChatBot.instance.api.sendMessage('LTP login');
	}

	public static getInstance(): ChatBot {
		if (!ChatBot.instance) {
			throw new Error('No instance');
		}
		return ChatBot.instance;
	}

	public async sendMessage(
		text: string,
		opts?: SendMessageBrowserOptions | undefined
	): Promise<ChatMessage> {
		const res = await this.api.sendMessage(text, opts);
		return res;
	}
}
