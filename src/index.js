import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import UserCard from "../component/src/UserCard";

const { Component } = wp.element;

const block = props => {
  const { attributes } = props
  return (
    <div className="mt-block-user-card" data-mt-attributes={JSON.stringify(attributes)}>
      <UserCard attributes={attributes} />
    </div>
  )
}

console.log(wp)

registerBlockType("mt/gutenberg-user-card", {
  title: __("User card", "gutenberg-user-card"),
  icon: "universal-access-alt",
  category: "layout",
  attributes: {
    firstName: {
      type: "string",
      default: "John"
    },
    lastName: {
      type: "string",
      default: "Doe"
    },
    desc: {
      type: "string",
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ipsum quis leo ullamcorper congue id tincidunt ante. Pellentesque ut ex pellentesque elit commodo pulvinar luctus ac tortor."
    },
    img: {
      type: "object",
      default: {
        src: "https://i.picsum.photos/id/1/200/200.jpg",
        alt: "Img alt"
      }
    }
  },
  edit: block,
  save: block
});
