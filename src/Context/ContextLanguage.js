import React, {useState} from "react";
import { IntlProvider } from "react-intl";
import langEnglish from '../Lang/en-US.json';
import langSpanish from '../Lang/es-ES.json';

const contextLanguage = React.createContext();

const LangProvider = ({children}) => {

    const [mensaje, traducirMensaje] = useState(langSpanish);
    const [locale, traducirLocale] = useState('es-ES');

    const changeLanguage = (language) => {
        switch (language) {
            case 'es-ES':
                traducirMensaje(langSpanish);
                traducirLocale('es-ES');
                break;
            case 'en-US':
                traducirMensaje(langEnglish);
                traducirLocale('en-US');
                break;
            default:
                traducirMensaje(langSpanish);
                traducirLocale('es-ES');

        }

    }
console.log({mensaje, locale})
    return (
        <contextLanguage.Provider value={{changeLanguage : changeLanguage, locale}}>
            <IntlProvider locale={locale} messages={mensaje}>
                {children}
            </IntlProvider>        
        </contextLanguage.Provider>
    );
}

export {LangProvider, contextLanguage};