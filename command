docsify serve ./docs
npm run release
npm run release -- --release-as 2.3.6
git push --follow-tags origin master && npm publish
jsdoc2md lib/clearFolder.js