export const ArticleSchema = {
  name: "article",
  title: "Articles",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "",
    },
    {
      name: "type",
      title: "Item type",
      type: "string",
      options: {
        list: [
          { title: "Article", value: "articles" }
        ],
      },
    },
    {
      name: "date",
      title: "Date Published",
      type: "date",
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
    },
    {
      name: "url",
      title: "URL",
      description: "Article URL",
      type: "string",
    }
  ],
};
