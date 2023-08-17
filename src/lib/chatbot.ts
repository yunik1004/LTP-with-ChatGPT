import type { ChatAPI } from '$lib/chatapi';

export class ChatBot {
	protected chatapi: ChatAPI;

	constructor(chatapi: ChatAPI) {
		this.chatapi = chatapi;
	}
}
