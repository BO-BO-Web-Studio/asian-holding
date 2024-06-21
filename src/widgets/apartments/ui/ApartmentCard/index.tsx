import classes from './apartment-card.module.scss'
import { Button } from '@shared/ui/Button'
import { Modal } from '@shared/ui/Modal'
import { useState } from 'react'
import { Application } from '../Application'
import Image from 'next/image'
import { IResidences } from '@widgets/projects/model/IProjectCard'
interface Props {
    apartment: IResidences
}
export const ApartmentCard = ({apartment}: Props) => {
    const [isOpenModal, setOpenModal] = useState(false)
    const setModal = () => {
        close()
        setOpenModal(!isOpenModal)
    }
    return <div className={classes.card}>
        <div className={classes.top}>
           <div className={classes.bl_img} >
            <Image 
                className={classes.img}
                src={apartment.image}
                width={313}
                height={200}
                alt={apartment.title}
                />
           </div>
        </div>
        <div className={classes.content} >
            <div className={classes.body} >
                <h3 className={classes.title}>
                    {apartment.title}
                </h3>
                <ul className={classes.items}>
                    <li className={classes.item}>
                        <p className={classes.span_1} >
                            Общая площадь
                        </p>
                        <p className={classes.span_2} >
                            {apartment.area}
                        </p>
                    </li>
                    <li className={classes.item}>
                        <p className={classes.span_1} >
                            Цена
                        </p>
                        <p className={classes.span_2} >
                            {apartment.price}
                        </p>
                    </li>
                    <li className={classes.item}>
                        <p className={classes.span_1} >
                            Жилой комплекс
                        </p>
                        <p className={classes.span_2} >
                            {apartment.floor}
                        </p>
                    </li>
                </ul>
                <Button 
                    className={classes.button}
                    fullWidth
                    onClick={setModal}
                    >
                    Оставить заявку
                </Button>
            </div>
        </div>
        <Modal
            isOpen={isOpenModal}
            close={setModal}
            isShowCloseButton={true}
            mainClassName={classes.modal_main}
            contentClassName={classes.modal_content}
          >
            <Application 
                apartment={apartment} 
                close={setModal}
                />
          </Modal>
    </div>
}