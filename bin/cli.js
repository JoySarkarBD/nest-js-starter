#!/usr/bin/env node

const { execSync } = require('child_process');

// Function to run a command synchronously
function runCommand(command) {
    try {
        // Execute the command synchronously
        const output = execSync(command, { stdio: 'inherit' });
        return output.toString();
    } catch (error) {
        // Log any errors
        console.error(`Error executing command: ${command}`);
        console.error(error.stderr ? error.stderr.toString() : error.toString());
        process.exit(1);
    }
}

// Read the repository name from command line arguments
const repoName = process.argv[2];

// Construct the Git checkout and dependency installation commands
const gitCheckoutCommand = `git clone --depth 1 https://github.com/JoySarkarBD/nestjs-starter-project ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

// Log the cloning process
console.log(`Cloning the repository with the name ${repoName}`);

// Clone the repository
runCommand(gitCheckoutCommand);

// Install dependencies
console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);

// Check if dependency installation was successful
if (!installedDeps) {
    console.error('Failed to install dependencies.❌');
    process.exit(1);
}

// Log completion message
console.log(`Repository ${repoName} successfully cloned and dependencies installed.👩‍💻`);

// Log the happy coding message
console.log("Coding. Eat, Sleep & 💻");

console.log("Congratulations! You're ready. Following the commands to start.💽");

console.log(`cd ${repoName} && npm run start:dev`);

