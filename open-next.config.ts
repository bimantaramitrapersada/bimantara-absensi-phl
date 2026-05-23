import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Konfigurasi OpenNext untuk Cloudflare Workers.
// Karena aplikasi ini full client-side (Firestore langsung) dan hanya punya
// 1 API route sederhana (/api/health), kita pakai konfigurasi minimal.
// Cache R2/KV tidak diperlukan.
export default defineCloudflareConfig({});
