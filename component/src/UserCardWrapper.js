import React from '@wordpress/element'
import UserCard from './UserCard'
// import './App.css'

const defaultAttributes = {
  firstName: 'John',
  lastName: 'Doe',
  img: {
    src: 'https://i.picsum.photos/id/1/200/200.jpg',
    alt: 'Img alt'
  },
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ipsum quis leo ullamcorper congue id tincidunt ante. Pellentesque ut ex pellentesque elit commodo pulvinar luctus ac tortor.'
}

export default function UserCardWrapper () {
  return (
    <div className="mt-block-user-card">
      <UserCard attributes={defaultAttributes} />
    </div>
  )
}
