import React, { useState, useCallback } from "react";
import UserCard from "./UserCard"

export default function UserCardWrapper (props) {
  const { attributes } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = useCallback(
      () => setIsModalOpen(prevState => !prevState),
      []
  );

  return (
    <div className="mt-block-user-card" data-mt-attributes={attributes}>
      <UserCard attributes={attributes} toggleModal={toggleModal} isModalOpen={isModalOpen} />
    </div>
  )
}
