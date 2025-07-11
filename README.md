# PTScanner - Advanced Path Traversal Vulnerability Scanner

![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)
[![npm version](https://img.shields.io/npm/v/ptscanner.svg)](https://www.npmjs.com/package/ptscanner)
[![npm downloads](https://img.shields.io/npm/dt/ptscanner.svg)](https://www.npmjs.com/package/ptscanner)
![License](https://img.shields.io/badge/license-MIT-blue)
[![GitHub Issues](https://img.shields.io/github/issues/odaysec/ptscanner)](https://github.com/odaysec/ptscanner/issues)
[![GitHub Stars](https://img.shields.io/github/stars/odaysec/ptscanner)](https://github.com/odaysec/ptscanner/stargazers)


PTScanner adalah alat profesional untuk mendeteksi kerentanan Path Traversal/Local File Inclusion (LFI), di-porting dari [ApachSAL](https://github.com/pwnosec/ApachSAL) versi Python ke Node.js dengan berbagai peningkatan performa dan fitur.

## Fitur Utama

- **20+ Payload Spesifik** - Koleksi payload Path Traversal yang terus diperbarui
- **Deteksi Akurat** - Menggunakan pola regex dan signature khusus
- **Multi-Platform** - Mendeteksi kerentanan di Unix, Windows, dan aplikasi web
- **CLI Powerful** - Antarmuka command-line yang mudah digunakan
- **Output Terstruktur** - Hasil scan dalam format yang mudah dibaca

## Instalasi

### Instalasi Global (Direkomendasikan):

```bash
npm install -g ptscanner
```

### Instalasi Lokal:

```bash
npm install ptscanner
```

### Via GitHub:

```bash
git clone https://github.com/odaysec/ptscanner.git
cd ptscanner
npm install
npm link
```

## Penggunaan Dasar

Scan target URL:

```bash
ptscanner scan --url "http://target.com/vulnerable.php?file=" --output hasil.txt
```

### Opsi Command:

| Opsi        | Deskripsi                                  | Default       |
|-------------|--------------------------------------------|---------------|
| `-u, --url` | URL target (harus mengandung parameter)    | **Required**  |
| `-o, --output` | File output untuk menyimpan hasil       | `results.txt` |
| `-v, --verbose` | Mode verbose (debugging)               | `false`       |

## Demo Penggunaan

### Scan dasar dengan output default:

```bash
ptscanner scan -u "http://example.com/page.php?document="
```

### Scan dengan output custom:

```bash
ptscanner scan -u "http://testphp.vulnweb.com/showimage.php?file=" -o lfi_results.txt
```

### Demo Output:

```
[+] Memulai scan: http://testphp.vulnweb.com/showimage.php?file=
[+] Memuat 20 payload...
[✔] VULN: Basic Directory Traversal (Unix) - Status: 200
[✔] VULN: Null Byte Injection - Status: 200

Scan selesai! Hasil disimpan di: lfi_results.txt
```

## Format Output

File output akan berisi:

```plaintext
[VULNERABILITY FOUND]
URL: http://testphp.vulnweb.com/showimage.php?file=../../../../etc/passwd
Payload: Basic Directory Traversal (Unix)
Status Code: 200
Detection Pattern: root:x:

---
[VULNERABILITY FOUND] 
URL: http://testphp.vulnweb.com/showimage.php?file=....//....//....//....//etc/passwd
Payload: Double Encoding
Status Code: 200
Detection Pattern: root:x:
```

## Customisasi Payload

Anda dapat menambahkan payload custom dengan mengedit file `payloads.json`:

```json
{
  "name": "Custom Payload",
  "path": "custom/traversal/payload",
  "pattern": "custom_pattern"
}
```


## Lisensi
Proyek ini dilisensikan di bawah [MIT License](LICENSE).

[![Star History Chart](https://api.star-history.com/svg?repos=odaysec/ptscanner&type=Date)](https://www.star-history.com/#odaysec/ptscanner&Date)
