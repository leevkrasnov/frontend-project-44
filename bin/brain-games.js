#!/usr/bin/env node
import { greetingName } from "../src/cli.js";

const greeting = () => {
  const greet = 'Welcome to the Brain Games!';
  return greet
}

console.log(greeting());
console.log(greetingName());