import React from "react";
import "./directory.styles.scss";
import MenuItem from "../component/menu-items/menu-item.component"


class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Biryani',
          imageUrl: require('../images/Biryani/biryani-display.jpg'),
          id: 1,
          linkUrl: 'shop/Biryani'
        },
        {
          title: 'Single Items',
          imageUrl: require('../images/Single Items/Curry.png'),
          id: 2,
          linkUrl: 'shop/Single-Items'
        },
        {
          title: 'Memorable Moments',
          imageUrl: require('../images/Memorable Moments/6.jpg'),
          id: 3,
          linkUrl: 'shop/Memorable-Moments'
        },
        {
          title: 'SET MENU',
          imageUrl: require('../images/Set Menu/Cover1.jpg'),
          size: 'large',
          id: 4,
          linkUrl: 'shop/set-menu'
        },
        {
          title: 'SIDE MENU',
          imageUrl: require('../images/Side Menu/Cover2.jpg'),
          size: 'large',
          id: 5,
          linkUrl: 'shop/side-menu'
        }
      ]
    }
  }
  render() {
    return (

      <div className='directory-menu'>
        {
          this.state.sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))
        }
      </div>
    )
  }
}
export default Directory