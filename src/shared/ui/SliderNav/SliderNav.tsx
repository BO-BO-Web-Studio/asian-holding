import classes from './SliderNav.module.scss'
import { HandySvg } from 'handy-svg'
import clsx from 'clsx'

interface SliderNavProps {
  prevId: string
  nextId: string
  className?: string
  theme?: 'light' | 'dark'
}

function SliderNav({theme = 'dark', prevId, nextId, className}: SliderNavProps) {
  return (
    <div className={clsx(classes.Navigation, (theme === 'light') && classes.Light, className)}>
      <button
        id={prevId}
        className={classes.Prev}
      >
        <HandySvg
          src="/assets/icons/arrow-left.svg"
          width={6}
          height={12}
          alt={'left'}
        />
      </button>
      <button
        id={nextId}
        className={classes.Next}
      >
        <HandySvg
          src="/assets/icons/arrow-right.svg"
          width={6}
          height={12}
          alt={'right'}
        />
      </button>
    </div>
  )
}

export default SliderNav