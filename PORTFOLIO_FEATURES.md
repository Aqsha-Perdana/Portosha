# 🚀 Portfolio Features - Mindblowing Interactive Design

Portfolio website dengan animasi interaktif yang memukau, dibangun dengan data asli dari CV Muhammad Aqsha Perdana Detfi.

## ✨ Fitur Interaktif Mindblowing

### 1. **3D Tilt Cards** 
- Skill cards dengan efek 3D tilt mengikuti mouse
- Menggunakan `useMotionValue` dan `useTransform` dari Framer Motion
- Rotasi dinamis berdasarkan posisi mouse
- Depth effect dengan `transformStyle: 'preserve-3d'`

### 2. **Animated Particles Background**
- 50+ floating particles di hero section
- Animasi opacity dan scale yang random
- 30+ particles di contact section
- Menciptakan atmosfer futuristik

### 3. **Hover Effects yang Keren**

#### Skill Cards:
- **Floating Icon**: Icon naik dan rotate 360° saat hover
- **Pulsing Bullets**: Bullet points scale up secara berurutan
- **Shine Effect**: Gradient shine yang bergerak dari kiri ke kanan
- **Background Glow**: Gradient background muncul smooth

#### Project Cards:
- **Lift Effect**: Card naik 10px saat hover
- **Particle Explosion**: 10 particles meledak dari tengah
- **Rotating Icon**: Icon rotate 180° dengan scale up
- **Glow Border**: Border berubah dari cyan/20 ke cyan/50

#### Contact Cards:
- **Scale & Slide**: Card scale 1.05 dan slide ke kanan
- **Icon Rotation**: Icon rotate 360° saat hover
- **Border Pulse**: Border color berubah smooth

### 4. **Scroll Animations**
- Fade in dari bawah untuk setiap section
- Stagger animations untuk list items
- Parallax effect pada beberapa elemen
- Smooth reveal dengan `whileInView`

### 5. **Interactive Elements**

#### Stats Counter:
- Angka scale up/down dengan pulse animation
- Hover untuk rotate dan scale
- Gradient text dengan animation

#### Timeline:
- Animated dots yang rotate saat hover
- Border color transition
- Scale effect pada hover

#### Certifications:
- Shine effect yang berulang setiap 5 detik
- Rotate effect pada icon
- Scale dan rotate card saat hover

### 6. **Micro-interactions**

- **Buttons**: Scale up saat hover, scale down saat click
- **Links**: Underline animation dari kiri ke kanan
- **Form Inputs**: Scale up saat focus
- **Social Icons**: Rotate 360° dan scale saat hover
- **Scroll Indicator**: Bounce animation infinite

## 🎨 Design System

### Color Palette (Sesuai CV):
```css
/* Primary */
Cyan-400: #22d3ee
Cyan-500: #06b6d4
Cyan-600: #0891b2

/* Backgrounds */
Black: #000000
Blue-950: #172554
Blue-900: #1e3a8a
Cyan-900: #164e63

/* Neutrals */
White: #ffffff
Gray-50: #f9fafb
Gray-100: #f3f4f6
```

### Typography:
- **Hero Title**: 5xl-8xl, Bold
- **Section Titles**: 4xl-5xl, Bold
- **Card Titles**: xl-2xl, Bold
- **Body Text**: sm-lg, Regular

### Spacing:
- **Section Padding**: py-20
- **Container**: max-w-7xl
- **Card Padding**: p-6 to p-8
- **Gap**: 4-12

## 📊 Data dari CV

### Hero Section:
- **Name**: Muhammad Aqsha Perdana Detfi
- **Title**: Finance Automation & Fullstack Developer
- **Description**: Mahasiswa SIA dengan fokus finance automation

### Stats:
- **GPA**: 3.74/4.00
- **Projects**: 10+ completed
- **Certifications**: 5+ (SAP, Zahir, Angular, NodeJS, Go)

### Skills (4 Categories):
1. **Web Development**: Laravel, HTML/CSS, Bootstrap, TailwindCSS, Python
2. **Database Management**: MySQL, SQL Server, PostgreSQL, MongoDB
3. **Accounting Software**: SAP Finance, Accurate, Zahir, ERP
4. **Analysis & Modeling**: BPMN, UML, Business Process

### Projects (5 Featured):
1. **Govero** - IT Governance System (2026)
2. **Purchase Order Automation** - Tomoro Coffee (2026)
3. **Kampung Telaga Air Tourism** - Tourism Platform (2026)
4. **E-Pronoc** - Sports Proposal Management (2025)
5. **Mourisol** - UMKM Marketplace (2025)

