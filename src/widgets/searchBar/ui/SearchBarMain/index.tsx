import { Section } from "@shared/ui/Section"
import { SearchMain } from "../SearchMain"
import classes from './search-bar-main.module.scss'
import { useSearchStore } from "@widgets/searchBar/model/searchStore"
import { Modal } from "@shared/ui/Modal"
import { HandySvg } from "handy-svg"
import { useWindowSize } from "@uidotdev/usehooks";


export const SearchBarMain = () => {
    const { isOpen, toggle } = useSearchStore(({ isOpen, toggle }) => ({
        isOpen,
        toggle,
      }))
      const size = useWindowSize();
      return <div className={classes.section} >
        <div className={classes.header} >
            <h1 className={classes.title} >
                Выбрать <span>квартиру</span>
            </h1>
            <button 
                className={classes.button}
                onClick={() => toggle()}>
                <HandySvg 
                    src='/assets/icons/filter.svg' 
                    width={20}
                    height={20}
                    alt='filter'
                    />
            </button>
        </div>
        {size.width != null && size.width > 768 && <SearchMain />}
        <Modal
            isOpen={isOpen}
            close={toggle}
            isShowCloseButton={true}
        >
            <SearchMain />
        </Modal>
    </div>
}