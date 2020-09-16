// const getNavigation = (user) => {

//     const authLinks = [
//       {
//         title: "Publications",
//         link: "/"
//       },
//       {
//         title: "Share your thoughts",
//         link: "/share"
//       },
//       {
//         title: "Profile",
//         link: `/profile/${user && user.id}`
//       }
//     ]
  
//     const guestLinks = [
//       {
//         title: "Publications",
//         link: "/"
//       },
//       {
//         title: "Register",
//         link: "/register"
//       },
//       {
//         title: "Login",
//         link: "/login"
//       }
//     ]
//     const loggedIn = user && user.loggedIn
//     return loggedIn ? authLinks : guestLinks
//   }

const getNavigation = () => {

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
      {
        title: "REGISTER",
        link: "/register"
      },
      {
        title: "LOGIN",
        link: "/login"
      },
      {
        title: "PROFILE",
        link: "/profile"
      },
    ]

    return links;
  }
  
  export default getNavigation