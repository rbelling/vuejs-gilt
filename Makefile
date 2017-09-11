default: commit sync

help:
	@echo "make sync - to pull and push commits"
	@echo "make commit - to add and commit all changes"

sync:
	@git pull wiki master
	@git push wiki master
	@git pull origin master
	@git push origin master

commit:
	@git add .
	@git commit -m "Update from Local"

setup:
	@git remote add wiki https://github.com/MunGell/es2015.wiki.git

publish:
	git subtree push --prefix presentation origin gh-pages

.PHONY: help sync commit setup publish
