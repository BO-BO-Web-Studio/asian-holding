import { IApartment } from '@widgets/apartments/model/Apartment'
import classes from './apartments-items.module.scss'
import { Wrapper } from '@shared/ui/Wrapper'
import { ApartmentCard } from '../ApartmentCard'
interface Props {
    apartments: IApartment[]
}
export const ApartmentsItems = ({apartments}: Props) => {
    return <div className={classes.wrapper} >
        <div className={classes.items} >
            {apartments.map((item) => 
                <ApartmentCard key={item.id} apartment={item} />
            )}
        </div>
    </div>
}