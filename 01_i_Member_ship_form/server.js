import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import cors from "cors";

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define the file to save the data
const FILE_PATH = "./formData.csv";

// Initialize the CSV file with headers if it doesn't exist
if (!fs.existsSync(FILE_PATH)) {
  const headers =
    "Date,Form No,Name,Father/Husband Name,Religion,CNIC,Age,Address,UC/VC/NC,Ward No,Block No,Assembly Constituency,District,Education,Blood Group,Profession,Phone Number,Email\n";
  fs.writeFileSync(FILE_PATH, headers);
}

// Route to handle form submission
app.post("/submit", (req, res) => {
  const formData = req.body;

  // Convert the form data to a CSV row
  const csvRow =
    [
      formData.date,
      formData.formNo,
      formData.name,
      formData.fatherHusbandName,
      formData.religion,
      formData.cnic,
      formData.age,
      formData.address,
      formData.ucVcNc,
      formData.wardNo,
      formData.blockNo,
      formData.assemblyConstituency,
      formData.district,
      formData.education,
      formData.bloodGroup,
      formData.profession,
      formData.phoneNumber,
      formData.email,
    ]
      .map((value) => `"${value}"`) // Wrap each value in double quotes
      .join(",") + "\n";

  // Append the CSV row to the file
  fs.appendFile(FILE_PATH, csvRow, (err) => {
    if (err) {
      console.error("Error saving form data:", err);
      res.status(500).send("Failed to save form data.");
    } else {
      console.log("Form data saved successfully.");
      res.status(200).send("Form data saved successfully.");
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
