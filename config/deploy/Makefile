frontend_complex:
	npm i --prefer-offline --no-save
	node cli/_utils/ci-utils/precommit-runner/runner.js

frontend_build_and_cdn:
	npm i --prefer-offline --no-save
	node cli/_utils/ci-utils/precommit-runner/runner.js
	rm -rf build/umd/*.css.map
ifdef CI_COMMIT_TAG
	node node_modules/@wildberries/service-cdn-uploader/index.js ./build
endif
	node config/deploy/build-public-paths.js
	rm -rf build/umd/*.css.map
	node config/deploy/create-versions.js
