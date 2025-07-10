#!/usr/bin/env node
const { program } = require('commander');
const { scan } = require('./scanner');

program
  .command('scan')
  .requiredOption('-u, --url <url>', 'URL target (contoh: http://site.com/page.php?file=)')
  .option('-o, --output <file>', 'File output', 'results.txt')
  .action(async (options) => {
    try {
      await scan(options.url, options.output);
      console.log(`\n[+] Scan selesai! Hasil disimpan di: ${options.output}`);
    } catch (error) {
      console.error(`\n[!] ERROR: ${error.message}`);
      process.exit(1);
    }
  });

program.parse(process.argv);
