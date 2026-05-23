# Panduan Deploy ke Cloudflare Workers

## ✅ Perbaikan yang Sudah Dilakukan

1. **`wrangler.jsonc`** — Hapus flag `global_fetch_strictly_public` yang bisa memblokir request Firebase
2. **`next.config.ts`** — Hapus import dinamis `@opennextjs/cloudflare` yang hanya untuk dev
3. **`src/lib/firebase.ts`** — Bersihkan inisialisasi Firebase

---

## 🚀 Langkah Deploy

### 1. Install dependencies
```bash
npm install
```

### 2. Login ke Cloudflare (WAJIB — ini kemungkinan penyebab gagalnya!)
```bash
npx wrangler login
```
Browser akan terbuka. Login dengan akun Cloudflare Anda.

### 3. Build untuk Cloudflare
```bash
npm run cf:build
```

### 4. Cek ukuran bundle (opsional)
```bash
npx wrangler deploy --dry-run
```

### 5. Deploy!
```bash
npm run cf:deploy
```
atau secara terpisah:
```bash
npx opennextjs-cloudflare build
npx wrangler deploy
```

---

## 🔧 Jika Masih Gagal

### Error: "Authentication error" / "Not authenticated"
Jalankan `npx wrangler login` terlebih dahulu.

### Error: "Script size too large"
Upgrade ke Cloudflare Workers Paid plan ($5/bulan) — bundle ini ~1.2MB terkompresi, melebihi free tier (1MB).

Atau, reduce bundle dengan menjalankan:
```bash
# Hapus xlsx dari dependencies jika tidak kritis (hemat ~300KB)
npm uninstall xlsx
```

### Error: "Worker failed to start" setelah deploy
Kemungkinan Firebase SDK crash di Worker runtime. Cek Cloudflare dashboard → Workers → Logs.

### Cara lihat Account ID Cloudflare
1. Login di dash.cloudflare.com
2. Klik nama akun di pojok kiri
3. Account ID ada di sidebar kanan

Tambahkan ke wrangler.jsonc jika perlu:
```jsonc
{
  "account_id": "your-account-id-here",
  // ... lainnya
}
```

---

## 📋 Variabel Environment

Untuk production, tambahkan di Cloudflare dashboard (Workers → Settings → Environment Variables):
- Tidak diperlukan saat ini karena Firebase config sudah hardcoded dan semua logic client-side.

---

## 🧪 Test Lokal Sebelum Deploy

```bash
npm run cf:preview
```
Ini akan menjalankan Worker secara lokal dengan Miniflare.
