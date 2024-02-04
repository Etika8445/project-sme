const SponsorCards=[
    {
        id: 1,
        name: "Smile India Foundation",
        imgUrl: "https://projectheena.com/uploads/ngo/37146191295115/profileImage/images/smile-foundation.jpg",
        url: "https://www.smilefoundationindia.org/"
    },
    {
        id: 2,
        name: "Goonj",
        imgUrl: "https://goonj.org/wp-content/uploads/2019/12/goonj-logo.jpg",
        url: "https://goonj.org/"
    },
    {
        id: 3,
        name: "Oxfam India",
        imgUrl: "https://humanrightsconnected.org/wp-content/uploads/2023/03/oxfam.png",
        url: "https://www.oxfamindia.org/"
    },
    {
        id: 4,
        name: "CRY",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Child_Rights_and_You_%28CRY%29_Organization_logo.png/220px-Child_Rights_and_You_%28CRY%29_Organization_logo.png",
        url: "https://www.cry.org/"
    },
    {
        id: 5,
        name: "Helpage India",
        imgUrl: "data:image/jpeg;base64,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",
        url: "https://www.helpageindia.org/"
    },
]

export default SponsorCards;