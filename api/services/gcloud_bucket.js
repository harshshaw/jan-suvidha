const { Storage } = require("@google-cloud/storage");
const projectId = process.env.PROJECT_ID;
const keyFilename = "Jan-Suvidha-523c6c8c68af.json";
const storage = new Storage({ projectId, keyFilename });

// Makes an authenticated API request.
const gcloudUpload = async (file) => {
  try {
    const bucket = await storage.bucket("jan-suvidha-images");
    const result = await bucket.upload(file);
    const name = result[0].metadata.name;
    const url = `https://storage.googleapis.com/jan-suvidha-images/${name}`;
    return url;
  } catch (err) {
    console.error("ERROR:", err);
  }
};

module.exports = { gcloudUpload };
