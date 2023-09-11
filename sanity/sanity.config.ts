import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import { schemaTypes } from "./schemas";

const config = defineConfig({
	projectId: "uynsy7u4",
	dataset: "production",
	title: "Learn Page",
	apiVersion: "2023-08-02",
	basePath: "/admin-studio",
	plugins: [deskTool(), visionTool()],
	schema: {
		types: schemaTypes
	}
});

export default config;
