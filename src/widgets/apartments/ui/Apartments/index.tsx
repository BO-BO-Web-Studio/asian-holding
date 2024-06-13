import { Breadcrumbs } from '@shared/ui/Breadcrumbs'
import classes from './apartments.module.scss'
import { SearchBarMain } from '@widgets/searchBar/ui/SearchBarMain'
import { Wrapper } from '@shared/ui/Wrapper'
import { ApartmentsItems } from '../ApartmentsItems'
import { ApartmentData } from '@widgets/apartments/const/apartmentData'

export const Apartments = () => {
    return <Wrapper className={classes.wrapper}>
        <Breadcrumbs
          className={classes.breadcrumbs}
          items={[{label: 'Квартиры', isActive: true}]}
          includeHome
        />
        <SearchBarMain />
        <ApartmentsItems apartments={ApartmentData} />
    </Wrapper>
}