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

When the schema has bean modified inside the prisma/schema.prisma file, run the following command. It will create the migration.

```bash
npx prisma migrate dev --name init
```

### Manage the S3 bucket locally

Run Localstack on your machine

```bash
docker run --rm -it -p 4566:4566 -p 4510-4559:4510-4559 localstack/localstack
```

If not already done, install awslocal

```bash
pip install awscli-local[ver1]
```

Then create the share-pic bucket

```bash
awslocal s3api create-bucket --bucket share-pic
```
