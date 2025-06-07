
# GitHub Repositories Explorer

Aplikasi ini memungkinkan pengguna untuk mencari pengguna GitHub berdasarkan username dan menampilkan repositori-repositori mereka. Aplikasi ini menggunakan GitHub API untuk mencari pengguna dan menampilkan repositori yang terkait.

## Fitur
- Mencari hingga 5 pengguna GitHub dengan username yang mirip.
- Menampilkan daftar repositori yang dimiliki oleh pengguna yang dipilih.
- Menampilkan jumlah bintang repositori.
- Desain responsif yang dapat diakses dengan baik di perangkat mobile dan desktop.

## Teknologi yang Digunakan
- **React**: Untuk membangun antarmuka pengguna.
- **TypeScript**: Untuk pengetikan statis dan pengelolaan tipe data.
- **GitHub API**: Untuk mengambil data pengguna dan repositori dari GitHub.
- **Tailwind CSS**: Untuk styling responsif dan pengelolaan layout.
- **React Spinners**: Untuk menampilkan loading state.

## Instalasi

### Prasyarat
- **Node.js**: Pastikan Node.js terinstal di komputer Anda. Jika belum, Anda dapat mengunduh dan menginstalnya dari [nodejs.org](https://nodejs.org/).

### Langkah-langkah Instalasi
1. **Clone repositori ini**:
   ```bash
   git clone https://github.com/AbdulTaupik/GitHub-repositories-explorer.git
   ```
2. **Masuk ke direktori proyek**:
   ```bash
   cd GitHub-repositories-explorer
   ```
3. **Install dependensi**:
   ```bash
   npm install
   ```
4. **Jalankan aplikasi**:
   ```bash
   npm start
   ```
   Aplikasi akan berjalan di `http://localhost:3000`.

## Cara Menggunakan
1. Masukkan nama pengguna GitHub di kolom pencarian.
2. Pilih pengguna dari hasil pencarian.
3. Repositori pengguna yang dipilih akan ditampilkan, beserta jumlah bintang untuk setiap repositori.

## Pengujian (Testing)

Aplikasi ini telah diuji menggunakan **Jest** dan **React Testing Library**. Berikut adalah beberapa pengujian yang dilakukan:

- **Unit Testing**: Pengujian untuk komponen seperti `SearchBar`, `ListUser`, dan `ListRepository`.
- **Integration Testing**: Pengujian untuk memastikan interaksi antara komponen berjalan dengan baik.
- Semua tes berhasil dan aplikasi bekerja dengan baik.

Untuk menjalankan pengujian lokal, kamu bisa menggunakan perintah:
```bash
npm test
```

## Deployment

Aplikasi ini di-deploy menggunakan **GitHub Pages**. Untuk mengakses aplikasi, kunjungi:
- [https://AbdulTaupik.github.io/GitHub-repositories-explorer](https://AbdulTaupik.github.io/GitHub-repositories-explorer)

Untuk meng-deploy aplikasi ke GitHub Pages, ikuti langkah-langkah berikut:

1. Pastikan aplikasi sudah dibuild dengan perintah:
   ```bash
   npm run build
   ```

2. Deploy aplikasi dengan perintah:
   ```bash
   npm run deploy
   ```

Untuk informasi lebih lanjut, baca dokumentasi GitHub Pages.

## Lisensi
MIT License - Lihat [LICENSE](LICENSE) untuk informasi lebih lanjut.

---

Terima kasih telah menggunakan aplikasi ini! Jika ada pertanyaan atau saran, jangan ragu untuk membuka **issue** atau **pull request**.
