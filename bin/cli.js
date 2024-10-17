#!/usr/bin/env node
const { execSync } = require("child_process");
const { Select } = require("enquirer");
require("@scarf/scarf")()

const RunCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to execute ${command}`, error);
    return false;
  }
  return true;
};

(async () => {
  const qus1 = new Select({
    name: "color",
    message: "Select language",
    choices: ["JavaScript"],
  });

  const qus2 = new Select({
    name: "color",
    message: "Which ECMAScript do you need?",
    choices: ["ES5", "ES6+"],
  });

  const qus3 = new Select({
    name: "color",
    message: "Which package manager do you need?",
    choices: ["npm", "yarn"],
  });

  let sourceName = "";
  const ans1 = await qus1.run();
  if (ans1 === "JavaScript") {
    const ans2 = await qus2.run();
    const ans3 = await qus3.run();
    sourceName = `${ans3 === "yarn" ? "YARN_" : ""}${ans2}`;
  } else {
    sourceName = `TS`;
  }

  const repoName = process.argv[2] ? process.argv[2] : "api";
  const gitCheckoutCommand = `git clone https://github.com/jinnatul/central-resources --branch ${sourceName} --single-branch ${repoName}`;
  const installDepsCommand = `cd ${repoName} && npm install`;

  console.log(`\n\n${"\033[32m"} Creating a new Node app in ${__dirname}.\n\n`);
  const CheckedOut = RunCommand(gitCheckoutCommand);
  if (!CheckedOut) process.exit(-1);

  console.log(`\n${"\033[31m"} Installing dependencies for ${repoName}\n`);
  const InstalledDeps = RunCommand(installDepsCommand);
  if (!InstalledDeps) process.exit(-1);

  console.log(`\n${"\033[32m"} Congratulations! You are ready.`);
  console.log(`\n${"\033[33m"} This node.js template maintained by Morol`);
  console.log(`\n${"\033[35m"} Dev -> cd ${repoName} && npm run dev`);
  console.log(`\n${"\033[31m"} Prod -> cd ${repoName} && npm start\n`);
})();
