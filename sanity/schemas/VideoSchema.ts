export const VideoSchema = {
  name: "video",
  title: "Videos",
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
          { title: "Video", value: "videos" },
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
      name: "videoURL",
      title: "Video URL",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Fixed Deposit", value: "fixed" },
          { title: "Treasury Bills", value: "tbills" },
          { title: "Equities", value: "equities" },
          { title: "Investing 101", value: "investing 101" },
        ],
      },
    },
  ],
};
