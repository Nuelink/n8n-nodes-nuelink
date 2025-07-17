import {
	INodeType,
	INodeTypeDescription
} from 'n8n-workflow';

export class Nuelink implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Nuelink',
		name: 'Nuelink',
		icon: 'file:nuelink.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Interact with nuelink API',
		defaults: {
			name: 'Nuelink'
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'nuelinkApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://nuelink.com/api/v1',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		/**
		 * In the properties array we have two mandatory options objects required
		 *
		 * [Resource & Operation]
		 *
		 * https://docs.n8n.io/integrations/creating-nodes/code/create-first-node/#resources-and-operations
		 *
		 * In our example, the operations are separated into their own file (HTTPVerbDescription.ts)
		 * to keep this class easy to read.
		 *
		 */
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Create Post',
						value: 'createPost',
						action: 'Create post',
						description: 'Create a new post on Nuelink',
						routing: {
							request: {
								method: 'POST',
								url: '/pabbly',
								body: {
									body: '={{$parameter["body"]}}',
									media: '={{$parameter["media"]}}',
									altText: '={{$parameter["altText"]}}',
									title: '={{$parameter["title"]}}',
									shareToFeed: '={{$parameter["shareToFeed"]}}', // Convert boolean to string if needed
									postAsShort: '={{$parameter["postAsShort"]}}',
								}
							},
						},
					},
				],
				default: 'createPost',
			},
			{
				displayName: 'Body (Required)',
				name: 'body',
				type: 'string',
				required: true,
				description: 'Enter your post caption here',
				hint: 'Enter your post caption here',
				default: '',
			},
			{
				displayName: 'Media',
				name: 'media',
				type: 'string',
				description: 'Enter your media URL here',
				hint: 'Enter your media URL here',
				default: '',
			},
			{
				displayName: 'Alt Text',
				name: 'altText',
				type: 'string',
				description: 'Enter your alt text here',
				hint: 'Enter your alt text here',
				default: '',
			},
			{
				displayName: 'Title (Optional)',
				name: 'title',
				type: 'string',
				description: 'Enter your title here',
				hint: 'Enter your title here',
				default: '',
			},
			{
				displayName: 'Share to Feed (Instagram Reels)',
				name: 'shareToFeed',
				type: 'boolean',
				hint: 'Share your Instagram Reel to your feed as well.',
				default: false,
				required: true
			},
			{
				displayName: 'Post as Short',
				name: 'postAsShort',
				type: 'boolean',
				hint: 'Share your videos as a short video (Reels).',
				default: false,
				required: true
			}
		],
	};
}