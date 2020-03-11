import React from "react";

export default function UserCard (props) {
  const { attributes, toggleModal = false, isModalOpen = false } = props

  return (
    <div className="c-mt-user-card js-mt-user-card">
      <figure className="c-mt-user-card__image">
        <img src={attributes.userData.img} />
      </figure>
      <div className="c-mt-user-card__content-wrapper">
        <h4 className="c-mt-user-card__name">{attributes.userData.firstName} {attributes.userData.lastName}</h4>
        <button className="c-mt-user-card__cta" onClick={toggleModal}>
          Read more about {attributes.userData.firstName}
        </button>
      </div>
      <div className={`c-mt-user-card__modal c-mt-modal${isModalOpen ? " c-mt-modal--open" : ""}`}>
        <div className="c-mt-modal__wrapper">
          <button className="c-mt-modal__close" onClick={toggleModal}>
            X
          </button>
          <figure className="c-mt-modal__image">
            <img src={attributes.userData.img} />
          </figure>
          <h4 className="c-mt-modal__name">{attributes.userData.firstName} {attributes.userData.lastName}</h4>
          <p className="c-mt-modal__desc">{attributes.userData.desc}</p>
        </div>
      </div>
    </div>
  )
}
