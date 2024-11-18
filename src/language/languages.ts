interface NavbarTranslations {
    home: string;
    projects: string;
    download_cv: string;
}

interface Languages {
    en: {
        navbar: NavbarTranslations;
    };
    tr: {
        navbar: NavbarTranslations;
    };
}

const languages: Languages = {
    "en": {
        "navbar": {
            "home": "Homepage",
            "projects": "Projects",
            "download_cv": "Download Resume"
        }
    },
    "tr": {
        "navbar": {
            "home": "Anasayfa",
            "projects": "Projeler",
            "download_cv": "Özgeçmişi İndir"
        }
    }
};

export default languages;