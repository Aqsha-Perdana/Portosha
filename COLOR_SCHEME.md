# 🎨 Color Scheme - Portfolio Website

Palet warna ini diambil dari referensi desain yang Anda berikan.

## 🌈 Palet Warna Utama

### Background Colors

```css
/* Hero Section - Gradient Biru Gelap ke Cyan */
background: linear-gradient(to bottom, #000000, #172554, #164e63);

/* Section Putih */
background: #ffffff;
background: #f9fafb; /* Gray-50 untuk variasi */

/* Section Abu-abu Terang */
background: linear-gradient(to bottom right, #ecfeff, #dbeafe);

/* Section Hitam */
background: #000000;
background: linear-gradient(to bottom, #000000, #111827, #000000);

/* Footer Section - Gradient Biru */
background: linear-gradient(to bottom right, #172554, #1e3a8a, #164e63);
```

### Text Colors

```css
/* Text Putih */
color: #ffffff;

/* Text Hitam */
color: #000000;

/* Text Abu-abu */
color: #6b7280; /* Gray-500 */
color: #9ca3af; /* Gray-400 */
color: #d1d5db; /* Gray-300 */

/* Text Cyan/Accent */
color: #06b6d4; /* Cyan-500 */
color: #22d3ee; /* Cyan-400 */
```

### Accent Colors

```css
/* Cyan - Warna Utama */
#06b6d4 /* Cyan-500 - Primary accent */
#22d3ee /* Cyan-400 - Lighter accent */
#0891b2 /* Cyan-600 - Darker accent */

/* Blue - Warna Sekunder */
#1e3a8a /* Blue-800 - Dark blue */
#3b82f6 /* Blue-500 - Medium blue */
#60a5fa /* Blue-400 - Light blue */
```

## 📍 Penggunaan Warna per Section

### 1. Navigation
- **Background**: `#000000` dengan opacity 90% + backdrop blur
- **Text**: `#d1d5db` (gray-300)
- **Hover**: `#22d3ee` (cyan-400)
- **Border**: `#06b6d4` dengan opacity 10%

### 2. Hero Section
- **Background**: Gradient dari hitam → biru gelap → cyan gelap
  ```css
  from-black via-blue-950 to-cyan-900
  ```
- **Overlay**: Gradient biru dengan opacity
  ```css
  from-blue-600/30 via-transparent to-cyan-500/20
  ```
- **Title**: `#ffffff` (putih)
- **Accent Text**: `#22d3ee` (cyan-400)
- **Description**: `#9ca3af` (gray-400)
- **Button**: `#ffffff` background, `#000000` text
- **Button Hover**: `#22d3ee` background

### 3. About Section (White)
- **Background**: `#ffffff` (putih)
- **Title**: `#000000` (hitam)
- **Text**: `#374151` (gray-700)
- **Stats Numbers**: `#000000` (hitam)
- **Stats Label**: `#6b7280` (gray-600)
- **Link**: `#06b6d4` (cyan-500)

### 4. Skills Section (Light Gray)
- **Background**: `#f9fafb` (gray-50)
- **Card Background**: `#ffffff` (putih)
- **Card Border**: `#e5e7eb` (gray-200)
- **Icon Background**: Gradient `from-blue-100 to-cyan-100`
- **Icon**: `#06b6d4` (cyan-500)
- **Title**: `#000000` (hitam)
- **Text**: `#6b7280` (gray-600)
- **Bullet**: `#06b6d4` (cyan-500)

### 5. Projects Section (Black)
- **Background**: `#000000` (hitam)
- **Overlay**: Gradient `from-black via-gray-900 to-black`
- **Title**: `#ffffff` (putih)
- **Subtitle**: `#9ca3af` (gray-400)
- **Project Title**: `#ffffff` (putih)
- **Project Hover**: `#22d3ee` (cyan-400)

