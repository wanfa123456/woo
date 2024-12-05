const { exec } = require('child_process');

console.log('Watching for OpenAPI file changes...');

exec(
  'swagger-cli bundle api-reference/openapi.json --outfile openapi-merged.json --type json',
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Error while merging OpenAPI files: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Swagger CLI Output:\n${stdout}`);
  }
);
