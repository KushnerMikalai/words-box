import { Application, Context, helpers, Router } from "oak";
import { oakCors } from "cors";
import { rgb24 } from "fmt/colors.ts";
import { DOMParser } from "deno-dom-wasm";

const port = 8000;
const app = new Application();

app.use(oakCors());

const router = new Router();

router
  .get("/", (context: Context) => {
    context.response.body = "html";
  })
  .get("/converter", async (context: Context) => {
    const url = "https://myfin.us/currency-converter";
    const query = helpers.getQuery(context);

    const from = query.from || "usd";
    const to = query.to || "usd";
    const amount = query.amount || 1;

    try {
      const res = await fetch(`${url}/${from}-${to}/${amount}`);
      const text = await res.text();
      const html = new DOMParser().parseFromString(text, "text/html")!;
      const value = html.querySelector(".conversion__value-text")!;

      context.response.body = {
        data: value ? value.textContent.replace("  ", " ") : "no data",
      };
    } catch (e) {
      context.response.body = "error";
    }
  });

app.use(router.routes());
app.use(router.allowedMethods());

// app.use((ctx: Context) => {
//   ctx.response.body = "Hello World!";
// });

app.addEventListener("listen", (listener) => {
  console.log(rgb24(
    `Listening on: ${listener.secure ? "https://" : "http://"}${
      listener.hostname ?? "localhost"
    }:${listener.port}`,
    { r: 255, g: 153, b: 204 },
  ));
});

await app.listen({ port });
