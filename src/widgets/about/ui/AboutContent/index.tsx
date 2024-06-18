import { HandySvg } from 'handy-svg'
import classes from './about-content.module.scss'
import { Wrapper } from '@shared/ui/Wrapper'
import { Button } from '@shared/ui/Button'
import Image from 'next/image'
export const AboutContent = () => {
    return <Wrapper>
        <div className={classes.about}>
            <div className={classes.body} >
                <div className={classes.header}>
                    <p>О компании</p>
                    <HandySvg 
                        src='/assets/icons/about-header.svg'
                        width={24}
                        height={24}
                        alt={'about'}
                        />
                </div>
                <div className={classes.bl_title} >
                    <p className={classes.title} >
                        Asian Holding гордится своими достижениями и стремится к постоянному совершенствованию. Наша цель – создавать пространства, которые вдохновляют, содействуют развитию, и оставляют непередаваемое впечатление.
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
                                <p className={classes.name} >Инновации и Технологии: </p>
                                <p className={classes.text} >
                                    Мы постоянно следим за последними тенденциями в строительстве и используем передовые технологии для обеспечения высочайшего качества наших проектов. Это включает в себя применение экологически чистых материалов, современные методы строительства и интеграцию умных систем.
                                </p>
                            </div>
                            <div className={classes.item} >
                                <p className={classes.name} >Инновации и Технологии: </p>
                                <p className={classes.text} >
                                    Мы постоянно следим за последними тенденциями в строительстве и используем передовые технологии для обеспечения высочайшего качества наших проектов. Это включает в себя применение экологически чистых материалов, современные методы строительства и интеграцию умных систем.
                                </p>
                            </div>
                            <div className={classes.item_button} >
                                <Button className={classes.button} buttonSize='small'>
                                    Заказать звонок
                                </Button>
                            </div>
                            <div className={classes.item} >
                                <p className={classes.name} >Инновации и Технологии: </p>
                                <p className={classes.text} >
                                    Мы постоянно следим за последними тенденциями в строительстве и используем передовые технологии для обеспечения высочайшего качества наших проектов. Это включает в себя применение экологически чистых материалов, современные методы строительства и интеграцию умных систем.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
}