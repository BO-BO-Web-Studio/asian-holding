import { Breadcrumbs } from '@shared/ui/Breadcrumbs'
import classes from './apartments.module.scss'
import { SearchBarMain } from '@widgets/searchBar/ui/SearchBarMain'
import { Wrapper } from '@shared/ui/Wrapper'
import { ApartmentsItems } from '../ApartmentsItems'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { getFetcher } from '@shared/api/fetcher/getFetcher'
import { IProjectCard, IResidences } from '@widgets/projects/model/IProjectCard'
import { IStatus } from '@widgets/searchBar'

interface Props {
  apartments?: IResidences[]
  residences?: IProjectCard[]
  status?: IStatus[]
}

export const Apartments = ({apartments, residences, status}: Props) => {
  const searchParams = useSearchParams();
  const [activeRoom, setActiveRoom] = useState<number>(1)
  const [activeComplext, setActiveComplext] = useState<number>(0)
  const [activeStatus, setActiveStatus] = useState<number>(0)
  const [lowerValue, setLowerValue] = useState<number>(10000);
  const [upperValue, setUpperValue] = useState<number>(356000);

  const [pageIndex, setPageIndex] = useState(
    searchParams.get("page") ? Number(searchParams.get("page")) - 1 : 0
  );
  useEffect(()=> {
    if(searchParams.get("room_count")) {
      setActiveRoom(Number(searchParams.get("room_count")))
    }
    if(searchParams.get("residence_id")) {
      setActiveComplext(Number(searchParams.get("residence_id")))
    }
    if(searchParams.get("price_min")) {
      setLowerValue(Number(searchParams.get("price_min")))
    }      
    if(searchParams.get("price_max")) {
      setUpperValue(Number(searchParams.get("price_max")))
    }  
    if(searchParams.get("status")) {
      setActiveStatus(Number(searchParams.get("status")))
    }      
  }, [searchParams])


  let url = `/residences/filter/?page=${pageIndex + 1}&per_page=10`;

  if (activeRoom) {
    url += `&room_count=${activeRoom}`;
  }
  if (activeComplext) {
    url += `&residence_id=${activeComplext}`;
  }
  if (lowerValue !== undefined && lowerValue !== null) {
    url += `&price_min=${lowerValue}`;
  }
  if (upperValue !== undefined && upperValue !== null) {
    url += `&price_max=${upperValue}`;
  }
  if (activeStatus) {
    url += `&status=${activeStatus}`;
  }

  const {data, isLoading, isError} = useQuery<IResidences[]>(['apartments', lowerValue, upperValue, activeRoom, activeComplext, activeStatus], () => getFetcher(url))
  console.log(url)
  if(isError && isLoading) {
    return null
  }

    return <Wrapper className={classes.wrapper}>
        <Breadcrumbs
          className={classes.breadcrumbs}
          items={[{label: 'Квартиры', isActive: true}]}
          includeHome
        />
        <SearchBarMain status={status} residences={residences} />
        <ApartmentsItems apartments={data} />
    </Wrapper>
}