import { domain } from "./dns";

const www = new sst.aws.TanstackStart("WWW", {
  domain: {
    name: domain,
    redirects: ["www." + domain],
    dns: sst.cloudflare.dns(),
  },
  path: "./packages/www",
});

export const outputs = {
  www: www.url,
};
