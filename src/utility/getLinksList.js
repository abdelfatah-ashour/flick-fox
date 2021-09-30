export function getLinksList() {
  return [
    {
      id: "cxzfase45as",
      pathname: "/",
      label: "home",
      sunMenu: null,
    },
    {
      id: "c120ds45as",
      pathname: "/discover",
      label: "discover",
      sunMenu: [
        {
          id: "sd54ew78v",
          label: "tv",
          link: "/tv",
        },
        {
          id: "cv54sdsd01",
          label: "movies",
          link: "/movies",
        },
      ],
    },
    {
      id: "zxvcar54",
      pathname: "/movies",
      label: "movies",
      sunMenu: [
        {
          id: "321dfa54",
          label: "top rated",
          link: "/top-rated",
        },
        {
          id: "nhsr21asd",
          label: "most popular",
          link: "/most-popular",
        },
        {
          id: "zxcfer12",
          label: "upcoming",
          link: "/upcoming",
        },
      ],
    },
    {
      id: "321qwe21",
      pathname: "/tv-show",
      label: "tv show",
      sunMenu: [
        {
          id: "23165asdad1",
          label: "airing today",
          link: "/airing-today",
        },
        {
          id: "fgjsa21sdfd",
          label: "on the air",
          link: "/on-the-air",
        },
      ],
    },
    {
      id: "ghfgh54",
      pathname: "/price",
      label: "price",
      sunMenu: null,
    },
    {
      id: "21weq4r",
      pathname: "/blog",
      label: "blog",
      sunMenu: null,
    },
    {
      id: "zaserqg1",
      pathname: "/contacts",
      label: "contacts",
      sunMenu: null,
    },
  ];
}
