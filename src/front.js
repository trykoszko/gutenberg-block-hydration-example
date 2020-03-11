import React from 'react';
import ReactDOM from 'react-dom';
import UserCardWrapper from "../component/src/UserCardWrapper"

window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.mt-block-user-card-wrapper')
    if (cards) {
        Array.from(cards).forEach(card => {
            const attributes = JSON.parse(card.dataset.mtAttributes)
            ReactDOM.hydrate(
                <UserCardWrapper attributes={attributes} />,
                card
            )
        })
    }
})
