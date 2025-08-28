import {
	INodeType,
	INodeTypeDescription,
	NodeConnectionType
} from 'n8n-workflow';

export class Nuelink implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Nuelink',
		name: 'nuelink',
		icon: 'file:nuelink.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Interact with Nuelink API',
		defaults: {
			name: 'Nuelink'
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
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
		properties: [
			// Resource
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Post',
						value: 'post',
					},
				],
				default: 'post',
			},

			// Operation
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['post'],
					},
				},
				options: [
					{
						name: 'Create',
						value: 'createPost',
						action: 'Create post',
						description: 'Create a new post on Nuelink',
						routing: {
							request: {
								method: 'POST',
								url: '/pabbly',
								// body: {
								// 	body: '={{$parameter["body"]}}',
								// 	media: '={{$parameter["media"]}}',
								// 	altText: '={{$parameter["additionalFields"].altText}}',
								// 	title: '={{$parameter["additionalFields"].title}}',
								// 	shareToFeed: '={{$parameter["additionalFields"].shareToFeed}}'
								// },
							},
						},
					},
				],
				default: 'createPost',
			},


			// Main required fields
			{
				displayName: 'Caption',
				name: 'body',
				type: 'string',
				description: 'Post caption',
				hint: 'Enter your post caption here',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['post'],
						operation: ['createPost'],
					},
				},
				routing: {
					send: {
						property: 'body',
						type: 'body',
					},
				},
			},
			{
				displayName: 'Media',
				name: 'media',
				type: 'string',
				description: 'Enter your media URL here',
				hint: 'Media URL',
				default: '',
				displayOptions: {
					show: {
						resource: ['post'],
						operation: ['createPost'],
					},
				},
				routing: {
					send: {
						property: 'media',
						type: 'body',
					},
				},
			},

			// Optional fields in a collection
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add optional fields',
				default: {},
				displayOptions: {
					show: {
						resource: ['post'],
						operation: ['createPost'],
					},
				},
				options: [
					{
						displayName: 'Title',
						name: 'title',
						type: 'string',
						description: 'Enter your title here',
						hint: 'Title of the post',
						default: '',
						routing: {
							send: {
								property: 'title',
								type: 'body',
							},
						},
					},
					{
						displayName: 'Alt Text',
						name: 'altText',
						type: 'string',
						description: 'Enter your alt text here',
						hint: 'Alt text for media',
						default: '',
						routing: {
							send: {
								property: 'altText',
								type: 'body',
							},
						},
					},
					{
						displayName: 'Share to Feed (Instagram Reels)',
						name: 'shareToFeed',
						type: 'boolean',
						hint: 'Share your Instagram Reel to your feed as well',
						default: false,
						routing: {
							send: {
								property: 'shareToFeed',
								type: 'body',
							},
						},
					},
				],
			},
		],
	};
}