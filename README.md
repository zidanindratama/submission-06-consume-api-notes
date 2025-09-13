# 📒 Aplikasi Catatan Pribadi (Consume API)

Proyek ini adalah aplikasi catatan pribadi berbasis **React + Vite + TailwindCSS** dengan dukungan **React Router**, yang **terintegrasi dengan RESTful API Dicoding Notes** (`https://notes-api.dicoding.dev/v1`).
Pengguna dapat melakukan registrasi, login, membuat catatan baru, melihat daftar catatan, membuka detail, mengarsipkan / batal arsip, dan menghapus catatan. Aplikasi juga mendukung **ubah tema (light/dark)** dan **ubah bahasa (ID/EN)** dengan persistensi di local storage.

## 🌐 Demo

- Live Demo: [Aplikasi Catatan Pribadi (Consume API)](https://submission-06-consume-api-notes.vercel.app/login)
- Repository: [GitHub Repo](https://github.com/zidanindratama/submission-06-consume-api-notes)

## ✨ Fitur Utama

- **Registrasi & Autentikasi**

  - Halaman `/register` untuk membuat akun baru.
  - Halaman `/login` untuk autentikasi pengguna.
  - Token akses disimpan di local storage.
  - Tombol logout untuk menghapus autentikasi.

- **Proteksi Halaman**

  - Hanya pengguna login yang bisa mengakses catatan (daftar, detail, arsip, tambah).
  - Jika belum login, hanya bisa akses halaman login / registrasi.

- **Halaman Catatan**

  - **Daftar Catatan Aktif** di `/notes`.
  - **Daftar Catatan Arsip** di `/archived`.
  - **Detail Catatan** di `/notes/:id`.
  - **Tambah Catatan Baru** di `/notes/new`.
  - **Hapus Catatan** langsung dari daftar/detail.
  - **Arsip / Batal Arsip Catatan** dari detail / daftar.

- **Tema & Bahasa**

  - Tombol toggle tema **gelap/terang** (persist di local storage).
  - Tombol toggle bahasa **Indonesia ↔ Inggris** (persist di local storage).

- **UX**

  - Indikasi loading saat fetch data API.
  - Pesan error friendly bila request gagal.

- **Halaman 404**

  - Jika URL tidak dikenal, aplikasi menampilkan halaman khusus 404.

## 📂 Struktur Proyek

```
src/
├── App.jsx
├── main.jsx
├── api.js
├── hooks/
│   └── useInput.js
├── contexts/
│   ├── AuthContext.jsx
│   ├── ThemeContext.jsx
│   └── LocaleContext.jsx
├── components/
│   ├── Navbar.jsx
│   ├── Loader.jsx
│   ├── NoteForm.jsx
│   ├── NoteItem.jsx
│   ├── NoteList.jsx
│   └── ProtectedRoute.jsx
└── pages/
    ├── LoginPage.jsx
    ├── RegisterPage.jsx
    ├── NotesPage.jsx
    ├── ArchivedPage.jsx
    ├── NoteDetailPage.jsx
    ├── NewNotePage.jsx
    └── NotFound.jsx
```

## 🚀 Teknologi

- [React](https://react.dev/) – Library UI berbasis komponen.
- [React Router](https://reactrouter.com/) – Routing SPA.
- [Vite](https://vitejs.dev/) – Bundler cepat dengan HMR.
- [TailwindCSS](https://tailwindcss.com/) – Styling utility-first.
- [Dicoding Notes API](https://notes-api.dicoding.dev/v1) – RESTful API untuk data catatan.

## ▶️ Cara Menjalankan

1. Clone repository:

   ```bash
   git clone https://github.com/zidanindratama/submission-06-consume-api-notes
   cd submission-06-consume-api-notes
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Jalankan aplikasi:

   ```bash
   npm run dev
   ```

4. Akses di browser:

   ```
   http://localhost:5173
   ```
