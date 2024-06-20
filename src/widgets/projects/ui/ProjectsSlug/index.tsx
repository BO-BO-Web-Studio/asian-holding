import classes from './projects-slug.module.scss'
import { Breadcrumbs } from "@shared/ui/Breadcrumbs"
import { Section } from "@shared/ui/Section"
import { Gallery } from "@shared/ui/Gallery"
import { IGallery } from "@shared/model/IGallery"
import { ProjectInfo } from '../ProjectInfo'
import clsx from 'clsx'

const galleryDate: IGallery[] = [
    {
        id: 1,
        img: '/assets/images/gallery_1.png'
    },
    {
        id: 2,
        img: '/assets/images/gallery_1.png'
    },
    {
        id: 3,
        img: '/assets/images/gallery_1.png'
    },
    {
        id: 4,
        img: '/assets/images/gallery_1.png'
    },
]
export const ProjectsSlug = () => {
    return <div className={classes.wrapper}>
        <Section 
            className={classes.section}
            name='Живи и Радуйся'
            mainTitle
            breadcrumbs={ 
                <Breadcrumbs
                className={classes.breadcrumbs}
                items={[
                    {label: 'Проекты', link: '/projects'},
                    {label: 'Подробнее', isActive: true}
                ]}
                includeHome
                /> }
            >
                <Gallery
                    className={classes.gallery}
                    images={galleryDate}
                    />
                <div className={classes.content}>
                    <div className={classes.left} >
                        <div className={classes.body} >
                            <div className={classes.items} >
                                <div className={classes.item}>
                                    <p>
                                        Стандарт-класс
                                    </p>
                                </div>
                                <div className={classes.item}>
                                    <p>
                                        500 квартир
                                    </p>
                                </div>
                                <div className={clsx(classes.item, classes.item_status)}>
                                    <p>
                                        Стандарт-класс
                                    </p>
                                </div>
                            </div>
                            <div className={classes.bl_text} >
                                <p>
                                    Живи и Радуйся - Lorem ipsum dolor sit amet consectetur. Ut mollis tristique volutpat in consequat in ultrices ac elementum. Sit ullamcorper habitasse vitae pellentesque arcu id morbi. Mi tellus tincidunt metus ut viverra mattis. Ullamcorper mattis bibendum sit sagittis pellentesque odio gravida ultricies et. At bibendum sit turpis id venenatis risus. Diam faucibus ullamcorper ut at. Augue vitae erat dolor cras in odio felis risus eget. In aliquam netus elementum ultrices accumsan eu mollis arcu auctor tristique.
                                </p>
                                <h5>
                                    Преимащество
                                </h5>
                                <p>
                                    Живи и Радуйся - Lorem ipsum dolor sit amet consectetur. Ut mollis tristique volutpat in consequat in ultrices ac elementum. Sit ullamcorper habitasse vitae pellentesque arcu id morbi. Mi tellus tincidunt metus ut viverra mattis. Ullamcorper mattis bibendum sit sagittis pellentesque odio gravida ultricies et. At bibendum sit turpis id venenatis risus. Diam faucibus ullamcorper ut at. Augue vitae erat dolor cras in odio felis risus eget. In aliquam netus elementum ultrices accumsan eu mollis arcu auctor tristique.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <ProjectInfo />
                    </div>
                </div>
        </Section>
    </div>
}