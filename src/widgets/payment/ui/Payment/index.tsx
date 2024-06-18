import { Section } from '@shared/ui/Section'
import classes from './payment.module.scss'
import { Breadcrumbs } from '@shared/ui/Breadcrumbs'
import Image from 'next/image'

export const Payment = () => {
    return <>
        <Section 
            className={classes.section}
            name={<>Рассрочка<span className={classes.title}>&nbsp;и ипотека</span></> }
            mainTitle
            lastSection
            breadcrumbs={ 
                <Breadcrumbs
                className={classes.breadcrumbs}
                items={[
                    {label: 'Рассрочка и ипотека', isActive: true}
                ]}
                includeHome
                /> }
            >
                <p className={classes.text} >
                    Живи и Радуйся - Lorem ipsum dolor sit amet consectetur. Ut mollis tristique volutpat in consequat in ultrices ac elementum. Sit ullamcorper habitasse vitae pellentesque arcu id morbi. Mi tellus tincidunt metus ut viverra mattis. Ullamcorper mattis bibendum sit sagittis pellentesque odio gravida ultricies et. At bibendum sit turpis id venenatis risus. Diam faucibus ullamcorper ut at. Augue vitae erat dolor cras in odio felis risus eget. In aliquam netus elementum ultrices accumsan eu mollis arcu auctor tristique. Lorem ipsum dolor sit amet consectetur. Ut mollis tristique volutpat in consequat in ultrices ac elementum. Sit ullamcorper habitasse vitae pellentesque arcu id morbi. Mi tellus tincidunt metus ut viverra mattis. Ullamcorper mattis bibendum sit sagittis pellentesque odio gravida ultricies et. At bibendum sit turpis id venenatis risus. Diam faucibus ullamcorper ut at. Augue vitae erat dolor cras in odio felis risus eget. In aliquam netus elementum ultrices accumsan eu mollis arcu auctor
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
                            Банка
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
                            Банка
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
                            Банка
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
                            Банка
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
                            Банка
                        </p>
                    </div>
                </div>
        </Section>
    </>
}