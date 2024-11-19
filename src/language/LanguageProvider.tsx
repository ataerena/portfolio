import React, { createContext, useState, useContext, ReactNode } from 'react';
import languages from "./languages";

export type LanguageType = "tr" | "en";

interface LanguageContextType {
    language: LanguageType;
    setLanguage: (lang: LanguageType) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const storedLang:any = localStorage.getItem("lang");
    const defaultLang:LanguageType = storedLang ? storedLang : "en";

    const [language, setLanguageState] = useState<LanguageType>(defaultLang);

    const setLanguage = (lang: LanguageType) => {
        setLanguageState(lang);
        localStorage.setItem("lang", lang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const useTranslate = () => {
    const { language } = useLanguage();

    const translate = (key: string) => {
        const keys = key.split(".");
        let result: any = languages[language];

        for (let i = 0; i < keys.length; i++) {
            result = result[keys[i]];
        }

        return result || key;
    }

    return translate;
}