# Sveltepress

This is the starter boilerplate code for developing a full stack web app. This includes a frontend with sveltekit and pre-made UI components from the very popular UI component library - shadcn. For the backend, we have express js serving the REST API. The documentation for all the endpoints can be viewed in a very beautifully layed out and highly functional frontend using swagger docs. The API is monitored for the performance using prometheus as the time series database and grafana as a beautiful visualizer. All this is made intercompatible and easy to manage and run using docker.

# Usage

## 1. Clonning the repo
Get the code of this repo on your machine.
```sh
git clone https://github.com/Sahil2004/sveltepress.git
cd sveltepress
```

### 2. Environment configuration
Configure your environment variables
```sh
cp .env.sample .env
```

### 3. Get all the services up and running
```sh
docker compose up
```

Well, that's it :D