### 6. Experience/FAQ Section (Cyan Light)
- **Background**: Gradient `from-cyan-50 to-blue-50`
- **Card Background**: `#ffffff` (putih)
- **Card Border**: `#e5e7eb` (gray-200)
- **Card Shadow**: Soft shadow
- **Title**: `#000000` (hitam)
- **Text**: `#6b7280` (gray-600)
- **Arrow**: `#06b6d4` (cyan-500)

### 7. Contact Section (Blue Gradient)
- **Background**: Gradient `from-blue-950 via-blue-900 to-cyan-900`
- **Overlay**: Gradient `from-blue-600/20 to-cyan-500/20`
- **Title**: `#ffffff` (putih)
- **Text**: `#d1d5db` (gray-300)
- **Card Background**: `rgba(255, 255, 255, 0.05)` + backdrop blur
- **Card Border**: `#06b6d4` dengan opacity 20%
- **Icon**: `#22d3ee` (cyan-400)
- **Input Background**: `rgba(255, 255, 255, 0.05)`
- **Input Border**: `#06b6d4` dengan opacity 20%
- **Input Focus**: `#22d3ee` (cyan-400)
- **Button**: `#ffffff` background, `#000000` text
- **Button Hover**: `#22d3ee` background

### 8. Footer
- **Background**: `#000000` (hitam)
- **Border**: `#06b6d4` dengan opacity 10%
- **Text**: `#9ca3af` (gray-400)

## 🎯 Hover & Interactive States

### Buttons
```css
/* Primary Button */
background: #ffffff;
color: #000000;
hover: background: #22d3ee;

/* Secondary Button */
border: 2px solid #22d3ee;
color: #22d3ee;
hover: background: rgba(34, 211, 238, 0.1);
```

### Cards
```css
/* Default */
border: 1px solid #e5e7eb;
shadow: sm;

/* Hover */
border: 1px solid #22d3ee;
shadow: xl;
transform: scale(1.05);
```

### Links
```css
/* Default */
color: #06b6d4;

/* Hover */
color: #22d3ee;
```

## 🌟 Gradients

### Hero Gradient
```css
background: linear-gradient(to bottom, #000000, #172554, #164e63);
```

### Overlay Gradient
```css
background: linear-gradient(to bottom right, #2563eb33, transparent, #06b6d433);
```

### Button Gradient (Alternative)
```css
background: linear-gradient(to right, #06b6d4, #0891b2);
```

### Card Icon Gradient
```css
background: linear-gradient(to bottom right, #dbeafe, #cffafe);
```

## 📱 Scrollbar

```css
/* Track */
background: #000000;

/* Thumb */
background: linear-gradient(180deg, #06b6d4, #0891b2);
border-radius: 6px;
border: 2px solid #000000;

/* Thumb Hover */
background: linear-gradient(180deg, #22d3ee, #06b6d4);
```

## 🎨 Tailwind Classes Reference

### Backgrounds
- `bg-black` - #000000
- `bg-white` - #ffffff
- `bg-gray-50` - #f9fafb
- `bg-blue-950` - #172554
- `bg-cyan-900` - #164e63

### Text
- `text-white` - #ffffff
- `text-black` - #000000
- `text-gray-300` - #d1d5db
- `text-gray-400` - #9ca3af
- `text-gray-600` - #6b7280
- `text-cyan-400` - #22d3ee
- `text-cyan-500` - #06b6d4

### Borders
- `border-gray-100` - #f3f4f6
- `border-gray-200` - #e5e7eb
- `border-cyan-400` - #22d3ee
- `border-cyan-500` - #06b6d4

## 💡 Tips Kustomisasi

1. **Untuk mengubah accent color**, ganti semua `cyan-400` dan `cyan-500` dengan warna pilihan Anda
2. **Untuk theme lebih terang**, ganti `bg-black` dengan `bg-gray-900` atau `bg-slate-900`
3. **Untuk theme lebih gelap**, tambahkan lebih banyak opacity pada section putih
4. **Untuk variasi**, gunakan `from-blue-500 to-purple-500` untuk gradient alternatif

---

**Warna ini sudah disesuaikan dengan referensi desain yang Anda berikan! 🎨**
