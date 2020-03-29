install:
	npm install eslint-config-airbnb-base
	npm install eslint-plugin-import
	npm install

lint:
	npx eslint .

publish:
	npm publish --dry-run

start:
	npx node bin/brain-calc.js