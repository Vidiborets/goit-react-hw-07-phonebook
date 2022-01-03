import Container from './components/Container'
import { useState } from 'react'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import ContactFilter from './components/ContactFilter'
import Section from './components/Section'
// import ContactStats from './components/ContactStats'
import s from './App.module.scss'

export default function App() {
    const [value,setValue]= useState("")
    const hanbdleChange = (e)=> setValue(e.target.value)
    return (
            <Container>
                <Section>
                    <h1 className={s.title}>Телефонная книга</h1>
                    <ContactForm />
                    <h1 className={s.titleContact}>Контакты</h1>
                    <ContactFilter filter={value} onFilter={hanbdleChange} />
                    <ContactList filter={value}/>
                    {/* <ContactStats/> */}
                </Section>
            </Container>
    );
    };











