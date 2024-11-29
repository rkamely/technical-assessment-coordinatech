import type {Config} from "tailwindcss";

export const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
      },
      colors: {
        "text-01": "#56596A",
        "text-02": "#D6D6D6",
        "text-03": "#EEF0F3",
        "text-04": "#909090",
        "text-05": "#E8E8E8",
        "text-06": "#E9EAEA",
        "text-07": "#7C7F84",
        "text-08": "#75777A",
        "text-09": "#EAECF0",
        "text-10": "#ECEBF0",
        "text-11": "#000000",
        "text-12": "#FFFFFF",
        "text-13": "#FCFBFE",
        "text-14": "#F8F8F8",


        "border-01": "#909090",
        "border-02": "#D6D6D6",
        "border-03": "#56596A",
        "border-04": "#CBCBCD",

        "bg-01": "#F5F3FF",
        "bg-02": "#F5F5F5",
        "bg-03": "#F9F8FC",
        "bg-04": "#ECE9FE",
        "bg-05": "#F2F2F2",
        "bg-06": "#00000015",
        "bg-07": "#FFFFFF",
        "bg-08": "#190C25",
        "bg-09": "#6F59CA",
        "bg-10": "#3B1E85",
        "bg-11": "#251354",




        "primary-purple": "#7839EE",
        "primary-purple-02": "#342A52",
        "primary-purple-03": "#242932",
        "primary-orange": "#F4611B",
        "text-green": "#099250",
        "light-green": "#EDFCF2",
        "text-red": "#E31B54",
        "light-red": "#FFF1F3",
      },
      fontSize: {
        "H1-Heavy": [
          "64px",
          {
            lineHeight: "96px",
            fontWeight: "900",
          },
        ],
        "H1-Bold": [
          "64px",
          {
            lineHeight: "96px",
            fontWeight: "700",
          },
        ],
        "H1-Medium": [
          "64px",
          {
            lineHeight: "96px",
            fontWeight: "500",
          },
        ],
        "H2-Heavy": [
          "48px",
          {
            lineHeight: "83px",
            fontWeight: "900",//ok
          },
        ],
        "H2-Bold": [
          "48px",
          {
            lineHeight: "80px",
            fontWeight: "700",
          },
        ],
        "H2-Medium": [
          "48px",
          {
            lineHeight: "80px",
            fontWeight: "500",
          },
        ],
        "H1-40-800": [
          "40px",
          {
            lineHeight: "70px",
            fontWeight: "800",
          },
        ],
        "H3-Heavy": [
          "36px",
          {
            lineHeight: "48px",
            fontWeight: "900",
          },
        ],
        "32-800-55": [
          "32px",
          {
            lineHeight: "55px",
            fontWeight: "800",//ok
          },
        ],
        "H3-Bold-lineHeight": [
          "32px",
          {
            letterSpacing: "-0.64px",
            fontWeight: "800",//ok
          },
        ],
        "H3-Bold": [
          "32px",
          {
            fontWeight: "700",
          },
        ],
        "H3-Medium": [
          "36px",
          {
            lineHeight: "48px",
            fontWeight: "500",
          },
        ],
        "H4-Heavy": [
          "24px",
          {
            lineHeight: "38px",
            fontWeight: "900",//ok
          },
        ],
        "H4-Heavy-Normal": [
          "24px",
          {
            fontWeight: "900",//ok
          },
        ],
        "H4-Heavy-800": [
          "24px",
          {
            fontWeight: "800",//ok
          },
        ],
        "24-800-38": [
          "24px",
          {
            lineHeight: "38px",
            fontWeight: "800",//ok
          },
        ],
        "H4-Bold-lineHeight-24-800": [
          "24px",
          {
            lineHeight: "38px",
            fontWeight: "800",//ok
          },
        ],
        "H4-Bold-lineHeight": [
          "24px",
          {
            letterSpacing: '-0.24px',
            lineHeight: "38px",
            fontWeight: "800",//ok
          },
        ],
        "H4-Bold": [
          "24px",
          {
            letterSpacing: '-0.24px',
            lineHeight: "30px",
            fontWeight: "700",//ok
          },
        ],
        "H4-Medium": [
          "24px",
          {
            lineHeight: "36px",
            fontWeight: "500",
          },
        ],
        "H4-Light": [
          "22px",
          {
            letterSpacing: '-0.22px',
            lineHeight: "38px",
            fontWeight: "700",//ok
          },
        ],
        "22-700-38": [
          "22px",
          {
            lineHeight: "38px",
            fontWeight: "700",//ok
          },
        ],
        "H5-Heavy": [
          "20px",
          {
            lineHeight: "32px",
            fontWeight: "900",
          },
        ],
        "H5-Extra-Black": [
          "20px",
          {
            lineHeight: "38px",
            fontWeight: "800",//ok
          },
        ],
        "H5-Black-letter-spacing": [
          "20px",
          {
            letterSpacing: "-0.4px",
            fontWeight: "800",//ok
          },
        ],
        "H5-Black": [
          "20px",
          {
            fontWeight: "800",//ok
          },
        ],
        "20-800-35": [
          "20px",
          {
            lineHeight: "35px",
            fontWeight: "800",//ok
          },
        ],
        "H5-Bold": [
          "20px",
          {
            fontWeight: "700",//ok
          },
        ],
        "H5-Medium": [
          "20px",
          {
            fontWeight: "500",
          },
        ],
        "H5-Light-lineHeight": [
          "20px",
          {
            lineHeight: "38px",
            fontWeight: "400",//ok
          },
        ],
        "H5-Light": [
          "20px",
          {
            fontWeight: "400",//ok
          },
        ],
        "Body1-Heavy": [
          "18px",
          {
            lineHeight: "30px",
            fontWeight: "900",//ok
          },
        ],
        "18-900-32": [
          "18px",
          {
            lineHeight: "32px",
            fontWeight: "900",//ok
          },
        ],
        "Body1-Bold-lineHeight": [
          "18px",
          {
            lineHeight: "30px",
            fontWeight: "700",//ok
          },
        ],
        "18-700-32": [
          "18px",
          {
            lineHeight: "32px",
            fontWeight: "700",//ok
          },
        ],
        "18-700-30": [
          "18px",
          {
            lineHeight: "30px",
            fontWeight: "700",//ok
          },
        ],
        "Body1-Bold": [
          "18px",
          {
            fontWeight: "700",//ok
          },
        ],
        "Body1-Medium": [
          "18px",
          {
            lineHeight: "30px",
            fontWeight: "500",
          },
        ],
        "18-400-30": [
          "18px",
          {
            lineHeight: "30px",
            fontWeight: "500",
          },
        ],
        "16-900-32": [
          "16px",
          {
            lineHeight: "32px",
            fontWeight: "900",//ok
          },
        ],
        "Body2-Extra-Black-LienHeight": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "900",//ok
          },
        ],
        "Body2-Black-LienHeight": [
          "16px",
          {
            lineHeight: "38px",
            fontWeight: "800",//ok
          },
        ],
        "16-800-27": [
          "16px",
          {
            lineHeight: "27px",
            fontWeight: "800",//ok
          },
        ],
        "Body2-Black": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "800",//ok
          },
        ],
        "Body2-Black-Normal": [
          "16px",
          {
            letterSpacing: "-0.32px",
            fontWeight: "800",//ok
          },
        ],
        "Body2-Bold": [
          "16px",
          {
            lineHeight: "28px",
            fontWeight: "700",//ok
          },
        ],
        "16-700-28": [
          "16px",
          {
            lineHeight: "28px",
            fontWeight: "700",//ok
          },
        ],
        "Body2-Bold-24-700": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "700",//ok
          },
        ],
        "Body2-Heavy": [
          "16px",
          {
            fontWeight: "700",//ok
          },
        ],
        "Body2-Medium-lineHeight": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "600",//ok
          },
        ],
        "Body2-Medium": [
          "16px",
          {
            fontWeight: "500",//ok
          },
        ],
        "Body2-Medium-Thin-lineHeight": [
          "16px",
          {
            lineHeight: "28px",
            fontWeight: "400",//ok
          },
        ],
        "16-400-28": [
          "16px",
          {
            lineHeight: "28px",
            fontWeight: "400",//ok
          },
        ],
        "Body2-Medium-Thin": [
          "16px",
          {
            fontWeight: "400",//ok
          },
        ],
        "Body3-Heavy": [
          "14px",
          {
            lineHeight: "24px",
            fontWeight: "900",
          },
        ],

        "Body3-Bold-lineHeight": [
          "14px",
          {
            lineHeight: "24px",
            fontWeight: "700",//ok
          },
        ],
        "Body3-Bold-Normal": [
          "14px",
          {
            fontWeight: "700",//ok
          },
        ],
        "Body3-Bold": [
          "14px",
          {
            lineHeight: "22px",
            fontWeight: "600",//ok
          },
        ],
        "Body3-Medium": [
          "14px",
          {
            fontWeight: "500",//ok
          },
        ],
        "Body3-Medium-lineHeight": [
          "14px",
          {
            lineHeight: "24px",
            fontWeight: "400",//ok
          },
        ],
        "14-700-25": [
          "14px",
          {
            lineHeight: "25px",
            fontWeight: "700",//ok
          },
        ],
        "14-500-24": [
          "14px",
          {
            lineHeight: "24px",
            fontWeight: "500",//ok
          },
        ],
        "14-400-24": [
          "14px",
          {
            lineHeight: "24px",
            fontWeight: "400",//ok
          },
        ],
        "Body4-Heavy": [
          "12px",
          {
            lineHeight: "22px",
            fontWeight: "900",
          },
        ],
        "12-700-24": [
          "12px",
          {
            lineHeight: "24px",
            fontWeight: "700",
          },
        ],
        "Body4-Bold-lineHeight": [
          "12px",
          {
            letterSpacing: "-0.12px",
            lineHeight: "20px",
            fontWeight: "700",//ok
          },
        ],
        "12-700-20": [
          "12px",
          {
            lineHeight: "20px",
            fontWeight: "700",//ok
          },
        ],
        "Body4-Bold": [
          "12px",
          {
            lineHeight: "32px",
            fontWeight: "700",//ok
          },
        ],
        "Body4-Bold-28-700": [
          "12px",
          {
            lineHeight: "28px",
            fontWeight: "700",//ok
          },
        ],
        "Body4-Medium": [
          "12px",
          {
            lineHeight: "20px",
            fontWeight: "600",//ok
          },
        ],
        "Body4-Medium-lineHeight-letter": [
          "12px",
          {
            letterSpacing: "-0.24px",
            lineHeight: "20px",
            fontWeight: "500",//ok
          },
        ],
        "Body4-Medium-lineHeight": [
          "12px",
          {
            lineHeight: "24px",
            fontWeight: "400",//ok
          },
        ],
        "12-400-20": [
          "12px",
          {
            lineHeight: "20px",
            fontWeight: "400",//ok
          },
        ],
        "Body5-Medium-lineHeight": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "400",
          },
        ],

        "Description-Bold-lineHeight": [
          "10px",
          {
            lineHeight: "24px",
            fontWeight: "700",
          },
        ],
        "10-700-16": [
          "10px",
          {
            lineHeight: "16px",
            fontWeight: "700",
          },
        ],
        "Description-Bold": [
          "10px",
          {
            fontWeight: "700",
          },
        ],
        "Description-Medium-20-400": [
          "10px",
          {
            lineHeight: "20px",
            fontWeight: "400",//ok
          },
        ],
        "10-400-16": [
          "10px",
          {
            lineHeight: "16px",
            fontWeight: "400",//ok
          },
        ],
        "Description-Light": [
          "8px",
          {
            fontWeight: "700",//ok
          },
        ],
      },
      screens: {
        'xsm': '375px',

      },
      boxShadow: {
        'nav': "0px 4px 10px 0px rgba(0, 0, 0, 0.05)",
        'border': "0px 0px 0px 2px #7839EE",
        'slider': "0px 2px 16px 0px rgba(0, 0, 0, 0.07)",
        'mobileSlider': "0px 4px 16px 0px rgba(32, 32, 32, 0.04)",
        'storePageItem': "0px 1px 8px 0px rgba(0, 0, 0, 0.08)",

      },
      animation: {'animate-spin-inverse': 'animate-spin-inverse 1s linear infinite'},
      keyframes: {
        'animate-spin-inverse': {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(-360deg)'},
        }
      },
      transitionProperty: {
        maxHeight: 'height'
      }
    },
  },
  plugins: [],
};

export default config;
