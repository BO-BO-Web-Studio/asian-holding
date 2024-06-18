import { Section } from '@shared/ui/Section'
import classes from './contacts-page.module.scss'
import { Breadcrumbs } from '@shared/ui/Breadcrumbs'
import { ContactCard } from '../ContactCard/indx'
import { contactData } from '@widgets/contacts/const/contactsData'

export const ContactsPage = () => {
    return <Section 
        name='Контакты'
        breadcrumbs={ <Breadcrumbs
            className={classes.breadcrumbs}
            items={[{label: 'Контакты', isActive: true}]}
            includeHome
            />}
        >
    <ul className={classes.items}>
        {contactData.map((contact) => 
        <ContactCard 
            key={contact.id} 
            contact={contact} 
            />)}
    </ul>
</Section>
}