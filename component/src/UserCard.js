import React, { useState, useCallback } from '@wordpress/element';

export default function UserCard (props) {
  const { attributes } = props
  const [ isModalOpen, setIsModalOpen ] = useState(false)
  const toggleModal = useCallback(() => setIsModalOpen(prevState => !prevState), [])
  return (
    <div className="c-mt-user-card js-mt-user-card">
      <figure className="c-mt-user-card__image">
        <img src={attributes.img.src} alt={attributes.img.alt} />
      </figure>
      <div className="c-mt-user-card__content-wrapper">
        <h4 className="c-mt-user-card__name">{attributes.firstName} {attributes.lastName}</h4>
        <button className="c-mt-user-card__cta" onClick={toggleModal}>
          Read more about {attributes.firstName}
        </button>
      </div>
      <div className={`c-mt-user-card__modal c-mt-modal${isModalOpen ? " c-mt-modal--open" : ""}`}>
        <div className="c-mt-modal__wrapper">
          <button className="c-mt-modal__close" onClick={toggleModal}>
            X
          </button>
          <figure className="c-mt-modal__image">
            <img src={attributes.img.src} alt={attributes.img.alt} />
          </figure>
          <h4 className="c-mt-modal__name">{attributes.firstName} {attributes.lastName}</h4>
          <p className="c-mt-modal__desc">{attributes.desc}</p>
        </div>
      </div>
    </div>
  )
  // return 'a'
}
