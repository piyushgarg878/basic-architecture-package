#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");

const projectName = process.argv[2] || "my-turborepo-app";
const targetDir = path.join(process.cwd(), projectName);
const templateDir = path.join(__dirname, "../template");

console.log(`🚀 Creating a new Turborepo project in ${targetDir}...`);

fs.copy(templateDir, targetDir)
  .then(() => console.log("✅ Project setup complete!"))
  .catch(err => console.error("❌ Error copying files:", err));
