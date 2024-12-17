// Making this file into a ".ts" instead of ".js" is types-hell, which is not my type. Hehe.

const languages = {
    "en": {
        "navbar": {
            "home": "Homepage",
            "projects": "Projects",
            "download_cv": "Download Resume",
            "language": "Language",
            "portfolio": "Portfolio"
        },
        "contact": {
            "contact&socials": "Contact & Socials"
        },
        "navigation_menu": {
            "education": "Education",
            "projects": "Projects",
            "experience": "Work Experience",
            "home": "Home",
            "read_next": "Read Next",
            "quick_navigation": "Quick Navigation"
        },
        "home": {
            "hello": "Hello!",
            "welcome": "My name is Ata and welcome to my portfolio!",
            "who_i_am": "Who I am",
            "who_i_am_desc": "My full name is Ata Eren Arslan. I am a 23-year-old mechatronics engineering graduate from the University of Marmara. I currently work as a fullstack web developer but programming is also amongst my few set of hobbies which include working out, football and video games.",
            "this_page_is": "What this page is",
            "this_page_is_desc": "This page is simply a hub that I can use to display my work in programming. From here, you will be able to view all of my relevant experience in programming and my professional journey."
        },
        "projects": {
            "misc": {
                "header": "Projects",
                "sample_img": "sample image",
                "repository": "View repository",
                "documentation": "See an in depth documentation",
                "description": "On this page, I briefly talk about the projects I have worked on and currently work on, excluding my work experience. You can find more information on each project's respective GitHub page."
            },
            "project_1": {
                "header": "Image - Album Sorter",
                "description": "This project was the first solo project I worked on. It was a project I made as my graduation project from Marmara University. The app used the YOLOv5 techonology to detect the context of images uploaded by a user and automatically sort them into albums. Album app also had a structure where users needed to register & login to be able to use it. Password encryption was handled by Bcrypt. The tech stack used was Python (YOLO), Vue.js and Node.js. Database structure was made in a simple JSON format."
            },
            "project_2": {
                "header": "AoTTG2:EE",
                "description": "I had the opportunity to contribute to a mod project for an open-source Unity 3D game called AoTTG2; a community-driven tribute developed by passionate players. Collaborating with a friend who led the project and a small team, our goal was to create an innovative new game mode. My role focused on developing engaging gameplay features, including the UI for them and integrating multiplayer functionality using Photon PUN. It was a great experience to enhance my skills while working on a collaborative and creative project."
            },
            "project_3": {
                "header": "Samurai Game",
                "description": "The purpose of this project was to get more acquainted with Unity by making a small project from scratch. Assets used in it were all taken from free Unity Asset Store packages, with small improvements made on them such as adding new animation frames or fixing existing ones. It has a dull but functioning combat system, with a single level that requires you to kill all enemies to finish the level accompanied by fire music. Since I was trying to learn the ropes of developing from scratch, I made my own input system, camera follow and character controller scripts."
            },
            "project_4": {
                "header": "Untitled 2D Game",
                "description": "This project is the next step from the 2D Samurai Game. It has no commercial aim and is simply another sandbox to get better at using the Unity Game Engine. My aim is to make a more refined game with fewer base mechanics that takes more advantage of the solutions integrated within the engine. The project is currently in progress; 1 out of the 3 levels is created as well as the base mechanics, base UI, remappable input system -which uses the new Unity input system- with controller support."
            },
        },
        "experience": {
            "header": "Work Experience",
            "experience_1": {
                "header": "InnoEM Consultancy Network",
                "subheader": "Software Developer - Full Time",
                "subheader2": "October 2023 - Present",
                "text": "I joined InnoEM as an intern at the start of 2023 October. Right after I joined, one of the staff members left and I was left as the sole frontend developer in the Sustainfinity project. So during my internship, I had a lot of oppornuties to grow my ability as a programmer and a frontend developer, especially using Vue .At the end of my internship, with mutual content, I've joined the team as a full-time staff member .After becoming a full-timer, I've started to slowly take on responsibilities on the backend development of the Sustainfinity project, which uses a stack of Node.js and PostgreSQL. I've gained knowledge server management, Git and Jira.As of writing this, I've been working at InnoEM for over a year now and I'm now comfortable working fullstack on a web application."
            },
            "experience_2": {
                "header": "Ulak Haberleşme",
                "subheader": "Software Developer - Intern",
                "subheader2": "July 2023 - October 2023",
                "text": "I've completed my internship of 72 work days at Ulak Haberleşme between July 2023 - October 2023. There, I worked on a side project that focused on creating a web based documentation application that needed to parse complex data into web pages. To achieve this, I used React for the interface and Python for parsing the data. I've helped create an excel syntax that would determine links between all the complex data that I shared with the rest of the staff. At the end of my 72 days of internship the project was completed."
            }
        },
        "education": {
            "header": "Education",
            "education_1": {
                "header": "Beşiktaş Atatürk Anadolu Lisesi - Highschool",
                "text": "I went to BAAL from 2015 to 2019. I didn't do much that is worth mentioning here."
            },
            "education_2": {
                "header": "Marmara University, Mechatronics Engineering - Bachelor's",
                "text": "I've graduated from the university in January 2024. During my time in university, I started to have a further growing interest in the area of software rather than traditional mechatronics practices like automation or embedded systems. So, I've spent a total of 144 business days of internship in my last year here and I've worked on web development during the entirety of these training periods in order to reach the end goal of becoming a software developer."        
            }
        }
    },
    "tr": {
        "navbar": {
            "home": "Anasayfa",
            "projects": "Projeler",
            "download_cv": "Özgeçmişi İndir",
            "language": "Dil",
            "portfolio": "Portfolyo"
        },
        "contact": {
            "contact&socials": "İletişim & Sosyal Medya"
        },
        "navigation_menu": {
            "education": "Eğitim",
            "projects": "Projeler",
            "experience": "Deneyim",
            "home": "Anasayfa",
            "read_next": "Sıradakini Oku",
            "quick_navigation": "Hızlıca Gözat"
        },
        "home": {
            "hello": "Merhaba!",
            "welcome": "İsmim Ata, portfolyoma hoş geldiniz!",
            "who_i_am": "Ben kimim",
            "who_i_am_desc": "İsmim Ata Eren Arslan. 23 yaşındaki bir Marmara Üniversitesi Mekatronik Mühendisliği mezunuyum. Aktif olarak fullstack bir web geliştiricisi olarak çalışmaktayım ancak programlama aynı zamanda benim futbol, spor yapmak ve oyun oynamak gibi hobilerimin arasında.",
            "this_page_is": "Bu sayfa nedir",
            "this_page_is_desc": "Bu sayfa, benim programlama ile ilgili çalışmalarımı sergileyebileceğim bir merkez. Burada, görmeye değer olduğunu düşündüğüm her programlama deneyimimi ve kariyer yolculuğumu görebilirsiniz."
        },
        "projects": {
            "misc": {
                "header": "Projeler",
                "sample_img": "örnek görsel",
                "repository": "GitHub'da görüntüle",
                "documentation": "Dokümantasyonu incele",
                "description": "Bu sayfada, üzerinde çalıştığım fakat iş deneyimimin dışında kalan çalıştığım veya aktif olarak çalışmaya devam ettiğim projelerimi görebilirsiniz. Her projenin kendi GitHub sayfasından daha fazla bilgi edinebilirsiniz."
            },
            "project_1": {
                "header": "Görsel - Albüm Düzenleyici",
                "description": "Bu, üzerinde tek başıma çalıştığım ilk projeydi. Marmara Üniversitesi'nden mezuniyetim için geliştirilen bir bitirme projesiydi. Uygulama, YOLOv5 teknolojisini kullanarak görsellerin içeriklerini tanımlayarak görselleri otomatik olarak albümlere ayırmaktaydı. Uygulama, aynı zamanda kullanıcıların üye olmasını ve giriş yapmasını gerektiren bir yapıya sahipti. Parola şifrelemesi Bcrypt ile yapıldı. Gelitştirmede Python (YOLO), Vue.js ve Node.js teknolojileri kullanıldı. Veritabanı yapısı basite indirgenmiş bir JSON formatı olarak kurgulandı."
            },
            "project_2": {
                "header": "AoTTG2:EE",
                "description": "AoTTG2 isimli, topluluğu tarafından ilerletilen açık kaynaklı bir Unity 3D oyunu üzerine bir mod projesine katkıda bulunma fırsatım oldu. Projeye öncülük eden bir arkadaşım ve ufak bir takım ile birlikte hedefimiz, inovatif bir oyun modu yaratmaktı. Üstlendiğim rol kapsamında yeni oyun mekanikleri ile bu mekaniklere ait arayüz geliştirmelerini ve Photon PUN kullanarak bu yeni özelliklerin multiplayer işlevselliklerinin entegrasyonunu sağlamak gibi sorumluluklarım oldu. İşbirliğine dayalı bu yaratıcı projeye katkıda bulunarak becerilerimi geliştirmek harika bir deneyimdi."
            },
            "project_3": {
                "header": "Samurai Game",
                "description": "Bu projenin amacı, sıfırdan bir projeyi tek başıma yaparak Unity üzerinde kendimi geliştirmekti. İçerisinde kullanılan görsel \"assetlerin\" hepsi Unity Asset Store'dan alındı ve üzerlerinde yeni animasyon kareleri eklemek, bazı animasyonlardaki hataları düzeltmek gibi küçük değişiklikler yapıldı. Sıkıcı ancak çalışan bir dövüş sistemi ve tamamlamak için içindeki bütün düşmanları alt etmeniz gereken bir adet bölümü var. Her şeyi sıfırdan öğrenmek istediğim için kendi input sistemimi, kamera takip sistemimi ve karakter kontrolcüsü script'ini kendim oluşturdum."
            },
            "project_4": {
                "header": "İsimsiz 2D Oyun",
                "description": "Bu proje, 2D Samurai Gamee'in üzerine bir sonraki adımım. Ticari bir hedefi yok ve yalnızca Unity'yi daha iyi kullanmayı öğrenmek için geliştirdiğim bir \"oyun alanı\". Amacım, daha az çeşitte mekanik içeren ve Unity'nin içerisinde halihazırda bulunan çözümlerden yararlanan daha rafine bir oyun geliştirmek. Proje şu anda aktif olarak geliştirme aşamasında; geliştirmeyi planladığım 3 bölümden 1 tanesi ile birlikte temel mekanikleri, temel arayüzü ve kontrolcü desteğiyle birlikte gelerek kullanıcıya tuşları değiştirme özgürlüğü sunan input sistemi an itibariyle geliştirmiş bulunuyorum."
            },
        },
        "experience": {
            "header": "Deneyim",
            "experience_1": {
                "header": "InnoEM Danışmanlık Ağı",
                "subheader": "Yazılım Geliştirici - Tam Zamanlı",
                "subheader2": "Ekim 2023 - Aktif",
                "text": "InnoEM'e 2023 Ekim Ayı'nın başında stajyer olarak katıldım. Katılmamın hemen ardından, personalden bir kişi ayrıldı ve Sustainfinity projesindeki tek frontend geliştiricisi konumuna geldim. Dolayısıyla stajım boyunca kendimi bir yazılımcı ve frontend geliştiricisi -özellikle Vue.js üzerine- olarak geliştirmek adına çok fazla fırsat buldum. Stajımın sonunda karşılıklı memnuniyet ile ekibe tam zamanlı olarak katıldım. Tam zamanlı çalışmaya başlamamın ardından, Sustainfinity projesinde Node.js ile yazılmış olan ve veritabanında PostgreSQL kullanan backend tarafında da geliştirme üzerine sorumluluklar almaya başladım. Sunucu yönetimi, Git ve Jira konularında bilgi ve deneyim edindim. Bunları yazdığım sırada, 1 seneyi aşkın zamandır InnoEM'de çalışıyor konumdayım ve bir web uygulamasında fullstack çalışabildiğimi rahatlıkla söyleyebilirim."
            },
            "experience_2": {
                "header": "Ulak Haberleşme",
                "subheader": "Yazılım Geliştirici - Stajyer",
                "subheader2": "Temmuz 2023 - Ekim 2023",
                "text": "Temmuz 2023 - Ekim 2023 arasında Ulak Haberleşme'deki staj dönemimi tamamladım. Burada, karmaşık veri yapılarını ayrıştırması gereken bir web projesi üzerine çalıştım. Bu amaç doğrultusunda verileri ayrıştırmak için Python ve arayüzü geliştirmek için React.js kullandım. Verilerin aralarındaki bağlantıları belirleyecek olan bir excel syntax'ını oluşturmaya yardımcı oldum ve bunu personelin kalanı ile paylaştım. 72 günlük stajımın sonunda projeyi tamamladım."
            }
        },
        "education": {
            "header": "Eğitim",
            "education_1": {
                "header": "Beşiktaş Atatürk Anadolu Lisesi - Lise",
                "text": "2015-2019 arası BAAL'da okudum. BAAL'da, burada bahsetmeye değer bir şey yapmadım."
            },
            "education_2": {
                "header": "Marmara Universitesi, Mekatronik Mühendisliği - Lisans",
                "text": "Ocak 2024'te üniversiteden mezun oldum. Üniversite yıllarımda, gömülü sistemler veya otomasyon gibi geleneksel mekatronik pratiklerindense yazılım alanına ilgi duymaya başladım. Dolayısıyla toplam 144 iş günlük stajlarımın tamamını bir yazılım geliştiricisi olmama yardımcı olacak firmalarda yapmaya karar verdim."
            }
        }
    }
};

export default languages;