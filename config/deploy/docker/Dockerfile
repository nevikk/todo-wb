ARG UNIVERSAL_IMAGE
ARG UNIVERSAL_VER

FROM ${UNIVERSAL_IMAGE}:${UNIVERSAL_VER} as build-stage

ARG CI_COMMIT_TAG
ARG APP_STATIC_NAMESPACE
ARG CDN_API_TOKEN
ARG SERVICE_URL
ARG WB_STATIC_URL
ARG BUCKET
ARG REACT_APP_YANDEX_KEY

WORKDIR /app
COPY ./ /app/

RUN make -f ./config/deploy/Makefile frontend_build_and_cdn

FROM harbor.wildberries.ru/devops/nginx-brotli-wb:v1.19.8
# add bash
RUN apk add --update bash curl
# nginx configs
RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx
RUN rm -rf /etc/nginx/conf.d/default.conf
RUN rm -rf /etc/nginx/nginx.conf
COPY --from=build-stage app/config/deploy/docker/nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/metadata/core

COPY --from=build-stage app/build /usr/share/metadata/core/build
COPY --from=build-stage app/config /usr/share/metadata/core/config

EXPOSE 80

CMD [ "bash","/usr/share/metadata/core/config/deploy/start.sh" ]
