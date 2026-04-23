# 🚀 Quick Start Guide - Portfolio Website

## Langkah Cepat untuk Memulai

### 1️⃣ Jalankan Development Server

```bash
# Terminal 1 - Laravel Server
php artisan serve

# Terminal 2 - Vite Dev Server (untuk hot reload)
npm run dev
```

Buka browser: `http://127.0.0.1:8000`

### 2️⃣ Edit Data Portfolio Anda

Buka file: `app/Http/Controllers/PortfolioController.php`

Ganti data berikut dengan informasi Anda:

```php
// Nama dan Tagline
'name' => 'Nama Anda',
'title' => 'Full Stack Developer',
'tagline' => 'Tagline Anda',

// Email dan Kontak
'email' => 'email@anda.com',
'phone' => '+62 812 3456 7890',
'location' => 'Kota Anda',

// Social Media
'github' => 'https://github.com/username-anda',
'linkedin' => 'https://linkedin.com/in/username-anda',
'twitter' => 'https://twitter.com/username-anda',
```

### 3️⃣ Tambah Project Anda

Di file yang sama, edit bagian `projects`:

```php
'projects' => [
    [
        'title' => 'Nama Project Anda',
        'description' => 'Deskripsi singkat project...',
        'technologies' => ['Laravel', 'React', 'MySQL'],
        'image' => '/images/project1.jpg', // Opsional
        'link' => 'https://link-project.com',
    ],
    // Tambahkan project lainnya...
],
```

### 4️⃣ Update Skills

```php
'skills' => [
    [
        'category' => 'Frontend Development',
        'items' => ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
    ],
    [
        'category' => 'Backend Development',
        'items' => ['Laravel', 'Node.js', 'PHP', 'Python'],
    ],
    // Tambahkan kategori lainnya...
],
```

### 5️⃣ Tambah Experience

```php
'experience' => [
    [
        'title' => 'Senior Developer',
        'company' => 'Nama Perusahaan',
        'period' => '2022 - Present',
        'description' => 'Deskripsi pekerjaan Anda...',
    ],
    // Tambahkan experience lainnya...
],
```

## 🎨 Kustomisasi Tampilan

### Ubah Warna Tema

Edit file: `resources/js/pages/Portfolio.tsx`

Cari dan ganti warna:
- `from-blue-400 to-cyan-400` → Warna gradient text
- `from-blue-500 to-cyan-500` → Warna button
- `bg-slate-900` → Background

### Ubah Font

Edit file: `resources/views/app.blade.php`

Ganti link font:
```html
<link href="https://fonts.bunny.net/css?family=nama-font:400,500,600" rel="stylesheet" />
```

## 📸 Tambah Gambar Project

1. Simpan gambar di folder: `public/images/`
2. Update path di controller:
```php
'image' => '/images/nama-gambar.jpg',
```

## 🔧 Tips Development

### Hot Reload
Gunakan `npm run dev` untuk auto-refresh saat edit code

### Build Production
```bash
npm run build
```

### Clear Cache
```bash
php artisan cache:clear
php artisan config:clear
php artisan view:clear
```

## 📱 Test Responsive

Buka browser dan test di:
- Desktop (1920px)
- Tablet (768px)
- Mobile (375px)

## ✅ Checklist Sebelum Deploy

- [ ] Ganti semua data placeholder dengan data asli
- [ ] Update social media links
- [ ] Tambahkan gambar project
- [ ] Test form contact
- [ ] Test semua links
- [ ] Build production: `npm run build`
- [ ] Test di berbagai browser
- [ ] Test responsive di mobile

## 🆘 Troubleshooting

### Error: npm packages not found
```bash
npm install
```

### Error: Class not found
```bash
composer dump-autoload
```

### Styling tidak muncul
```bash
npm run build
php artisan view:clear
```

### Port 8000 sudah digunakan
```bash
php artisan serve --port=8001
```

## 📞 Butuh Bantuan?

Jika ada masalah, cek:
1. Console browser (F12) untuk error JavaScript
2. Laravel log: `storage/logs/laravel.log`
3. Terminal untuk error PHP/Node

---

**Happy Coding! 🎉**
