// import { createContext } from "react";

import React, { useState } from "react"
import { IntlProvider } from "react-intl";
import messageSpanish from './lang/es-AR.json'
import messageEnghish from './lang/en-US.json'
import messagePortuguese from './lang/pt-BR.json'


const LangContext = React.createContext();

const LangProvider = ({ children }) => {

    let localeDefault;
    let menssageDefault;

    const lang = localStorage.getItem('lang')

    if (lang) {
        localeDefault = lang

        if (lang === 'es-AR') {
            menssageDefault = messageSpanish
        } else if (lang === 'en-US') {
            menssageDefault = messageEnghish
        }
        else if (lang === 'pt-BR') {
            menssageDefault = messagePortuguese
        } else {
            localeDefault = 'es-AR'
            menssageDefault = messageSpanish
        }


    }

    const [menssages, setMessage] = useState(menssageDefault);
    const [locale, setLocale] = useState(localeDefault);

    const setLanguage = (language) => {
        switch (language) {
            case 'es-AR':
                setMessage(messageSpanish);
                setLocale("es-AR");
                localStorage.setItem('lang', "es-AR")
                break;
            case 'en-US':
                setMessage(messageEnghish);
                setLocale("en-US");
                localStorage.setItem('lang', "en-US")
                break;
            case 'pt-BR':
                setMessage(messagePortuguese);
                setLocale("pt-BR");
                localStorage.setItem('lang', "pt-BR")
                break;
            default:
                setMessage(messageSpanish);
                setLocale("es-AR");
                localStorage.setItem('lang', "es-AR")
        }
    }

return (
    <LangContext.Provider value={ {setLanguage: setLanguage }}>
        <IntlProvider locale={locale} messages={menssages}>
            {children}
        </IntlProvider>
    </LangContext.Provider>

)
}

export { LangProvider, LangContext}