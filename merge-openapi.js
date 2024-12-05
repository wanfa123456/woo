const { exec } = require('child_process');

console.log('Watching for OpenAPI file changes...');

exec(
  'openapi bundle api-reference/openapi.json  --output openapi-merged.json',
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
