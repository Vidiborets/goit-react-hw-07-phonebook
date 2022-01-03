import PropTypes from 'prop-types'
import s from './ContactList.module.scss'
import getVisibleContacts from '../data/visibleContacts'
import {  useDeleteContactsMutation, useGetContactsQuery } from '../../redux/slice'


export default function ContactList ({filter}) {

  const {data:contacts} = useGetContactsQuery()

  const contactsMap = getVisibleContacts(contacts,filter)
  const [deleteContacts] = useDeleteContactsMutation()


    return (
        <ul className={s.list}>
            {contactsMap.map(({name,number,id}) => (
                  <li className={s.itemList} key={id}>
                  <span className={s.contactName}>{name}</span>
                  <a className={s.contactNumber} href={`tel:${number}`}>{number}</a>
                  <button className={s.contactDelete} type="button" onClick={() => deleteContacts(id)}>Удалить</button>
              </li>
              
            ))}
       </ul>
  )  
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  )
}
