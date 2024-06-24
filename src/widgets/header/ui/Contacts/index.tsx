import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import classes from './contacts.module.scss'
import { HandySvg } from 'handy-svg'
import useTranslation from 'next-translate/useTranslation'
import { Button } from '@shared/ui/Button'
import { contacts } from '@shared/const/contacts'
import { LangButton } from '@features/LangButton'
import { Burger } from '../Burger'
import { useApplicationStore } from '@widgets/application/model/applicationStore'

function Contacts() {
  const pathname = usePathname()
  const { t } = useTranslation('common')
  const { toggle } = useApplicationStore(state => (state))


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
            whith={24}
            height={24}
          />
        </div>
        <div className={classes.phone} >
          <a className={classes.phone_link} href={`tel:${contacts.link}`}>
            {contacts.phone}
          </a>
        </div>
      </div>
      <div className={classes.lang_button} >
        <LangButton />
      </div>
      <Button
        className={classes.button}
        buttonSize='small'
        onClick={() => toggle()}
      >
        {t('requestCall')}
      </Button> 
      <Burger />
    </div>
  )
}

export { Contacts }
