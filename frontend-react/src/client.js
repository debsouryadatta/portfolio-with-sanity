import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "p7ivo1c7",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skQbICG4GCo7VhUI4Z9d706dWGsq3AXhFrReaJn459HbltdhYZouXTewZS4OCLW3gOmlSsVVekZB2th1RV5U6OUwhGgfDkqfZdHM8IbkTNECaMHvQsPf8BEBgqKJqG785JnpLmt11APEmIZpbGJqEanrjY5hcBIZLhXtXLlrmFLatGP8fwOx",
});


// The below 2 lines are required if we are using images in sanity
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
