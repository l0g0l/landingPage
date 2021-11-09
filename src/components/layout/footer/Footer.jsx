import React from 'react'
import { useTranslation } from 'react-i18next' //traducir a otros idiomas


const Footer = () => {

    //hook para utilizar la libreria i18n para traducir la web
    const { t } = useTranslation()
    return (
        <div className="container-footer">
            <p>{t('footer1')} &copy;. {t('footer2')}</p>
        </div>
    )
}

export default Footer
