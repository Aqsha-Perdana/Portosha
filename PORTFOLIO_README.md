# Portfolio Website

Portfolio website modern dan interaktif yang dibangun dengan Laravel 11, React, TypeScript, Inertia.js, dan Tailwind CSS.

## 🎨 Fitur

- **Hero Section** - Landing page dengan gradient biru yang menarik
- **About Me** - Informasi tentang diri Anda dengan highlight statistik
- **Skills** - Showcase keahlian teknis yang dikategorikan
- **Projects** - Portfolio project dengan deskripsi dan teknologi yang digunakan
- **Experience** - Timeline pengalaman kerja
- **Contact** - Form kontak dan informasi kontak lengkap
- **Animasi Smooth** - Menggunakan Framer Motion untuk animasi yang halus
- **Responsive Design** - Tampil sempurna di semua ukuran layar
- **Modern UI** - Desain dengan gradient biru/cyan yang elegan

## 🚀 Teknologi

- **Backend**: Laravel 11
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animasi**: Framer Motion
- **Icons**: Lucide React + Custom SVG
- **Bridge**: Inertia.js

## 📦 Instalasi

1. Clone repository
```bash
git clone <your-repo>
cd portosha
```

2. Install dependencies
```bash
composer install
npm install
```

3. Setup environment
```bash
cp .env.example .env
php artisan key:generate
```

4. Build assets
```bash
npm run build
# atau untuk development
npm run dev
```

5. Jalankan server
```bash
php artisan serve
```

6. Buka browser di `http://127.0.0.1:8000`

## 🎯 Kustomisasi Data

Edit file `app/Http/Controllers/PortfolioController.php` untuk mengubah:

### Hero Section
```php
'hero' => [
    'name' => 'Nama Anda',
    'title' => 'Jabatan Anda',
    'tagline' => 'Tagline Anda',
    'description' => 'Deskripsi singkat',
],
```

### About Me
```php
'about' => [
    'title' => 'About Me',
    'description' => 'Deskripsi tentang Anda...',
    'highlights' => [
        'Years of Experience' => '5+',
        'Projects Completed' => '50+',
        'Happy Clients' => '30+',
    ],
],
```

### Skills
```php
'skills' => [
    [
        'category' => 'Frontend Development',
        'items' => ['React', 'Vue.js', 'TypeScript'],
    ],
    // tambahkan kategori lainnya...
],
```

### Projects
```php
'projects' => [
    [
        'title' => 'Nama Project',
        'description' => 'Deskripsi project...',
        'technologies' => ['Laravel', 'React'],
        'image' => '/images/project1.jpg',
        'link' => 'https://project-url.com',
    ],
    // tambahkan project lainnya...
],
```

### Experience
```php
'experience' => [
    [
        'title' => 'Jabatan',
        'company' => 'Nama Perusahaan',
        'period' => '2022 - Present',
        'description' => 'Deskripsi pekerjaan...',
    ],
    // tambahkan experience lainnya...
],
```

### Contact
```php
'contact' => [
    'email' => 'email@example.com',
    'phone' => '+62 812 3456 7890',
    'location' => 'Jakarta, Indonesia',
    'social' => [
        'github' => 'https://github.com/username',
        'linkedin' => 'https://linkedin.com/in/username',
        'twitter' => 'https://twitter.com/username',
    ],
],
```

## 🎨 Kustomisasi Warna

Warna utama menggunakan gradient biru/cyan. Untuk mengubah, edit di `resources/js/pages/Portfolio.tsx`:

- `from-blue-400 to-cyan-400` - Gradient text
- `from-blue-500 to-cyan-500` - Gradient button
- `bg-slate-900` - Background utama
- `border-blue-500/20` - Border dengan opacity

## 📱 Fitur Animasi

Website menggunakan Framer Motion dengan animasi:
- **Fade in** saat scroll
- **Slide in** dari kiri/kanan
- **Scale up** pada hover
- **Smooth transitions** antar section

## 🔧 Development

```bash
# Development mode dengan hot reload
npm run dev

# Build untuk production
npm run build

# Format code
npm run format
```

## 📝 Catatan

- Data saat ini masih hardcoded di controller
- Untuk menambahkan database, buat model dan migration untuk Portfolio items
- Form contact saat ini hanya menampilkan alert, tambahkan backend logic untuk mengirim email
- Gambar project menggunakan placeholder, ganti dengan gambar asli di folder `public/images/`

## 🚀 Deployment

1. Build assets production
```bash
npm run build
```

2. Optimize Laravel
```bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

3. Deploy ke hosting pilihan Anda

## 📄 License

MIT License

## 👤 Author

Ganti dengan informasi Anda di `PortfolioController.php`

---

**Selamat menggunakan portfolio website Anda! 🎉**
