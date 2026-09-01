// Jest Global Setup
// This file is executed before running the test suite

// Suppress console errors and warnings during testing (optional)
const originalError = console.error;
const originalWarn = console.warn;

beforeAll(() => {
  // Add any global test setup here
  // Example: Initialize test databases, mock external services, etc.
});

afterAll(() => {
  // Cleanup after all tests
});

// Optionally restore console output
process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
});
