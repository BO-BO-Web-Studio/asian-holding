import { Breadcrumbs } from '@shared/ui/Breadcrumbs'
import classes from './apartments.module.scss'
import { SearchBarMain } from '@widgets/searchBar/ui/SearchBarMain'
import { Wrapper } from '@shared/ui/Wrapper'
import { ApartmentsItems } from '../ApartmentsItems'
import { ApartmentData } from '@widgets/apartments/const/apartmentData'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { getFetcher } from '@shared/api/fetcher/getFetcher'

export const Apartments = () => {
    const searchParams = useSearchParams();
    const [pageIndex, setPageIndex] = useState(
      searchParams.get("page") ? Number(searchParams.get("page")) - 1 : 0
    );
    const router = useRouter();
    const [activeRoom, setActiveRoom] = useState<number>(1)
    const [activeComplext, setActiveComplext] = useState<number[]>([0])
    const [activeStatus, setActiveStatus] = useState<number[]>([0])
    const [lowerValue, setLowerValue] = useState(15000);
    const [upperValue, setUpperValue] = useState(325000);

    let url = `/residences/filter?page=${pageIndex + 1}&per_page=8`;
    if (activeRoom) {
      url += `&room_count=${activeRoom}`;
    }
    if (activeComplext) {
      url += `&residences_id=${activeComplext}`;
    }
    if (activeStatus) {
      url += `&status=${activeStatus}`;
    }
    if (lowerValue) {
      url += `&price_min=${lowerValue}`;
    }
    if (upperValue) {
      url += `&price_max=${upperValue}`;
    }

    const {data, isLoading, isError} = useQuery('apartments', () => getFetcher(url))

    if(isError && isLoading) {
      return null
    }

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