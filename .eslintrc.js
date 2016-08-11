module.exports = {
	"parser": "babel-eslint",
	"extends": ["google", "plugin:react/recommended"],
	"plugins": ["react"],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"rules": {
		"max-len": [2, 120, 2],
		"indent": [2, "tab",{
			"SwitchCase": 1
		}],
		"camelcase": [2, {
			"properties": "never"
		}],
		"require-jsdoc": 0,
		"no-debugger": 1
	},
	"env": {
		"browser": true
	},
	"globals": {
		"IS_LOC": true,
		"IS_DEV": true,
		"IS_PROD": true
	}
};
