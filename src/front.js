import React from 'react';
import ReactDOM from 'react-dom';
import UserCard from "../component/src/UserCard"

window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.mt-block-user-card')
    if (cards) {
        console.log('cards', cards)
        Array.from(cards).forEach(card => {
            const attributes = JSON.parse(card.dataset.mtAttributes)
            ReactDOM.hydrate(
                <UserCard attributes={attributes} />,
                card
            )
        })
    }
})
