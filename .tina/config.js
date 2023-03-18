import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "7e90bc39-1935-4760-a57b-9da762cd5193", // Get this from tina.io
  token: "eb988047cf1552e7f6f4e2e763875ef7c5df0825", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "docs",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "docs",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
