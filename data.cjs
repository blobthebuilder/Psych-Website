require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const allowedOrigins = [
  "http://127.0.0.1:5501",
  "https://researchwebsite.netlify.app/",
  "",
];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

const app = express();
app.use(
  cors({
    origin: [
      "https://psych-website-2th5nzmjw-blobthebuilders-projects.vercel.app",
      "http://127.0.0.1:5501",
      "http://localhost:3000",
      "*",
    ],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(bodyParser.json());

app.listen(3001);

const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const s3Client = new S3Client({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.ACCESS_SECRET,
  },
  region: process.env.REGION,
});
const BUCKET = process.env.BUCKET;
function uploadToAWS(fileName, csvContent) {
  const putObjectCommand = new PutObjectCommand({
    Bucket: BUCKET,
    Key: fileName,
    Body: csvContent,
    ContentType: "text/csv", // Set the content type if needed
  });

  (async () => {
    try {
      const response = await s3Client.send(putObjectCommand);
      console.log(`File uploaded successfully. ETag: ${response.ETag}`);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  })();
}

aws.config.update({
  secretAccessKey: process.env.ACCESS_SECRET,
  accessKeyId: process.env.ACCESS_KEY,
  region: process.env.REGION,
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    acl: "public-read",
    bucket: BUCKET,
    key: function (req, file, cb) {
      console.log(file);
      cb(null, file.originalname);
    },
  }),
});

app.post("/api/upload", upload.single("file"), async (req, res, next) => {
  res.set(
    "Access-Control-Allow-Origin",
    "https://psych-website-eight.vercel.app/"
  );
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.status(200).json({ res: "idk" });
});
/*
app.post("/upload", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://127.0.0.1:5501");
  const csvContent = req.body.csvContent;
  console.log("content: " + csvContent);
  const fileName = req.body.fileName;
  uploadToAWS("test1.csv", csvContent);
  res.status(200).json({ res: csvContent });
});*/

app.get("/list", async (req, res) => {
  let r = await s3.listObjectsV2({ Bucket: BUCKET }).promise();
  let x = r.Contents.map((item) => item.Key);
  res.send(x);
});

app.get("/download/:filename", async (req, res) => {
  const filename = req.params.filename;
  let x = await s3.getObject({ Bucket: BUCKET, Key: filename }).promise();
  res.send(x.Body);
});

app.delete("/delete/:filename", async (req, res) => {
  const filename = req.params.filename;
  await s3.deleteObject({ Bucket: BUCKET, Key: filename }).promise();
  res.send("File Deleted Successfully");
});

/*
// Select the <span> element by its ID
const userIdSpan = document.getElementById("userId");

// Fetch data from the server
export const demo = async () => {
  const response = await fetch("http://localhost:4000/api/data/");
  const json = await response.json();

  if (response.ok) {
    userIdSpan.textContent = json[0].totalUsers;
    return json;
  }
};

export const getData = async () => {
  const response = await fetch("http://localhost:4000/api/data/");
  const json = await response.json();

  if (response.ok) {
    return json;
  }
};

export const updatePaths = async (path) => {
  const response = await fetch("http://localhost:4000/api/data/" + path, {
    method: "POST",
  });
  const json = await response.json();
  if (response.ok) {
    return json;
  }
};

export const updateUsers = async () => {
  const response = await fetch("http://localhost:4000/api/data/", {
    method: "POST",
  });
  const json = await response.json();
  if (response.ok) {
    return json;
  }
};
*/
