import { S3 } from '@aws-sdk/client-s3';

export const s3 = new S3({
  region: process.env.AWS_REGION,
  endpoint: process.env.AWS_ENDPOINT_URL,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
  forcePathStyle: true, // Localstack usually needs this
});

export async function uploadToBucket(
  fileKey: string,
  type: string,
  body: Buffer<ArrayBuffer>,
  bucketName: string
) {
  await s3.putObject({
    Bucket: bucketName,
    Key: fileKey,
    Body: body,
    ContentType: type,
    ContentLength: body.length,
  });
}
