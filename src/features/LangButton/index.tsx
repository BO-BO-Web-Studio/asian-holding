import { useRouter } from 'next/router'
import classes from './lang-button.module.scss'
import Link from 'next/link'
import clsx from 'clsx'
import { HandySvg } from 'handy-svg'
export const LangButton = () => {
  const router = useRouter()
  const listLocales = router.locales
  const localeActive = router.locale

  return <ul className={classes.wrapper}>
    {listLocales?.map((locale) => <li key={locale} className={clsx(
      classes.item,
      locale == localeActive && classes.active
    )} >
      <Link className={classes.lang} href={router.asPath} locale={locale}>
        {locale.toUpperCase()}
      </Link>
    </li>)}
    <li  className={clsx(
      classes.item,
    )} >
      <Link className={classes.lang} href={router.asPath}>
        <HandySvg 
          className={classes.icon}
          src='/assets/icons/lang.svg' 
          width={24}
          height={24}
          alt={'lang'}
          />
        Русский
      </Link>
    </li>
  </ul>
}
