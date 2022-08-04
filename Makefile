install:
		npm ci

publish:
		npm publish --dry-run

link:
		npm link

gendiff:
		node bin/gendiff.js

lint:
		npx eslint .
test:
	npm test