/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
    theme: {
        extend: {
            fontFamily: {
                ethnocentric: [
                    "Ethnocentric",
                    "Inter",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "Oxygen",
                    "Ubuntu",
                    "Cantarell",
                    "Fira Sans",
                    "Droid Sans",
                    "Helvetica Neue",
                    "sans-serif",
                ],
                "tt-octosquares": [
                    "TT Octosquares",
                    "Inter",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "Oxygen",
                    "Ubuntu",
                    "Cantarell",
                    "Fira Sans",
                    "Droid Sans",
                    "Helvetica Neue",
                    "sans-serif",
                ],
                rollbox: [
                    "Rollbox",
                    "Inter",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "Oxygen",
                    "Ubuntu",
                    "Cantarell",
                    "Fira Sans",
                    "Droid Sans",
                    "Helvetica Neue",
                    "sans-serif",
                ],
            },
            backgroundColor: {
                "header-bg": "#0A0517",
            },
            backgroundImage: {
                "text-gradient": "linear-gradient(131deg, #8744AE 0%, #62DFFF 100%)",
            },
        },
    },
    plugins: [
        plugin(function ({addComponents, theme}) {
            addComponents({
                ".main-bg": {
                    background:
                        "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), lightgray 0% 0% / 100px 100px repeat, radial-gradient(443.81% 434.72% at 322.31% -217.78%, #6F359C 0%, #01060C 100%)",
                },
                ".gradient-text": {
                    backgroundImage: theme("backgroundImage.text-gradient"),
                    color: theme("colors.transparent"),
                    backgroundClip: "text",
                },
                ".gradient-text-v2": {
                    backgroundImage: theme("backgroundImage.gradient-text-v2"),
                    color: theme("colors.transparent"),
                    backgroundClip: "text",
                },
                ".bottom-line": {
                    position: "absolute",
                    background: "linear-gradient(270deg, #60E2FF 0%, #8C98FF 50%, #CC61FF 100%)",
                    height: "min(3px, 7%)",
                    width: "100%",
                    bottom: "0",
                    left: "0",
                    right: "0",
                },
                ".top-line": {
                    position: "absolute",
                    background: "linear-gradient(270deg, #60E2FF 0%, #8C98FF 50%, #CC61FF 100%)",
                    height: "min(3px, 7%)",
                    width: "100%",
                    top: "0",
                    left: "0",
                    right: "0",
                },
                ".bg-custom-center": {
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% auto",
                },
            });
        }),
    ],
};
