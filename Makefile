install: install-deps
		npx simple-git-hooks

install-deps:
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

test-coverage:
		npm test -- --coverage --coverageProvider=v8

publish:
		npm publish
