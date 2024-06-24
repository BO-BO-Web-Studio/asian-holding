
import classes from './application.module.scss'
import useTranslation from 'next-translate/useTranslation';
import { Wrapper } from '@shared/ui/Wrapper';
import { Button } from '@shared/ui/Button';
import { useApplicationStore } from '@widgets/application/model/applicationStore';
import { Form } from '../Form';

export const Application = () => {
  const { t } = useTranslation('common')
  
  const { toggle } = useApplicationStore(state => (state))
  return <Wrapper className={classes.wrapper}>
    <div className={classes.application}>
      <div className={classes.left} >
        <h3 className={classes.title}>
          {/* {t('applicationSectionText')} */}
          application Section Text
        </h3>
      </div>
      <div className={classes.right} >
        <Form />
      </div>
    </div>
  </Wrapper>
}
