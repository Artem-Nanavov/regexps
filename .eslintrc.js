module.exports = {
	env: {
		browser: true,
		es2020: true,
		node: true,
		jest: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
	],
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				paths: ['./src'],
			},
		},
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		parserOptions: {
			ecmaVersion: 2020,
		},
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
	],
	rules: {
		'react/prop-types': 'off',
		camelcase: 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		indent: [2, 'tab'],
		'jsx-a11y/click-events-have-key-events': 'off',
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'no-tabs': 'off',
		'import/no-unresolved': 'warn',
		'object-curly-spacing': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
		'import/extensions': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
		'react/jsx-props-no-spreading': 'off',
		'no-autofocus': 'off',
		'jsx-a11y/no-noninteractive-element-interactions': 'off',
		'max-len': ['error', { code: 135 }],
		'no-underscore-dangle': 'off',
		'jsx-a11y/label-has-associated-control': [2, { assert: 'either', depth: 25 }],
	},
};
