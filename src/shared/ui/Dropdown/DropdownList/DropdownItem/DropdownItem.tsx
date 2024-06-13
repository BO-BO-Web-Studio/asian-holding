import classes from './DropdownItem.module.scss'
import clsx from 'clsx'
import { IDropdownItem } from '../../model/IDropdown'
import { HandySvg } from 'handy-svg'
import { useId } from 'react'

interface DropdownItemProps {
	item: IDropdownItem
	className?: string
	selectHandler: (id: number) => void
	multiple?: boolean
	selectedItems: number[]
}

function DropdownItem({
	item,
	multiple,
	className,
	selectedItems,
	selectHandler
}: DropdownItemProps) {

	return (
		<li
			tabIndex={0}
			className={clsx(classes.Item, className)}
			onClick={() => selectHandler(item.id)}
			onKeyUp={(event) => {
				if (event.code === 'Space') selectHandler(item.id)
			}}
		>
			{multiple && (
				<DropdownMultiple
					id={item.id}
					selectedItems={selectedItems}
				/>
			)}
			<span className={classes.label}>{item.label}</span>
		</li>
	)
}

function DropdownMultiple({
	id,
	selectedItems,
}: { id: number, selectedItems: number[] }) {
	return (
		<span
			className={clsx(classes.Checkbox, selectedItems.includes(id) && classes.Active)}
		>
			<HandySvg
				src="/assets/icons/checked.svg"
				width={24}
				height={24}
			/>
		</span>
	)
}

export default DropdownItem