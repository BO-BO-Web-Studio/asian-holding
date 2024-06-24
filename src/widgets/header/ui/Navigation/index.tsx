import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Burger } from '@widgets/header/ui/Burger'
import { useMenuStore } from '@widgets/header/model/menuStore'
import classes from './navigation.module.scss'
import useLockBodyScroll from '@custom-react-hooks/use-lock-body-scroll'
import { Button } from '@shared/ui/Button'
import useTranslation from 'next-translate/useTranslation';
import { menuList } from '@widgets/header/consts/menuList'
import { Modal } from '@shared/ui/Modal'
import { LangButton } from '@features/LangButton'
import { HandySvg } from 'handy-svg'
import { contacts } from '@shared/const/contacts'
import Image from 'next/image'
import { useApplicationStore } from '@widgets/application/model/applicationStore'


function Navigation() {
  const pathname = usePathname()
  const { isOpen, close } = useMenuStore(({ isOpen, close }) => ({
    isOpen,
    close,
  }))
  const { toggle } = useApplicationStore(state => (state))
  const { t } = useTranslation('menu')

  useLockBodyScroll(isOpen);
  return (
    <nav className={clsx(classes.nav, pathname === '/' && classes.mainPage)}>
      <div className={clsx(classes.menu, isOpen && classes.open)}>
        <div className={classes.logo_bl}>
          <Link href={'/'} className={classes.logo} >
              <Image
                src={`/assets/icons/logo-main.svg`}
                alt="iontravel"
                width={58}
                height={50}
                priority
              />
          </Link>
          <Burger />
        </div>
        <ul className={classes.list}>
          {menuList.map(({ href, name }) => (
            <li
              key={href}
              className={classes.item}
            >
              <Link
                href={href}
                className={clsx(
                  classes.link,
                  pathname.slice(1, pathname.length-1) === href && classes.active,
                )}
                onClick={close}
              >
                {t(`${name}`)}
              </Link>
            </li>
          ))}
        </ul>
        <Button
          className={classes.button}
          onClick={() => toggle()}
        >
            Оставить заявку
        </Button>
        <div className={classes.lang_button} >          
          <LangButton />
        </div>
        <div className={classes.footer} >
          <div className={classes.phone_bl} >
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
        </div>
      </div>
      <div className={clsx(classes.wrapper, isOpen && classes.open_wrapper)} ></div>
    </nav>
  )
}

export { Navigation }
