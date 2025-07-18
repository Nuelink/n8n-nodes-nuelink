# n8n-nodes-nuelink

This is an n8n community node. It lets you use [Nuelink](https://nuelink.com) in your n8n workflows.

Nuelink is a social media automation and scheduling platform that helps creators, brands, and businesses streamline their content distribution across multiple social media platforms.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Usage](#usage)  
[Resources](#resources)  
[Version history](#version-history)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

- **Create Post**: Allows you to create a new post on Nuelink, specifying the content and the settings.

## Credentials

Users need to authenticate with Nuelink to use this node. To set up authentication:
1. Sign up for a Nuelink account at [Nuelink](https://nuelink.com).
2. Create a new automation in the Nuelink dashboard.
3. Obtain your API key from the automation settings.
4. In n8n, add a new credential for Nuelink and enter your API key.

## Compatibility

This node is compatible with n8n version 1.36.0 and above. It has been tested against the latest stable version of n8n.

## Usage

1. Add a **Trigger** node (e.g., Webhook or Cron).
2. Add the **Nuelink** node and choose an operation (e.g., Create Post).
3. Select or create your API credentials.
4. Configure your input data (e.g., post content, categories, image URLs).
5. Connect additional nodes (e.g., filters, conditions, notifications) as needed.

> **Note**  
> This node is intended for users who are already familiar with n8n.  
> If you're new to n8n, check out the [Try it out guide](https://docs.n8n.io/try-it-out/) to get started quickly.

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
* [Nuelink](https://nuelink.com)
* [Nuelink help center](https://help.nuelink.com)


