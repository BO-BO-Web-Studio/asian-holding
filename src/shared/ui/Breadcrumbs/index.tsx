import classes from './breadcrumbs.module.scss'
import { Breadcrumb } from '@shared/ui/Breadcrumbs/Breadcrumb'
import { HTMLAttributes } from 'react'
import clsx from 'clsx'
import { IBreadcrumb } from '@shared/model/IBreadcrumb'

interface Props extends HTMLAttributes<HTMLUListElement> {
  items: IBreadcrumb[]
  includeHome?: boolean
  className?: string
}

function Breadcrumbs({items, includeHome, className}: Props) {
  return (
    <ul className={clsx(classes.list, className)}>
      {includeHome && (
        <Breadcrumb
          label="Главная"
          // icon="/assets/icons/home-breadcrumb.svg"
          link="/"
        />
      )}
      {items.map(item => (
        <Breadcrumb
          key={item.label}
          {...item}
        />
      ))}
    </ul>
  )
}

export { Breadcrumbs }