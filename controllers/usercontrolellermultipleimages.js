const path = require('path');
const fs = require('fs');
const User = require("../models/user");

exports.imageupload = async (req, res) => {
  try {
    const { name } = req.body;
           
    // Check if the files exist in the request
    // if (!req.files || !req.files.imagefiles || !Array.isArray(req.files.imagefiles)) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "No files uploaded or invalid file format.",
    //   });
    // }

    const imagefiles = req.files.imagefiles;

    console.log("Files Received -> ", imagefiles);

    // Define the directory to store uploaded files
    const uploadDir = path.join(__dirname, "../assets/");

    // Create the upload directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Array to hold the file URLs
    const fileUrls = [];

    // Loop through all the uploaded files and save them
    for (const imagefile of imagefiles) {
      // Generate a unique filename
      const filename = `${Date.now()}_${imagefile.name}`;
      const filepath = path.join(uploadDir, filename);

      // Move the uploaded file to the specified path
      await imagefile.mv(filepath);

      // Generate the file URL (assuming the server runs on localhost:3000)
      const fileUrl = `${req.protocol}://${req.get('host')}/assets/${filename}`;
      fileUrls.push(fileUrl);

      console.log("File saved at -> ", filepath);
      console.log("File URL -> ", fileUrl);
    }

    // Save user data (if needed) to the database with multiple file URLs
    const user = await User.create({ name: name, image_urls: fileUrls });

    // Respond with success and the file URLs
    return res.status(200).json({
      success: true,
      message: "Files uploaded successfully.",
      data: user,
      fileUrls: fileUrls, // Return the file URLs in the response
    });
  } catch (error) {
    console.error("Error uploading files: ", error);
    return res.status(500).json({
      success: false,
      message: "Error in uploading files.",
    });
  }
};