### Work Experience (3 Positions):
1. **Finance Automation & Fullstack Developer Intern** - PT Human Plus Institute
2. **Koordinator Asisten Praktikum** - Universitas Telkom
3. **Asisten Praktikum** - Universitas Telkom

### Certifications (4 Main):
1. **SAP Finance Module** - SAP (2025)
2. **Zahir Accounting** - Zahir (2025)
3. **Angular & NodeJS** - Online Course (2025)
4. **Go Programming** - Udemy (2025)

## 🎯 Interactive Features Breakdown

### Hero Section:
- ✅ Animated particles background (50 particles)
- ✅ Fade in animations dengan stagger
- ✅ "Available for Opportunities" badge dengan icon
- ✅ Gradient text untuk nama
- ✅ CTA buttons dengan hover effects
- ✅ Scroll indicator dengan bounce animation

### About Section:
- ✅ Decorative gradient blobs
- ✅ Animated icon (Target)
- ✅ Stats cards dengan pulse animation
- ✅ Hover effects: scale + rotate
- ✅ Gradient background pada stats
- ✅ "Learn More" link dengan animated arrow

### Skills Section:
- ✅ 3D Tilt effect pada cards
- ✅ Floating icon dengan rotation
- ✅ Pulsing bullet points
- ✅ Shine effect overlay
- ✅ Gradient background on hover
- ✅ Stagger animation untuk items

### Projects Section:
- ✅ Animated grid background
- ✅ Rotating briefcase icon
- ✅ Lift effect on hover
- ✅ Particle explosion effect
- ✅ Year badge
- ✅ Company name dengan icon
- ✅ Tech stack badges dengan scale animation
- ✅ Glow effect overlay

### Work Experience:
- ✅ Timeline dengan animated dots
- ✅ Dot rotation on hover
- ✅ Card scale on hover
- ✅ Achievement bullets dengan animation
- ✅ Date badge dengan calendar icon

### Certifications:
- ✅ Repeating shine effect
- ✅ Icon rotation on hover
- ✅ Card rotate + scale on hover
- ✅ Year badge
- ✅ Gradient icon background

### FAQ Section:
- ✅ Card scale on hover
- ✅ Border color transition
- ✅ Animated arrow
- ✅ Gradient background

### Contact Section:
- ✅ Animated particles (30 particles)
- ✅ Pulsing send icon
- ✅ Contact cards dengan hover effects
- ✅ Icon rotation on hover
- ✅ Social icons dengan 360° rotation
- ✅ Form inputs dengan focus scale
- ✅ Submit button dengan shadow effect

## 🚀 Performance

- **Build Size**: ~505KB (minified)
- **CSS Size**: ~53KB
- **Lazy Loading**: Animations only trigger when in viewport
- **Optimized**: Using `viewport={{ once: true }}` untuk animasi sekali saja

## 💡 Tips Kustomisasi

### Mengubah Kecepatan Animasi:
```tsx
// Lambat
transition={{ duration: 1.5 }}

// Normal
transition={{ duration: 0.6 }}

// Cepat
transition={{ duration: 0.3 }}
```

### Mengubah Intensitas 3D Tilt:
```tsx
// Lebih ekstrem
const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['15deg', '-15deg']);

// Lebih subtle
const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg']);
```

### Menambah/Kurangi Particles:
```tsx
// Lebih banyak
{[...Array(100)].map((_, i) => ...)}

// Lebih sedikit
{[...Array(20)].map((_, i) => ...)}
```

### Mengubah Warna Accent:
Ganti semua `cyan-400`, `cyan-500`, `cyan-600` dengan warna pilihan Anda.

## 📱 Responsive Design

- **Mobile**: Stack layout, smaller text, touch-friendly buttons
- **Tablet**: 2 columns untuk cards
- **Desktop**: Full 3-4 columns, 3D effects enabled

## 🎓 Technologies Used

- **React 18**: Component-based architecture
- **TypeScript**: Type-safe development
- **Framer Motion**: Advanced animations
- **Tailwind CSS**: Utility-first styling
- **Laravel 11**: Backend API
- **Inertia.js**: SPA without API

---

**Portfolio ini dirancang untuk memukau recruiter dan client dengan animasi yang smooth, interaktif, dan professional! 🎉**
