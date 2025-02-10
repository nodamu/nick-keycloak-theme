FROM node:20-alpine as build
RUN apk update &&     apk add --no-cache openjdk17 maven
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build-keycloak-theme

FROM quay.io/keycloak/keycloak:26.0.7
WORKDIR /opt/keycloak
COPY --from=build /app/dist_keycloak/keycloak-theme-for-kc-all-other-versions.jar /opt/keycloak/providers/
RUN /opt/keycloak/bin/kc.sh build

ENV KC_HTTP_PORT=$PORT
ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start"]