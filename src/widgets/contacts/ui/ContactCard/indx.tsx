import { IContact } from '@widgets/contacts/model/Contacts'
import classes from './contacts-card.module.scss'
import { Card } from '@shared/ui/Card'

interface Props {
    contact: IContact
}
export const ContactCard = ({contact}:Props) => {
    return <Card link={`tel:{contact.phone}`} image={contact.image} name={contact.name}>
        <div className={classes.content}>
            <h3 className={classes.title} >
                {contact.name}
            </h3>
            <p className={classes.address} >
                {contact.address}
            </p>
            <p className={classes.tell} >
                {contact.phone}
            </p>
        </div>
    </Card>
}