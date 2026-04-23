# 🎬 Animation Guide - Framer Motion

Portfolio ini menggunakan **Framer Motion** untuk animasi yang smooth dan interaktif.

## 📚 Jenis Animasi yang Digunakan

### 1. Fade In (Muncul Perlahan)

```tsx
<motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
>
    Content
</motion.div>
```

**Digunakan di:**
- Hero section
- Section titles

### 2. Slide In (Geser dari samping)

```tsx
<motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2 }}
>
    Content
</motion.div>
```

**Digunakan di:**
- About section
- Experience timeline
- Contact information

### 3. Slide Up (Geser dari bawah)

```tsx
<motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
>
    Content
</motion.div>
```

**Digunakan di:**
- Section headers
- Skill cards
- Project cards

### 4. Scale (Zoom effect)

```tsx
<motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
>
    Content
</motion.div>
```

**Digunakan di:**
- Buttons
- Project cards
- Skill cards
- Social media icons

### 5. Stagger (Animasi berurutan)

```tsx
{items.map((item, index) => (
    <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
    >
        {item.content}
    </motion.div>
))}
```

**Digunakan di:**
- Skills grid
- Projects grid
- Experience timeline

## 🎨 Kustomisasi Animasi

### Ubah Kecepatan Animasi

```tsx
// Lambat
transition={{ duration: 1.5 }}

// Normal
transition={{ duration: 0.8 }}

// Cepat
transition={{ duration: 0.3 }}
```

### Ubah Delay

```tsx
// Tanpa delay
transition={{ delay: 0 }}

// Delay 0.2 detik
transition={{ delay: 0.2 }}

// Delay 0.5 detik
transition={{ delay: 0.5 }}
```

### Ubah Easing (Kurva animasi)

```tsx
// Linear
transition={{ ease: 'linear' }}

// Ease In Out (default)
transition={{ ease: 'easeInOut' }}

// Ease Out
transition={{ ease: 'easeOut' }}

// Custom
transition={{ ease: [0.43, 0.13, 0.23, 0.96] }}
```

## 🔧 Menambah Animasi Baru

### Contoh: Rotate Animation

```tsx
<motion.div
    initial={{ opacity: 0, rotate: -180 }}
    whileInView={{ opacity: 1, rotate: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
>
    Content
</motion.div>
```

### Contoh: Bounce Effect

```tsx
<motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
>
    Click Me
</motion.button>
```

### Contoh: Parallax Scroll

```tsx
import { useScroll, useTransform } from 'framer-motion';

const { scrollYProgress } = useScroll();
const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

<motion.div style={{ y }}>
    Content
</motion.div>
```

## 🎯 Best Practices

### 1. Gunakan `viewport={{ once: true }}`
Animasi hanya terjadi sekali saat pertama kali terlihat:
```tsx
<motion.div
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
>
```

### 2. Gunakan Delay untuk Stagger
Buat animasi berurutan yang smooth:
```tsx
transition={{ delay: index * 0.1 }}
```

### 3. Jangan Overuse Animasi
- Gunakan animasi yang konsisten
- Jangan terlalu banyak animasi di satu section
- Prioritaskan user experience

### 4. Performance
- Animasi `opacity` dan `transform` lebih performant
- Hindari animasi `width`, `height`, `top`, `left`
- Gunakan `will-change` untuk animasi kompleks

## 📱 Responsive Animations

### Disable animasi di mobile (opsional)

```tsx
import { useMediaQuery } from 'react-responsive';

const isMobile = useMediaQuery({ maxWidth: 768 });

<motion.div
    initial={isMobile ? {} : { opacity: 0, y: 50 }}
    animate={isMobile ? {} : { opacity: 1, y: 0 }}
>
```

## 🎪 Animasi Interaktif

### Hover Effects

```tsx
<motion.div
    whileHover={{ 
        scale: 1.05,
        boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
    }}
>
```

### Click Effects

```tsx
<motion.button
    whileTap={{ scale: 0.95 }}
>
```

### Focus Effects

```tsx
<motion.input
    whileFocus={{ 
        scale: 1.02,
        borderColor: '#3b82f6'
    }}
>
```

## 🌟 Animasi Advanced

### Gesture Animations

```tsx
<motion.div
    drag
    dragConstraints={{ left: -100, right: 100 }}
    whileDrag={{ scale: 1.1 }}
>
```

### Path Animations

```tsx
<motion.path
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 2 }}
/>
```

### Keyframes

```tsx
<motion.div
    animate={{
        scale: [1, 1.2, 1.2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
    }}
    transition={{ duration: 2 }}
>
```

## 📖 Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Animation Examples](https://www.framer.com/motion/examples/)
- [Easing Functions](https://easings.net/)

---

**Selamat bereksperimen dengan animasi! 🎨**
