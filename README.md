# File Metadata Microservice

This is the boilerplate for the File Metadata Microservice project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/file-metadata-microservice

# Layanan Analisis File Sederhana

Aplikasi kecil ini dibuat untuk membantumu mendapatkan informasi dasar tentang file yang kamu unggah. Bayangkan, kamu bisa tahu nama file, jenis file, dan seberapa besar ukurannya, cukup dengan mengunggahnya.

## Apa Saja Kemampuannya?

*   **Terima Unggahan:** Sistem ini menerima file yang kamu kirim melalui formulir.
*   **Ambil Data Penting:** Otomatis mengambil informasi seperti nama asli file, tipe file, dan ukurannya dalam byte.
*   **Berikan Hasil:** Data tersebut akan dikembalikan kepadamu dalam bentuk JSON yang mudah dibaca.

## Cara Pakai

### Endpoint API

*   **`POST /api/fileanalyse`**: Ini adalah alamat yang kamu tuju saat mengunggah file.
    *   **Bagaimana Cara Kirim?**
        *   Kamu perlu form HTML dengan method `POST` dan atribut `enctype="multipart/form-data"`.
        *   Pastikan ada input dengan tipe `file` dan namanya `upfile`.
    *   **Apa yang Didapatkan?**
        *   Sistem akan mengirimkan balasan dalam format JSON, yang berisi:
            *   `name`: Nama file yang kamu unggah.
            *   `type`: Jenis file (MIME type).
            *   `size`: Ukuran file dalam byte.
    *   **Contoh Balasan:**
        ```json
        {
          "name": "laporan_keuangan.xlsx",
          "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "size": 456789
        }
        ```

### Pengaturan Tambahan

*   **Port Aplikasi:**
    *   Aplikasi ini akan mencari variabel lingkungan bernama `PORT` untuk menentukan port.
    *   Kalau variabel `PORT` tidak ada, aplikasi akan otomatis menggunakan port 3000.
    *   Kamu bisa atur sendiri portnya dengan membuat file bernama `.env`, lalu tambahkan `PORT=<nomor_port_pilihan>`.

### Langkah-Langkah Menjalankan

1.  Ambil dulu kodenya.
2.  Pasang semua yang dibutuhkan:
    ```bash
    npm install
    ```
3.  (Opsional) Buat file `.env` dan atur port jika kamu mau.
4.  Jalankan aplikasinya:
    ```bash
    npm start
    ```

### Contoh Formulir HTML

Ini contoh form yang bisa kamu gunakan untuk mengunggah file:

```html
<form action="/api/fileanalyse" method="post" enctype="multipart/form-data">
  <input type="file" name="upfile" />
  <input type="submit" value="Unggah File" />
</form>

#Alat dan Teknologi yang Digunakan
Node.js
Express.js
multer: Modul untuk menangani unggahan file.
cors: Modul untuk mengaktifkan akses lintas domain.

#Kontribusi
Jika kamu punya ide atau cara untuk membuatnya lebih baik, jangan sungkan untuk mengirim pull request.

#Lisensi
MIT license