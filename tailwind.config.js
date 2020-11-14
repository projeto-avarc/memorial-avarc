module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    colors: {
      light: "#fff",
      body: {
        dark: "#98a8b5",
        default: "#C3D2DE",
        light: "#FFF6EF",
      },
      error: "##c72025",
      primary: {
        default: "#E75755",
        active: "#E75755",
        lighter: "#fadcdc",
      },
      black: "#28333c",

      secondary: {
        active: "#666666",
        hover: "#FFF6EF",
        default: "#666666",
      },
      metal: {
        default: "#666666",
      },
    },
    fontFamily: {
      atual: [
        "Arial",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },

    extend: {
      fontSize: {
        "2xs": ".625rem",
        md: ".875rem",
        lg: "1.750rem",
      },
      spacing: {
        "3-plus": ".875rem",
        "9": "2.25rem",
        "7": "1.75rem",
        "14": "3.5rem",
        "15": "3.75rem",
        "66": "16.5rem",
        "68": "17rem",
        "72": "18rem",
        "76": "19rem",
        "78": "19.5rem",
        "80": "20rem",
        "88": "22rem",
      },
      borderRadius: {
        xl: ".75rem",
      },
      inset: {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "1/2": "50%",
      },
      gridTemplateColumns: {
        layout: "minmax(50%, 100%) minmax(15rem, 17rem)",
      },
      gridTemplateRows: {
        layout: "3.5rem minmax(25rem, calc(100vh - 3.5rem))",
        mobile: "5.25rem 3.75rem auto",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    borderColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
};
