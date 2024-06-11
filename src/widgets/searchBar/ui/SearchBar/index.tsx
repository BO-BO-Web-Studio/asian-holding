import { Section } from "@shared/ui/Section"
import { SearchMain } from "../SearchMain"
import classes from './search-bar.module.scss'
import { useSearchStore } from "@widgets/searchBar/model/searchStore"
import { Modal } from "@shared/ui/Modal"
import { HandySvg } from "handy-svg"
import { useWindowSize } from "@uidotdev/usehooks";


export const SearchBar = () => {
    const { isOpen, toggle } = useSearchStore(({ isOpen, toggle }) => ({
        isOpen,
        toggle,
      }))
      const size = useWindowSize();
      return <Section
        className={classes.section} 
        name='Выберите квартиру'
        buttonMore={
            <button 
                className={classes.button}
                onClick={() => toggle()}>
                <HandySvg 
                    src='/assets/icons/filter.svg' 
                    width={20}
                    height={20}
                    alt='filter'
                    />
            </button>}
        >
        {size.width != null && size.width > 768 && <SearchMain />}
        <Modal
            isOpen={isOpen}
            close={toggle}
            isShowCloseButton={true}
        >
            <SearchMain />
        </Modal>
    </Section>
}