import type { ChatAPI } from './chatapi';
import { query_thread_init } from './textbase';

export class ChatBot {
	protected static instance: ChatBot;

	protected chatapi: ChatAPI;

	protected thread_conv_id: string;
	protected thread_init_msg_id: string;
	protected thread_prev_msg_id: string;

	protected constructor(
		chatapi: ChatAPI,
		threadConversationId: string,
		threadInitMessageId: string
	) {
		this.chatapi = chatapi;
		this.thread_conv_id = threadConversationId;
		this.thread_init_msg_id = threadInitMessageId;
		this.thread_prev_msg_id = threadInitMessageId;
	}

	public static async initialize(chatapi: ChatAPI) {
		// Initialize thread
		const res = await chatapi.sendMessage(query_thread_init);
		if (res.conversationId === undefined) {
			throw Error('conversationId is not found');
		}

		ChatBot.instance = new ChatBot(chatapi, res.conversationId, res.id);
	}

	public static getInstance(): ChatBot {
		if (!ChatBot.instance) {
			throw new Error('No instance');
		}
		return ChatBot.instance;
	}

	public resetThread() {
		this.thread_prev_msg_id = this.thread_init_msg_id;
	}

	public async sendThreadMessage(text: string): Promise<string> {
		const res = await this.chatapi.sendMessage(text, {
			conversationId: this.thread_conv_id,
			parentMessageId: this.thread_prev_msg_id,
			action: 'next'
		});
		this.thread_prev_msg_id = res.id;
		return res.text;
	}
}
