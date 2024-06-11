import classes from './radio-items.module.scss'
interface Props {
    name: string
    items: IItem[] 
}

interface IItem {
    id: number 
    value: string 
}

export const RadioItems = ({name, items}:Props) => {
    return <div className={classes.items}>
        {items.map((item, index) => 
            <div className={classes.item_input} key={item.id}>
            <input className={classes.input} type="radio" id={`${name}-${index}`} name={name} value={item.id} />
            <label className={classes.label} htmlFor={`${name}-${index}`}>{item.value}</label>
        </div>
    )}
    {/* <div className={classes.item_input}>
        <input className={classes.input} type="radio" id="apartment-1" name="apartment" value="1к" />
        <label className={classes.label} htmlFor="apartment-1">1к</label>
    </div>
    <div className={classes.item_input}>
        <input className={classes.input} type="radio" id="apartment-2" name="apartment" value="2к" />
        <label className={classes.label} htmlFor="apartment-2">2к</label>
    </div>
    <div className={classes.item_input}>
        <input className={classes.input} type="radio" id="apartment-3" name="apartment" value="3к" />
        <label className={classes.label} htmlFor="apartment-3">3к</label>
    </div>
    <div className={classes.item_input}>
        <input className={classes.input} type="radio" id="apartment-4" name="apartment" value="4к+" />
        <label className={classes.label} htmlFor="apartment-4">4к+</label>
    </div> */}
</div>
}