import { ClientConfig, createClient } from 'next-sanity';

export const clientConfig: ClientConfig = {
	projectId: "uynsy7u4",
	dataset: "production",
	useCdn: false,
	apiVersion: "2023-08-02",
}

export const client = createClient(clientConfig);
