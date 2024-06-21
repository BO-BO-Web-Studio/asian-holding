import classes from './apartments-items.module.scss'
import { ApartmentCard } from '../ApartmentCard'
import { IResidences } from '@widgets/projects/model/IProjectCard'
interface Props {
    apartments?: IResidences[] | null
}
export const ApartmentsItems = ({apartments}: Props) => {
    return <div className={classes.wrapper} >
        <div className={classes.items} >
            {apartments && apartments.map((item) => 
                <ApartmentCard key={item.id} apartment={item} />
            )}
        </div>
    </div>
}