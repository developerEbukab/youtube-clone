import React from 'react';
import "./SideNavigation.styles.scss";

const FooterLinks = [
  [
    {name: "About", link: "https://www.google.com"},
    { name: "Press", link: "https://www.google.com" },
    { name: "Copyright", link: "https://www.google.com" },
    { name: "Contact Us", link: "https://www.google.com" },
    { name: "Creators", link: "https://www.google.com" },
    { name: "Advertise", link: "https://www.google.com" },
    {name: "Developers", link: "https://www.google.com"}
  ],
  [
    {name: "Terms", link: "https://www.google.com"},
    { name: "Privacy", link: "https://www.google.com" },
    { name: "Policy & Safety", link: "https://www.google.com" },
    { name: "How YouTube works Us", link: "https://www.google.com" },
    { name: "Test new features", link: "https://www.google.com" }
  ],
]

const CollapsedMenus = [
  { name: "Home", icon: "fas fa-home" },
  { name: "Trending", icon: "fas fa-fire" },
  { name: "Subscriptions", icon: "fas fa-tv" },
  { name: "Library", icon: "fas fa-video" },
  {name: "History", icon: "fas fa-history"},
]

const BigMenus = [
  {
    title: "",
    items: [
      { name: "Home", icon: "fas fa-home" },
      { name: "Trending", icon: "fas fa-fire" },
      { name: "Subscriptions", icon: "fas fa-tv" },
    ]
  },
  {
    title: "",
    items: [
      { name: "Library", icon: "fas fa-video" },
      {name: "History", icon: "fas fa-history"},
    ],
  },
  [],
  {
    title: "BEST OF YOUTUBE",
    items: [
      { name: "Music", icon: "fas fa-music", specialIcon: true },
      { name: "Sports", icon: "fas fa-trophy", specialIcon: true },
      { name: "Gaming", icon: "fas fa-gamepad", specialIcon: true },
      { name: "Movies & Shows", icon: "fas fa-film", specialIcon: true },
      { name: "News", icon: "fas fa-newspaper", specialIcon: true },
      { name: "Live", icon: "fas fa-podcast", specialIcon: true },
      { name: "Fashion & Beauty", icon: "fas fa-tshirt", specialIcon: true },
      { name: "Learning", icon: "fas fa-lightbulb", specialIcon: true },
      { name: "360 video", icon: "fas fa-glasses", specialIcon: true },
    ],
  },
  {
    title: "",
    items: [
      { name: "Browse channels", icon: "fas fa-plus-circle" }
    ],
  },
  {
    title: "MORE FROM YOUTUBE",
    items: [
      { name: "YouTube Premium", icon: "fab fa-youtube" },
      {name: "History", icon: "fas fa-podcast"},
    ],
  },
  {
    title: "",
    items: [
      { name: "Settings", icon: "fas fa-cog" },
      { name: "Report history", icon: "fas fa-flag" },
      { name: "Help", icon: "fas fa-question-circle" },
      { name: "Send feedback", icon: "fas fa-comment-alt" },
    ],
  },
]

const SideNavigation = ({menuCollapsed}) => {
  return (
    <div className="SideNavigation">
      {menuCollapsed ?
          <div className="Menus">
            {CollapsedMenus.map((Item, index) => 
              <div className="Item" key={index}>
                <i class={Item.icon}></i>
                <p>{Item.name}</p>
              </div>
            )}
          </div>:
          <div className="BigMenus">
            {BigMenus.map((Item, index) => {
              if (index === 2) {
                return (
                  <div className="Section SignUpSection">
                    <p className="text">Sign in to like videos, comment, and subscribe.</p> 
                    <div className="UserBox">
                      <i class="fas fa-user-circle"></i>
                      <span>SIGN IN</span>
                    </div>
                  </div>
                )
              }
              return (
                <div className="Section">
                  <p className="Title">{Item.title}</p>
                  {Item.items.map((Menu, index) => 
                    <div className="Item" key={Menu.name}>
                      <i className={`${Menu.icon} ${Menu.specialIcon && "SpecialIcon"}`}></i>
                      <p>{Menu.name}</p>
                    </div>
                  )}
                </div>
              )}
            )}
            <div className="FooterSection">
              {FooterLinks.map((Section) => 
                <div className="Links">
                  {Section.map(({name, link}) => 
                      <a href={link}>{name}</a>
                  )}
                </div>
              )}
              <p className="CopyrightText">© 2021 Google LLC</p>
            </div>
          </div>
        }
    </div>
  );
}

export default SideNavigation;
