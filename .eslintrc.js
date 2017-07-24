module.exports = {

    "parser": "babel-eslint",
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "arrow-body-style": "off",
        "linebreak-style": 0,
        "jsx-a11y/img-uses-alt": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/redundant-alt": "off",
        "jsx-a11y/valid-aria-role": "off",
        "jsx-boolean-value": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/forbid-prop-types": "off",
        "react/jsx-no-bind": "off",
    }
};