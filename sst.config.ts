/// <reference path="./.sst/platform/config.d.ts" />
import { readdirSync } from "fs";

export default $config({
  app(input) {
    return {
      name: "boogie-wtf",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          region: "us-east-1",
          profile:
            input?.stage === "production" ? "boogie-production" : "boogie-dev",
        },
        cloudflare: true,
      },
    };
  },
  async run() {
    const outputs = {};
    for (const value of readdirSync("./infra/")) {
      const result = await import(`./infra/${value}`);
      if (result.outputs) Object.assign(outputs, result.outputs);
    }
    return outputs;
  },
});
