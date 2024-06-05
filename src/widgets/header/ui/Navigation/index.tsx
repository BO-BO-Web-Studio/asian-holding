import clsx from 'clsx'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Burger } from '@widgets/header/ui/Burger'
import { useMenuStore } from '@widgets/header/model/menuStore'
import classes from './navigation.module.scss'
import useLockBodyScroll from '@custom-react-hooks/use-lock-body-scroll'
import { Button } from '@shared/ui/Button'
import { useState } from 'react'
// import { ModalContent } from '@widgets/modal'
import useTranslation from 'next-translate/useTranslation';
import { menuList } from '@widgets/header/consts/menuList'
import { Modal } from '@shared/ui/Modal'

interface Props {
  isOpenModal: boolean
  setModal: () => void
}
function Navigation({ setModal, isOpenModal }: Props) {
  const pathname = usePathname()
  const { isOpen, close } = useMenuStore(({ isOpen, close }) => ({
    isOpen,
    close,
  }))

  const { t } = useTranslation('menu')

  useLockBodyScroll(isOpen);
  return (
    <nav className={clsx(classes.nav, pathname === '/' && classes.mainPage)}>
      <div className={clsx(classes.menu, isOpen && classes.open)}>
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
                  pathname === href && classes.active,
                )}
                onClick={close}
              >
                {t(`${name}`)}
              </Link>
            </li>
          ))}
        </ul>
        {/* <Button
          className={classes.button}
          onClick={() => setModal()}
        >
          Оставить заявку
        </Button> */}
        <Modal
          isOpen={isOpenModal}
          close={setModal}
          isShowCloseButton={true}
        >
          <h1>Hello</h1>
          {/* <ModalContent> */}
          {/* <ApplicationForm /> */}
          {/* </ModalContent> */}
        </Modal>
      </div>
    </nav>
  )
}

export { Navigation }
