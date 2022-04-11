# App Server

- Deno 1.17.2v (TypeScript)
- Docker

> Before PUSH you need run $ deno fmt

### RUN DENO SERVER

```bash
deno run --unstable --watch --allow-read --allow-net --import-map=import_map.json app.ts
```