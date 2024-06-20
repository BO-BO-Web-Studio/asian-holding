import classes from './search-main.module.scss'
import Dropdown from '@shared/ui/Dropdown/Dropdown'
import { useEffect, useState } from 'react'
import { DoubleRange } from '@shared/ui/DoubleRange'
import { Button } from '@shared/ui/Button'
import { RadioItems } from '@shared/ui/RadioItems'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useSearchStore } from '@widgets/searchBar/model/searchStore'
const complexData = [
    {
        id: 1,
        name: 'asd'
    },
    {
        id: 2,
        name: 'asd'
    },
    {
        id: 3,
        name: 'asd'
    }
]
const apartmentData = [
    {
        id: 1,
        value: '1к'
    },
    {
        id: 2,
        value: '2к'
    },
    {
        id: 3,
        value: '3к'
    },
    {
        id: 4,
        value: '4к+'
    },
]
export const SearchMain = () => {
    const searchParams = useSearchParams();
    const [activeRoom, setActiveRoom] = useState<number>(1)
    const [activeComplext, setActiveComplext] = useState<number[]>([0])
    const [activeStatus, setActiveStatus] = useState<number[]>([0])
    const [lowerValue, setLowerValue] = useState(10000);
    const [upperValue, setUpperValue] = useState(356000);
    
    const { close } = useSearchStore(({ close }) => ({
        close,
      }))
    
    const getQuery = (url = '') => {
        let query: string[] = []
        if(activeRoom.toString()) {
            query.push(`room_count=${activeRoom}`)
        }

        if(activeComplext.toString()) {
            activeComplext.forEach((item) => {
                query.push(`residences_id=${item}`)
            })
        }
        if(lowerValue) {
            query.push(`price_min=${lowerValue}`)
        }
        if(upperValue) {
            query.push(`price_max=${upperValue}`)
        }
        if(activeStatus.toString()) {
            activeStatus.forEach((item) => {
                query.push(`status=${item}`)
            })
        }
        return `apartments/${url}?${query.join('&')}`
    }


    useEffect(() => {
        const complex = searchParams.getAll('complex')
        if(complex?.length !== 0) {
            setActiveComplext(complex.map(Number))
        } else {
            setActiveComplext([])
        }

        const status = searchParams.getAll('status')
        if(status?.length !== 0) {
            setActiveStatus(status.map(Number))
        } else {
            setActiveStatus([])
        }

        setLowerValue(searchParams.get("price_min") ? Number(searchParams.get("price_min")) : 10000)
        setUpperValue(searchParams.get("price_max") ? Number(searchParams.get("price_max")) : 356000)
    }, [searchParams])


    return  <div className={classes.body} >
    <h3 className={classes.title} >
        Фильтр
    </h3>
    <div className={classes.radio} >
        <RadioItems 
            name='apartment' 
            items={apartmentData}
            activeRoom={activeRoom}
            setActiveRoom={setActiveRoom}
            />
    </div>
    <div className={classes.item_dropdown_1} > 
        <Dropdown
            className={classes.dropdown}
            label="Все комплексы"
            // multiple
            items={complexData.map(({ name, id }) => ({
                id, label: name
            }))}
            state={activeComplext}
            setState={setActiveComplext}
        />
    </div>
    <div className={classes.range} >
        <DoubleRange
            lowerValue={lowerValue}
            setLowerValue={setLowerValue}
            upperValue={upperValue}
            setUpperValue={setUpperValue}
        />
    </div>
    <div className={classes.item_dropdown_2} > 
        <Dropdown
            className={classes.dropdown}
            label="Построено"
            // multiple
            items={complexData.map(({ name, id }) => ({
                id, label: name
            }))}
            state={activeStatus}
            setState={setActiveStatus}
        />
    </div>
    <div className={classes.bl_button} >
        <Button
            buttonSize='large'
            component={Link}
            href={getQuery()}
            onClick={() => close()}
            className={classes.button}
            >
            Смотреть
        </Button>
    </div>
    </div>
}