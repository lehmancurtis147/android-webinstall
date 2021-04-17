export default {
    OS_NAME: process.env.VUE_APP_OS_NAME,
    ACCENT_COLOR: "#FF9F00",
    SUPPORTED_DEVICES: [
        {
            name: "U50A_ATT",
            model: "5041C",
        },
        {
            name: "simba6_cricket",
            model: "6060C",
        },
        {
            name: "U50A_PLUS_TF",
            model: "A502DL",
        },
        {
            name: "U50A_PLUS_ATT",
            model: "5059D",
        },
    ],
    RELEASE_VARIANTS: {
        teamWin: {
            description: "Official Team Win Recovery Project.",
            suffix: "official",
        },
        orangeFox: {
            description: "Unofficial Orange Fox Recovery Project.",
            suffix: "unofficial",
        },
        pitchBlack: {
            description: "Unofficial Pitch Black Recovery Project.",
            suffix: "unofficial",
        },
        skyHawk: {
            description: "Unofficial Sky Hawk Recovery Project.",
            suffix: "unofficial",
        },
        dark: {
            description: "Unofficial Dark Recovery Project.",
            suffix: "unofficial",
        },
        batik: {
            description: "Unofficial Batik Recovery Project.",
            suffix: "unofficial",
        },
        nusantara: {
            description: "Unofficial Nusantara Recovery Project.",
            suffix: "unofficial",
        },
    },
    DONATION_LINKS: [
        {
            title: "Paypal Donation Link",
            description: "If you are able to, please consider making a donation through PayPal. This allows us to support this and other projects now and in the future.",
            highlight: true,
            url: "https://paypal.me/PizzaG98",
            icon: "paypal",
        },
    ],
};
