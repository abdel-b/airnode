import { runAndHandleErrors, runShellCommand } from '../src';

const main = async () => {
  runShellCommand(`yarn --cwd ../../ docker:build:deployer`);
};

runAndHandleErrors(main);
