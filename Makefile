install:
	npm install

lint:
	npx eslint .

publish:
	npm publish --dry-run

start:
	npx node bin/brain-calc.js