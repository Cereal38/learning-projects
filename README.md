# Learning projects

The whole purpose of this repo is to store simple projects to help me learn webdev.

### Create a next project

Init the project

```bash
npx create-next-app@latest
```

Add shadcn to the project

```bash
# Init shadcn
npx shadcn@latest init

# Add useful components
npx shadcn@latest add
```

Add useful packages

```bash
# Icons
npm install lucide-react
```

Deploy a local s3

```bash
# Create a Localstack container on the machine
docker run --name <container-name> -it -p 4566:4566 -p 4510-4559:4510-4559 localstack/localstack

# For the next time, just start the existing container
docker start -i <container-name>

# If not already done, install awslocal
pip install awscli-local[ver1]

# Then create a bucket
awslocal s3api create-bucket --bucket <bucket-name>
```

Deploy a local postgres db

```bash
# Create the db
docker run -d  \
  --name <container-name> \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=postgres \
  -p 5432:5432 \
  postgres:16

# To start it next times
docker start <container-name>
```
