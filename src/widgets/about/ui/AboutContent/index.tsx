import { HandySvg } from 'handy-svg'
import classes from './about-content.module.scss'
import { Wrapper } from '@shared/ui/Wrapper'
import { Button } from '@shared/ui/Button'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
export const AboutContent = () => {
    const { t } = useTranslation()

    return <Wrapper>
        <div className={classes.about}>
            <div className={classes.body} >
                <div className={classes.header}>
                    <p>{t('about')}</p>
                    <HandySvg 
                        src='/assets/icons/about-header.svg'
                        width={24}
                        height={24}
                        alt={'about'}
                        />
                </div>
                <div className={classes.bl_title} >
                    <p className={classes.title} >
                        {t('aboutCompany:sectionTitle')}
                    </p>
                </div>
                <div className={classes.content} >
                    <div className={classes.left} >
                        <div className={classes.bl_img}>
                            <Image
                                src='/assets/images/logo-big.png'
                                width={416}
                                height={292}
                                alt={'logo'}
                            />
                        </div>
                    </div>
                    <div className={classes.right} >
                        <div className={classes.items} >
                            <div className={classes.item_mobile} >
                                <div className={classes.bl_img}>
                                    <Image
                                        src='/assets/images/logo-big.png'
                                        width={416}
                                        height={292}
                                        alt={'logo'}
                                    />
                                </div>  
                            </div>
                            <div className={classes.item} >
                                <p className={classes.name} >{t('aboutCompany:sectionTitle')}</p>
                                <p className={classes.text} >
                                    {t('aboutCompany:item_1_text')}
                                </p>
                            </div>
                            <div className={classes.item} >
                                <p className={classes.name} >{t('aboutCompany:sectionTitle')}</p>
                                <p className={classes.text} >
                                    {t('aboutCompany:item_1_text')}
                                </p>
                            </div>
                            <div className={classes.item_button} >
                                <Button className={classes.button} buttonSize='small'>
                                    {t('common:requestCall')}
                                </Button>
                            </div>
                            <div className={classes.item} >
                                <p className={classes.name} >{t('aboutCompany:sectionTitle')}</p>
                                <p className={classes.text} >
                                    {t('aboutCompany:item_1_text')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
}