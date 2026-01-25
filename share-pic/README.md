# SharePic

A simple app to allow people to share an image with a link.

### Manage the postgres db locally

Create the DB:

```bash
docker run -d  \
  --name share-pic-db \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=postgres \
  -p 5432:5432 \
  postgres:16
```

Start the DB:

```bash
docker start share-pic-db
```
