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
                    'items' => ['Laravel', 'PHP', 'Go', 'Python', 'JavaScript', 'React Js', 'Vue.js', 'Next Js', 'Angular' ],
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
                    'items' => ['BPMN', 'UML Diagram', 'Draw io', ' Astah UML', 'Bizagi'],
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
                'id' => 'kisora',
                'title' => 'Kisora - AI Marketing Automation Platform',
                'description' => 'Developed and enhanced Kisora, an AI-powered marketing automation platform, by adding member limitation, analytics gap detection, performance monitoring, token caching, and responsiveness improvements.',
                'technologies' => ['Laravel', 'Next.js', 'AI Integration', 'Redis', 'REST API'],
                'year' => '2026',
                'company' => 'PT Human Plus Institute',
                'fullDescription' => 'Kisora is an AI-powered marketing automation platform designed to streamline and optimize digital marketing workflows. As part of the development team, I contributed to enhancing the platform by implementing several key features: a member limitation system for resource control, analytics gap detection to surface missed marketing opportunities, real-time performance monitoring, token caching for faster AI response times, and a full responsiveness overhaul for seamless cross-device experience.',
                'impact' => [
                    'Reduced AI API response time by up to 60% through token caching optimization',
                    'Improved platform responsiveness across all device sizes for better user experience',
                    'Enabled smarter resource allocation with member limitation system',
                    'Surfaced hidden marketing gaps through automated analytics gap detection',
                    'Increased system observability with real-time performance monitoring dashboard',
                ],
                'websiteUrl' => 'https://kisora.id/',
                'screenshots' => ['/images/projects/kisora.png', '/images/projects/kisora-2.png'],
            ],
            [
                'id' => 'govero',
                'title' => 'Govero - IT Governance System',
                'description' => 'An internal system to support IT governance and monitoring with QA Management, Asset Tracking, and Credential Vault modules.',
                'technologies' => ['Laravel', 'MySQL', 'RBAC', 'SQL Optimization'],
                'year' => '2026',
                'company' => 'PT Human Plus Institute',
                'fullDescription' => 'Govero is an internal system designed to support IT governance and process monitoring at PT Human Plus Institute. The system includes various modules such as QA Management for quality assurance, Asset Tracking for IT asset management, and Credential Vault for secure credential storage. Built with Laravel and MySQL, it implements Role-Based Access Control (RBAC) for security and SQL optimization for maximum performance.',
                'impact' => [
                    'Improved IT process monitoring efficiency by up to 60%',
                    'Reduced IT asset search time from 30 minutes to 2 minutes',
                    'Enhanced credential storage security with encryption',
                    'Accelerated QA processes with integrated tracking system',
                ],
                'websiteUrl' => 'https://govero.my.id/',
                'screenshots' => ['/images/projects/govero.png', '/images/projects/govero-2.png'],
            ],
            [
                'id' => 'ptsus-invoice',
                'title' => 'PTSUS - Invoice Automation Feature',
                'description' => 'Developed an invoice automation feature for Tomoro Coffee, directly integrated with Accurate accounting software to eliminate manual data entry.',
                'technologies' => ['PHP', 'Python', 'n8n', 'Accurate API'],
                'year' => '2026',
                'company' => 'PT Human Plus Institute',
                'fullDescription' => 'Developed an invoice automation feature specifically for Tomoro Coffee as part of the PTSUS project. The system integrates the invoice creation process with Accurate accounting software automatically using n8n workflow automation. Built with PHP and Python, the system significantly reduces invoice processing time and minimizes human error in data entry.',
                'impact' => [
                    'Reduced invoice processing time from 15 minutes to 2 minutes',
                    'Eliminated human error in data entry by up to 95%',
                    'Automated real-time data synchronization with Accurate',
                    'Increased finance team productivity by up to 70%',
                ],
                'websiteUrl' => 'https://ptsus.my.id/',
                'screenshots' => ['/images/projects/ptsus.png', '/images/projects/ptsus-2.png'],
            ],
            [
                'id' => 'kampung-telaga-air',
                'title' => 'Kampung Telaga Air - Tourism Booking Platform',
                'description' => 'A digital tourism platform covering destination management, online booking, and integrated payment for Kampung Telaga Air.',
                'technologies' => ['Laravel', 'MySQL', 'Payment Gateway', 'Booking System'],
                'year' => '2026',
                'company' => 'Personal Project',
                'fullDescription' => 'A comprehensive digital tourism platform for Kampung Telaga Air that provides tourist destination information, an online booking system, and integrated payments. The website makes it easy for tourists to explore destinations, book tour packages, and make secure online payments. Built with Laravel and MySQL, the platform is equipped with a payment gateway for seamless transactions.',
                'impact' => [
                    'Increased online bookings by up to 80%',
                    'Simplified tourist access to destination information',
                    'Reduced booking processing time from 1 day to instant',
                    'Increased tourism destination revenue by up to 50%',
                ],
                'websiteUrl' => 'https://telaga.poyekterapan1.com/',
                'screenshots' => ['/images/projects/telaga.png', '/images/projects/telaga-2.png'],
            ],
            [
                'id' => 'e-pronoc',
                'title' => 'E-Pronoc - Sports Proposal Management Platform',
                'description' => 'A sports proposal management platform with digital approval workflow and real-time proposal tracking system.',
                'technologies' => ['Laravel', 'MySQL', 'Document Management'],
                'year' => '2025',
                'company' => 'Team Project',
                'fullDescription' => 'E-Pronoc is a sports proposal management platform that facilitates digital submission, approval, and tracking of proposals. The system replaces time-consuming manual processes with an efficient digital workflow. Equipped with a document management system for structured storage and management of proposal documents.',
                'impact' => [
                    'Reduced approval process time from 2 weeks to 3 days',
                    'Improved proposal status transparency in real-time',
                    'Reduced paper usage by up to 90%',
                    'Simplified proposal tracking and reporting',
                ],
                'websiteUrl' => 'https://inovasiepronoc.poyekterapan1.com/',
                'screenshots' => ['/images/projects/epronoc.png', '/images/projects/epronoc-2.png'],
            ],
            [
                'id' => 'mourisol',
                'title' => 'Mourisol - SME Marketplace Platform',
                'description' => 'An SME marketplace platform with product catalog, shopping cart, and integrated payment system to empower local businesses.',
                'technologies' => ['Laravel', 'MySQL', 'E-commerce'],
                'year' => '2025',
                'company' => 'Team Project',
                'fullDescription' => 'Mourisol is a marketplace platform specifically designed to empower local SMEs. The platform provides complete e-commerce features such as product catalog, shopping cart, payment system, and order management. Built with Laravel and MySQL, the marketplace makes it easy for SMEs to sell their products online and reach a wider market.',
                'impact' => [
                    'Helped 50+ SMEs go digital',
                    'Increased SME market reach by up to 200%',
                    'Simplified online transactions for both buyers and sellers',
                    'Increased average SME revenue by 60%',
                ],
                'websiteUrl' => null,
                'screenshots' => [],
            ],
        ];
    }
}
