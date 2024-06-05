import { HeaderMain } from '@widgets/header/ui/HeaderMain'

/**
 * The header server component was created separately
 * so that when something is needed from the server,
 * they receive it in this component
 * */
function Header() {
  return (
    <header id='header'>
      <HeaderMain />
    </header>
  )
}

export { Header }
