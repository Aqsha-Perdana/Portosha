<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class PortfolioController extends Controller
{
    public function index(): Response
    {
        $data = [
            'hero' => [
                'name' => 'Muhammad Aqsha Perdana Detfi',
                'title' => 'Finance Automation & Fullstack Developer',
                'tagline' => 'Where Finance Meets Technology',
                'description' => 'A unique blend of financial expertise and technical skills. I don\'t just code - I understand the business processes, financial workflows, and accounting principles behind every system I build. This dual expertise allows me to create solutions that truly work for finance operations, bridging the gap between finance teams and technology.',
            ],
            'about' => [
                'title' => 'About Me',
                'subtitle' => 'Alright, let me share a bit about my journey',
                'description' => 'I am an Accounting Information Systems student at Telkom University with a passion for finance automation and fullstack development. Beyond academics, I\'ve been actively involved in student organizations, served as a teaching assistant for programming and database courses, and earned multiple certifications including SAP Finance and Zahir Accounting. My hands-on experience includes building a tourism package booking system, a proposal submission platform for NOC (National Olympic Committee), a POS system for Risoles business (Mourisol) and various internal systems with database management.',
                'highlights' => [
                    'GPA' => '3.74',
                    'Projects Completed' => '10+',
                    'Certifications' => '5+',
                ],
            ],
            'introduction' => [
                'title' => 'Introduction',
                'subtitle' => 'Bandung | 29 April 1995',
                'description' => 'So here\'s the deal - I\'m a Finance Automation & Fullstack Developer who loves turning messy spreadsheets into smooth, automated systems. With a background in Accounting Information Systems, I speak both "finance language" and "tech language" fluently. Think of me as a translator between your finance team and your dev team, except I actually build the stuff too.',
                'hobby' => 'When I\'m not staring at code or financial reports, you\'ll find me either chasing the perfect shot with my camera or chasing a ball on the football field (yes, I do both - multitasking at its finest). Photography taught me to see details and aesthetics, while football taught me teamwork and strategy. Turns out, both skills are pretty handy when building systems and working with teams!',
                'instagram' => '@muhamadaqsha_',
                'photos' => [
                       '/images/profile/cp3.jpg',
                       '/images/profile/cp2.jpg',
                ],
            ],
            'skills' => [
                [
                    'category' => 'Web Development',
                    'icon' => 'code',
                    'items' => ['Laravel', 'PHP', 'Go', 'Python', 'JavaScript', 'React', 'Vue.js'],
                ],
                [
                    'category' => 'Database Management',
                    'icon' => 'database',
                    'items' => ['MySQL', 'SQL Server', 'PostgreSQL', 'MongoDB', 'Query Optimization'],
                ],
                [
                    'category' => 'Accounting Software',
                    'icon' => 'calculator',
                    'items' => ['SAP Finance', 'Accurate', 'Zahir', 'ERP Integration'],
                ],
                [
                    'category' => 'Analysis & Modeling',
                    'icon' => 'chart',
                    'items' => ['BPMN', 'UML Diagram', 'Business Process', 'Data Analysis', 'System Design'],
                ],
            ],
            'projects' => $this->getProjectsData(),
            'experience' => [
                [
                    'title' => 'Bagaimana cara memulai project dengan Anda?',
                    'description' => 'Anda bisa menghubungi saya melalui email atau LinkedIn. Saya akan merespons dalam 24 jam untuk mendiskusikan kebutuhan project Anda.',
                ],
                [
                    'title' => 'Teknologi apa yang Anda kuasai?',
                    'description' => 'Saya menguasai Laravel, PHP, Python, MySQL, PostgreSQL, MongoDB, dan berbagai tools untuk finance automation seperti SAP dan Accurate.',
                ],
                [
                    'title' => 'Apakah tersedia untuk project freelance?',
                    'description' => 'Ya, saya terbuka untuk project freelance terutama yang berkaitan dengan web development dan finance automation.',
                ],
                [
                    'title' => 'Berapa lama pengalaman Anda?',
                    'description' => 'Saya memiliki pengalaman 1+ tahun sebagai Finance Automation & Fullstack Developer Intern, plus berbagai project akademik dan organisasi.',
                ],
            ],
            'workExperience' => [
                [
                    'title' => 'Finance Automation & Fullstack Developer Intern',
                    'company' => 'PT Human Plus Institute',
                    'location' => 'Jakarta Selatan',
                    'period' => 'Feb 2026 - Present',
                    'description' => 'Mengembangkan sistem Govero dan otomatisasi Purchase Order untuk Tomoro Coffee',
                    'achievements' => [
                        'Membuat sistem internal Govero untuk IT governance',
                        'Mengembangkan otomatisasi PO terintegrasi dengan Accurate',
                        'Mengoptimalkan query SQL untuk reporting',
                    ],
                ],
                [
                    'title' => 'Koordinator Asisten Praktikum',
                    'company' => 'Universitas Telkom',
                    'location' => 'Bandung',
                    'period' => 'Sep 2025 - Jan 2026',
                    'description' => 'Mengkoordinasikan tim asisten praktikum Akuntansi Keuangan Menengah',
                    'achievements' => [
                        'Koordinasi tim asisten praktikum',
                        'Menyusun modul praktikum',
                        'Mendapat apresiasi dari dosen dan mahasiswa',
                    ],
                ],
                [
                    'title' => 'Asisten Praktikum',
                    'company' => 'Universitas Telkom',
                    'location' => 'Bandung',
                    'period' => 'Sep 2025 - Jan 2026',
                    'description' => 'Asisten untuk mata kuliah Pemrograman Web dan Basis Data Relasional',
                    'achievements' => [
                        'Membuat modul pembelajaran',
                        'Membimbing mahasiswa dalam praktikum',
                        'Membuat laporan penilaian mingguan',
                    ],
                ],
            ],
            'organizationalExperience' => [
                [
                    'title' => 'Kepala Bidang Internal',
                    'company' => 'Himpunan Mahasiswa Diploma Sistem Informasi Akuntansi (HIMADISA)',
                    'location' => 'Fakultas Ilmu Terapan, Universitas Telkom',
                    'period' => 'Jan 2025 - Present',
                    'description' => 'Memimpin dan mengawasi keadaan internal organisasi serta menumbuhkan etos kerja anggota',
                    'achievements' => [
                        'Mengawasi keadaan internal organisasi',
                        'Menumbuhkan etos kerja anggota divisi di bawahnya',
                        'Menyusun dan melaksanakan laporan pertanggungjawaban program kerja',
                        'Memberikan bimbingan, arahan, dan saran kepada divisi di bawahnya',
                    ],
                ],
                [
                    'title' => 'Staff Bidang Olahraga, Seni, dan Budaya (Orsenbud)',
                    'company' => 'Himpunan Mahasiswa Diploma Sistem Informasi Akuntansi (HIMADISA)',
                    'location' => 'Fakultas Ilmu Terapan, Universitas Telkom',
                    'period' => 'Jan 2024 - Dec 2024',
                    'description' => 'Membina dan mendampingi kegiatan olahraga dan seni budaya mahasiswa',
                    'achievements' => [
                        'Membina dan mendampingi kegiatan olahraga dan seni budaya',
                        'Membangun kerja sama dengan pihak lain untuk mengembangkan kegiatan',
                        'Mengembangkan minat dan bakat mahasiswa dalam bidang olahraga dan seni',
                    ],
                ],
                [
                    'title' => 'Wakil Ketua Pelaksana',
                    'company' => 'Accounting Information System Championship (AISCHAMP)',
                    'location' => 'Fakultas Ilmu Terapan, Universitas Telkom',
                    'period' => 'Oct 2024 - Nov 2024',
                    'description' => 'Kompetisi olahraga dan seni yang diadakan oleh HIMADISA bidang Orsenbud untuk seluruh mahasiswa Sistem Informasi Akuntansi',
                    'achievements' => [
                        'Merancang jalannya kegiatan bersama bidang-bidang yang ada',
                        'Mengatur jalannya acara',
                        'Bertanggungjawab sepenuhnya terhadap acara',
                        'Memimpin jalannya kegiatan agar tidak terjadi miss komunikasi',
                    ],
                ],
            ],
            'certifications' => [
                [
                    'name' => 'SAP Finance Module',
                    'issuer' => 'SAP',
                    'year' => '2025',
                    'description' => 'Tersertifikasi dalam mengoperasikan SAP01 dan SAPAC010',
                ],
                [
                    'name' => 'Zahir Accounting',
                    'issuer' => 'Zahir',
                    'year' => '2025',
                    'description' => 'Mahir dalam mengoperasikan aplikasi akuntansi Zahir',
                ],
                [
                    'name' => 'Angular & NodeJS',
                    'issuer' => 'Online Course',
                    'year' => '2025',
                    'description' => 'Framework Front-End Angular dan Back-End NodeJS',
                ],
                [
                    'name' => 'Go Programming',
                    'issuer' => 'Udemy',
                    'year' => '2025',
                    'description' => 'Bahasa pemrograman Go untuk backend development',
                ],
            ],
            'contact' => [
                'email' => 'perdanaaqsha@gmail.com',
                'phone' => '08996360535',
                'location' => 'Bandung, Indonesia',
                'social' => [
                    'github' => 'https://github.com/Aqsha-Perdana',
                    'linkedin' => 'https://www.linkedin.com/in/muhammad-aqsha-perdana-detfi-b06747346',
                    'twitter' => 'https://twitter.com/aqshaperdana',
                ],
            ],
        ];

        return Inertia::render('Portfolio', $data);
    }

    public function show(string $id): Response
    {
        $projects = $this->getProjectsData();
        
        $project = collect($projects)->firstWhere('id', $id);
        
        if (!$project) {
            abort(404);
        }

        return Inertia::render('ProjectDetail', [
            'project' => $project,
        ]);
    }

    private function getProjectsData(): array
    {
        return [
            [
                'id' => 'govero',
                'title' => 'Govero - IT Governance System',
                'description' => 'Sistem internal untuk mendukung governance dan monitoring proses IT dengan modul QA Management, Asset Tracking, dan Credential Vault.',
                'technologies' => ['Laravel', 'MySQL', 'RBAC', 'SQL Optimization'],
                'year' => '2026',
                'company' => 'PT Human Plus Institute',
                'fullDescription' => 'Govero adalah sistem internal yang dirancang untuk mendukung IT governance dan monitoring proses IT di PT Human Plus Institute. Sistem ini mencakup berbagai modul seperti QA Management untuk quality assurance, Asset Tracking untuk pelacakan aset IT, dan Credential Vault untuk penyimpanan kredensial yang aman. Dibangun dengan Laravel dan MySQL, sistem ini mengimplementasikan Role-Based Access Control (RBAC) untuk keamanan dan SQL optimization untuk performa maksimal.',
                'impact' => [
                    'Meningkatkan efisiensi monitoring proses IT hingga 60%',
                    'Mengurangi waktu pencarian aset IT dari 30 menit menjadi 2 menit',
                    'Meningkatkan keamanan penyimpanan kredensial dengan enkripsi',
                    'Mempercepat proses QA dengan sistem tracking terintegrasi',
                ],
                'websiteUrl' => null,
            ],
            [
                'id' => 'po-automation',
                'title' => 'Purchase Order Automation',
                'description' => 'Sistem otomatisasi Purchase Order untuk Tomoro Coffee yang terintegrasi langsung dengan Software Akuntansi Accurate.',
                'technologies' => ['PHP', 'Python', 'n8n', 'Accurate API'],
                'year' => '2026',
                'company' => 'PT Human Plus Institute',
                'fullDescription' => 'Sistem otomatisasi Purchase Order yang dikembangkan khusus untuk Tomoro Coffee. Sistem ini mengintegrasikan proses pembuatan PO dengan software akuntansi Accurate secara otomatis menggunakan n8n workflow automation. Dibangun dengan PHP dan Python, sistem ini mampu mengurangi waktu pembuatan PO secara signifikan dan meminimalkan human error dalam proses input data.',
                'impact' => [
                    'Mengurangi waktu pembuatan PO dari 15 menit menjadi 2 menit',
                    'Eliminasi human error dalam input data hingga 95%',
                    'Otomasi sinkronisasi data dengan Accurate secara real-time',
                    'Meningkatkan produktivitas tim finance hingga 70%',
                ],
                'websiteUrl' => null,
            ],
            [
                'id' => 'kampung-telaga-air',
                'title' => 'Kampung Telaga Air Tourism',
                'description' => 'Platform digital wisata yang mencakup manajemen destinasi, pemesanan online, dan pembayaran terintegrasi.',
                'technologies' => ['Laravel', 'MySQL', 'Payment Gateway', 'Booking System'],
                'year' => '2026',
                'company' => 'Personal Project',
                'fullDescription' => 'Platform digital wisata komprehensif untuk Kampung Telaga Air yang menyediakan informasi destinasi wisata, sistem pemesanan online, dan pembayaran terintegrasi. Website ini memudahkan wisatawan untuk menjelajahi destinasi, memesan paket wisata, dan melakukan pembayaran secara online dengan aman. Dibangun dengan Laravel dan MySQL, platform ini dilengkapi dengan payment gateway untuk transaksi yang seamless.',
                'impact' => [
                    'Meningkatkan jumlah booking online hingga 80%',
                    'Mempermudah akses informasi wisata bagi pengunjung',
                    'Mengurangi waktu proses booking dari 1 hari menjadi instant',
                    'Meningkatkan revenue destinasi wisata hingga 50%',
                ],
                'websiteUrl' => null,
            ],
            [
                'id' => 'e-pronoc',
                'title' => 'E-Pronoc',
                'description' => 'Website manajemen proposal keolahragaan dengan sistem approval dan tracking proposal.',
                'technologies' => ['Laravel', 'MySQL', 'Document Management'],
                'year' => '2025',
                'company' => 'Team Project',
                'fullDescription' => 'E-Pronoc adalah platform manajemen proposal keolahragaan yang memfasilitasi pengajuan, approval, dan tracking proposal secara digital. Sistem ini menggantikan proses manual yang memakan waktu dengan workflow digital yang efisien. Dilengkapi dengan document management system untuk penyimpanan dan pengelolaan dokumen proposal yang terstruktur.',
                'impact' => [
                    'Mengurangi waktu proses approval dari 2 minggu menjadi 3 hari',
                    'Meningkatkan transparansi status proposal secara real-time',
                    'Mengurangi penggunaan kertas hingga 90%',
                    'Mempermudah tracking dan reporting proposal',
                ],
                'websiteUrl' => null,
            ],
            [
                'id' => 'mourisol',
                'title' => 'Mourisol Marketplace',
                'description' => 'Website marketplace UMKM dengan fitur katalog produk, keranjang belanja, dan sistem pembayaran.',
                'technologies' => ['Laravel', 'MySQL', 'E-commerce'],
                'year' => '2025',
                'company' => 'Team Project',
                'fullDescription' => 'Mourisol adalah platform marketplace yang dirancang khusus untuk memberdayakan UMKM lokal. Platform ini menyediakan fitur lengkap e-commerce seperti katalog produk, keranjang belanja, sistem pembayaran, dan manajemen pesanan. Dibangun dengan Laravel dan MySQL, marketplace ini memudahkan UMKM untuk menjual produk mereka secara online dan menjangkau pasar yang lebih luas.',
                'impact' => [
                    'Membantu 50+ UMKM untuk go digital',
                    'Meningkatkan jangkauan pasar UMKM hingga 200%',
                    'Mempermudah transaksi online untuk pembeli dan penjual',
                    'Meningkatkan omzet UMKM rata-rata 60%',
                ],
                'websiteUrl' => null,
            ],
        ];
    }
}
