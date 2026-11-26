# api-author

> **Disclaimer:** This project is an independent open-source software implementation inspired by the CommonKADS knowledge engineering methodology (Schreiber et al.). It is not affiliated with or endorsed by the original methodology authors or any third-party trademark holders.

A Docker-deployable authoring HTTP service for managing CommonKADS knowledge domains. Currently a stub — authoring endpoints are planned for a follow-on release.

## Building the image

```sh
docker build -t api-author .
```

## Running the container

```sh
docker run -p 3000:3000 api-author
```

### Environment variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3000` | HTTP port to listen on |

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Liveness check — returns `{"status":"not implemented"}` while stub |
