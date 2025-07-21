// jest.config.js
const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',                    // required for TS to work
  testEnvironment: 'node',
  transform: {
    ...tsJestTransformCfg,
  },
  roots: ['<rootDir>/src'],             // point to your test source folder
  moduleFileExtensions: ['ts', 'tsx', 'js'],
};
