'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { Wrapper } from '@shared/ui/Wrapper'
import { Contacts } from '@widgets/header/ui/Contacts'
import { Navigation } from '@widgets/header/ui/Navigation'
import classes from './headerMain.module.scss'
// import { ModalContent } from '@widgets/modal'
import { useState } from 'react'
import { Modal } from '@shared/ui/Modal'

function HeaderMain() {
  const pathname = usePathname()
  const [isOpenModal, setOpenModal] = useState(false)
  const setModal = () => {
    close()
    setOpenModal(!isOpenModal)
  }

  return (
    <div className={classes.mainPage}>
      <Wrapper className={classes.wrapper}>
        <div className={classes.block}>
          <div className={classes.header_left} >
            <div
              className={classes.logo}
            >
              <Image
                src={`/assets/icons/logo-main.svg`}
                alt="iontravel"
                width={52}
                height={44}
                priority
              />
            </div>
            <Navigation isOpenModal={isOpenModal} setModal={setModal} />
          </div>
          <Contacts />
          <Modal
            isOpen={isOpenModal}
            close={setModal}
            isShowCloseButton={true}
          >
            <h1>Hello</h1>
          </Modal>
        </div>
      </Wrapper>
    </div>
  )
}

export { HeaderMain }
