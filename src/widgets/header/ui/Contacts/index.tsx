import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import classes from './contacts.module.scss'
import { HandySvg } from 'handy-svg'

// import useTranslation from 'next-translate/useTranslation';

import { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Button } from '@shared/ui/Button'
import { ApplicationForm } from '@widgets/application'
import { contacts } from '@shared/const/contacts'
import { LangButton } from '@features/LangButton'

function Contacts() {
  const pathname = usePathname()
  const { t } = useTranslation('common')
  const [isOpen, setOpen] = useState(false)
  const setModal = () => {
    setOpen(!isOpen)
  }


  return (
    <div
      className={clsx(classes.contacts, pathname === '/' && classes.mainPage)}
    >
      <div
        className={classes.phone_bl}
      >
        <div className={classes.phone_svg}>
          <HandySvg
            src='/assets/icons/phone.svg'
            whith={15}
            height={15}
          />
        </div>
        <div className={classes.phone} >
          <span>{t('phone')}</span>
          <a className={classes.phone_link} href={`tel:${contacts.link}`}>
            {contacts.phone}
          </a>
        </div>
      </div>
      <Button
        className={classes.button}
        // bg='secondary'
        buttonSize='small'
        onClick={() => setModal()}
      >
        {t('contactUs')}
      </Button>
      <LangButton />
      <ApplicationForm isOpen={isOpen} close={setModal} />
    </div>
  )
}

export { Contacts }