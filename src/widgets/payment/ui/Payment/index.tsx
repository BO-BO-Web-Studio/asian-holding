import { Section } from '@shared/ui/Section'
import classes from './payment.module.scss'
import { Breadcrumbs } from '@shared/ui/Breadcrumbs'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

export const Payment = () => {
    const { t } = useTranslation('common')

    return <>
        <Section 
            className={classes.section}
            name={<>{t('payment_title_first')}<span className={classes.title}>&nbsp;{t('payment_title_last')}</span></> }
            mainTitle
            lastSection
            breadcrumbs={ 
                <Breadcrumbs
                className={classes.breadcrumbs}
                items={[
                    {label: (t('payment')), isActive: true}
                ]}
                includeHome
                /> }
            >
                <p className={classes.text} >
                    {t('payment_text')}
                </p>
                <div className={classes.items} >
                    <div className={classes.item} >
                        <Image 
                            className={classes.image}
                            src='/assets/images/bank_1.png'
                            width={48}
                            height={48}
                            alt='bank'
                            />
                        <p className={classes.name} >
                            {t('bank')}
                        </p>
                    </div>
                    <div className={classes.item} >
                        <Image 
                            className={classes.image}
                            src='/assets/images/bank_1.png'
                            width={48}
                            height={48}
                            alt='bank'
                            />
                        <p className={classes.name} >
                            {t('bank')}
                        </p>
                    </div>
                    <div className={classes.item} >
                        <Image 
                            className={classes.image}
                            src='/assets/images/bank_1.png'
                            width={48}
                            height={48}
                            alt='bank'
                            />
                        <p className={classes.name} >
                            {t('bank')}
                        </p>
                    </div>
                    <div className={classes.item} >
                        <Image 
                            className={classes.image}
                            src='/assets/images/bank_1.png'
                            width={48}
                            height={48}
                            alt='bank'
                            />
                        <p className={classes.name} >
                            {t('bank')}
                        </p>
                    </div>
                    <div className={classes.item} >
                        <Image 
                            className={classes.image}
                            src='/assets/images/bank_1.png'
                            width={48}
                            height={48}
                            alt='bank'
                            />
                        <p className={classes.name} >
                            {t('bank')}
                        </p>
                    </div>
                </div>
        </Section>
    </>
}