import classes from './section.module.scss'
import { HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import { Wrapper } from '@shared/ui/Wrapper'

interface Props extends HTMLAttributes<HTMLElement> {
  name: ReactNode
  buttonMore?: ReactNode
  breadcrumbs?: ReactNode
  wrapperProps?: HTMLAttributes<HTMLDivElement>
  headerProps?: HTMLAttributes<HTMLElement>
  nameProps?: HTMLAttributes<HTMLHeadingElement>
  buttonMoreProps?: HTMLAttributes<HTMLDivElement>
  mainTitle?: boolean
}

function Section({
                   name,
                   buttonMore = null,
                   breadcrumbs,
                   className,
                   wrapperProps,
                   headerProps,
                   nameProps,
                   buttonMoreProps,
                   children,
                   mainTitle,
                   ...props
                 }: Props) {
  const Title = mainTitle ? 'h1' : 'h2'

  return (
    <section
      {...props}
      className={clsx(classes.section, breadcrumbs && classes.page, className)}
    >
      <Wrapper
        {...wrapperProps}
        className={clsx(classes.wrapper, wrapperProps?.className)}
      >
        {breadcrumbs && <div className={classes.breadcrumbs}>
          {breadcrumbs}
          </div>}
        <header
          {...headerProps}
          className={clsx(classes.header, headerProps?.className)}
        >
          <Title
            {...nameProps}
            className={clsx(classes.name, nameProps?.className)}
          >{name}</Title>
          <div
            {...buttonMoreProps}
            className={clsx(classes.buttonMore, buttonMoreProps?.className)}
          >{buttonMore}
          </div>
        </header>
        {children}
        <div className={classes.divider} ></div>
      </Wrapper>
    </section>
  )
}

export { Section }