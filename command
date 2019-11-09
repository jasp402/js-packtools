docsify serve ./docs
npm run release
npm run release - --release-as 1.1.0
git push --follow-tags origin master && npm publish
jsdoc2md lib/clearFolder.js