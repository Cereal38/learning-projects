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

### Prisma

When the schema has bean modified inside the prisma/schema.prisma file, run the following commands. It will create the migration and regenerate the Prisma client.

```bash
npx prisma migrate dev --name <migration-name>
npx prisma generate
```

### Manage the S3 bucket locally

Run Localstack on your machine for the first time

```bash
# First time command
docker run --name share-pic-s3 -it -p 4566:4566 -p 4510-4559:4510-4559 localstack/localstack
```

For the next time, just start the existing container

```bash
docker start -i share-pic-s3
```

If not already done, install awslocal

```bash
pip install awscli-local[ver1]
```

Then create the share-pic bucket

```bash
awslocal s3api create-bucket --bucket share-pic
```
