
import classes from './application.module.scss'
import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import { ApplicationForm } from '../..';
import { Wrapper } from '@shared/ui/Wrapper';
import { Button } from '@shared/ui/Button';
export const Application = () => {
  const { t } = useTranslation('common')
  const [isOpen, setOpen] = useState(false)
  const setModal = () => {
    setOpen(!isOpen)
  }
  return <Wrapper>
    <div className={classes.application}>
      <div className={classes.bl_text} >
        <h3 className={classes.text}>
          {t('applicationSectionText')}
        </h3>
      </div>
      <Button
        className={classes.button}
        // bg='secondary'
        onClick={() => setModal()}
      >
        {t('application')}
      </Button>
    </div>
    <ApplicationForm isOpen={isOpen} close={setModal} />
  </Wrapper>
}
