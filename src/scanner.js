const fs = require('fs');
const axios = require('axios');
const payloads = require('../payloads.json');

async function scan(targetUrl, outputFile) {
  // Validasi URL
  if (!targetUrl.includes('=')) {
    throw new Error('URL harus mengandung parameter (contoh: ?file=)');
  }

  console.log(`[+] Memulai scan: ${targetUrl}`);
  console.log(`[+] Memuat ${payloads.length} payload...`);

  const results = [];

  for (const payload of payloads) {
    try {
      const testUrl = `${targetUrl}${payload.path}`;
      const response = await axios.get(testUrl, { 
        timeout: 5000,
        validateStatus: () => true 
      });

      if (response.data.includes(payload.pattern)) {
        results.push({
          url: testUrl,
          payload: payload.name,
          status: response.status
        });
        console.log(`[VULN] ${payload.name} => ${response.status}`);
      }
    } catch (error) {
      console.log(`[ERROR] Payload ${payload.name}: ${error.message}`);
    }
  }

  // Simpan hasil
  const outputContent = results.map(r => 
    `URL: ${r.url}\nPayload: ${r.payload}\nStatus: ${r.status}\n`
  ).join('\n');

  fs.writeFileSync(outputFile, outputContent || 'Tidak ada kerentanan ditemukan');
}

module.exports = { scan };
