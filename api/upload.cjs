import { S3Client } from "@aws-sdk/client-s3";
import { createReadStream, PutObjectCommand } from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req, res) {
  const s3Client = new S3Client({
    credentials: {
      accessKeyId: process.env.ACCESS_KEY,
      secretAccessKey: process.env.ACCESS_SECRET,
    },
    region: process.env.REGION,
  });
  const uploadCommand = new PutObjectCommand({
    Bucket: process.env.BUCKET,
    Key: "file-name",
    Body: createReadStream("file-path"),
  });
  const response = await s3Client.send(uploadCommand);
  response.status(200).json({ response });
}
