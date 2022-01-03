import PropTypes from 'prop-types'
import s from './ContactFilter.module.scss'

export default function ContactFilter({value,onFilter}){


    return (
        <label className={s.label}>
            <input
                type="text"
                name="name"
                value={value}
                onChange={onFilter}
                className={s.input}
                placeholder={'Поиск контактов'}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
            />
        </label>
    )
}

// ContactFilter.defaultProps = {
//   value: '',
// };

ContactFilter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

