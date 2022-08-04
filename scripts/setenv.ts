const { writeFile } = require('fs');
const { argv } = require('yargs');

require('dotenv').config();

const environment = argv.environment;
const isProduction = environment === 'prod';
const targetPath = isProduction
  ? `./src/environments/environment.prod.ts`
  : `./src/environments/environment.ts`;

const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   cmfApiKey: "${process.env['CMF_API_KEY']}"
};
`;

writeFile(`./src/environments/environment.prod.ts`, '', (err: any) => {
  if (err) {
    console.log(err);
  }
});
writeFile(`./src/environments/environment.ts`, '', (err: any) => {
  if (err) {
    console.log(err);
  }
});
writeFile(targetPath, environmentFileContent, (err: any) => {
  if (err) {
    console.log(err);
  }
  console.log(`Wrote variables to ${targetPath}`);
});
