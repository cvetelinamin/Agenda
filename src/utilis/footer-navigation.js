const getFooterNavigation = () => {

    const links = [
      {
        title: "HOME",
        link: "/"
      },
      {
        title: "ABOUT US",
        link: "/about"
      },
      {
        title: "EVENTS",
        link: `/events`
      },
      {
        title: "NEWS",
        link: "/news"
      },
      {
        title: "CONTACTS",
        link: "/contacts"
      },
    ]

    return links;
  }
  
  export default getFooterNavigation