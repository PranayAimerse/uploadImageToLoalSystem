// const path = require('path');
// const fs = require('fs');
// const User = require("../models/user");

// exports.imageupload = async (req, res) => {
//   try {
//     const { name } = req.body;

//     // Check if the file exists in the request
//     if (!req.files || !req.files.imagefile) {
//       return res.status(400).json({
//         success: false,
//         message: "No file uploaded.",
//       });
//     }

//     const imagefile = req.files.imagefile;

//     console.log("File Received -> ", imagefile);

//     // Define the directory to store uploaded files
//     const uploadDir = path.join(__dirname, "../assets/");

//     // Create the upload directory if it doesn't exist
//     if (!fs.existsSync(uploadDir)) {
//       fs.mkdirSync(uploadDir, { recursive: true });
//     }

//     // Generate a unique filename
//     const filename = `${Date.now()}_${imagefile.name}`;
//     const filepath = path.join(uploadDir, filename);

//     // Move the uploaded file to the specified path
//     await imagefile.mv(filepath);

//     // Generate the file URL (assuming server runs on localhost:3000)
//     const fileUrl = `${req.protocol}://${req.get('host')}/assets/${filename}`;

//     console.log("File saved at -> ", filepath);
//     console.log("File URL -> ", fileUrl);

//     // Save user data (if needed) to the database
//     const user = await User.create({ name: name,imgae_url:fileUrl });

//     // Respond with success and the file URL
//     return res.status(200).json({
//       success: true,
//       message: "File uploaded successfully.",
    
//       data: user,
//     });
//   } catch (error) {
//     console.error("Error uploading file: ", error);
//     return res.status(500).json({
//       success: false,
//       message: "Error in uploading file.",
//     });
//   }
// };
