export const PodcastSchema = {
  name: "podcast",
  title: "Podcasts",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Podcast Title",
      type: "string",
      description: "",
    },
    {
      name: "type",
      title: "Item type",
      type: "string",
      options: {
        list: [{ title: "Podcast", value: "podcasts" }],
      },
    },
    {
      name: "category",
      title: "Item category",
      type: "string",
      options: {
        list: [{ title: "Podcast", value: "podcasts" }],
      },
    },
    {
      name: "date",
      title: "Date Published",
      type: "date",
    },
    {
      name: "summary",
      title: "Podcast overview",
      type: "text",
      rows: 5,
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
    },
    {
      name: "url",
      title: "Audio file URL",
      type: "string",
    }
  ],
};

