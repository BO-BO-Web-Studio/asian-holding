import { Wrapper } from '@shared/ui/Wrapper'
import classes from './footer-main.module.scss'
import { FooterTop } from '../FooterTop'
import { FooterContent } from '../FooterContent'

export const FooterMain = () => {
    return <div className={classes.wrapper}>
        <Wrapper>
            <div className={classes.footer} >
                <FooterTop/>
                <FooterContent />
            </div>
        </Wrapper>
    </div>
}
