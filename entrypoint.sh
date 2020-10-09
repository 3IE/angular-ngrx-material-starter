#! /bin/sh
if [ "$SWAGGER_ACCESS" = "true" ]; then
	rm -rf /etc/nginx/conf.d/nginx-custom.prod.conf &&
	sed -i -e "s/#SWAGGER/location \/swagger {\n    proxy_http_version 1.1;\n    proxy_set_header Host \$host;\n    resolver 127.0.0.11;\n    proxy_pass http:\/\/API_SERVER_NAME;\n    proxy_intercept_errors on;\n    }/g" /etc/nginx/conf.d/default.conf &&
	sed -i -e "s/API_SERVER_NAME/$API_SERVER_NAME/g" /etc/nginx/conf.d/default.conf &&
	nginx -g 'daemon off;'
else
	rm -rf /etc/nginx/conf.d/nginx-custom.prod.conf &&
	sed -i -e "s/API_SERVER_NAME/$API_SERVER_NAME/g" /etc/nginx/conf.d/default.conf &&
	nginx -g 'daemon off;'
fi