#!/bin/bash

docker tag angular_ngrx_material_starter registry.digitalocean.com/registry3ie/angular_ngrx_material_starter:${TRAVIS_BRANCH/\//_}_${TRAVIS_BUILD_NUMBER}
docker push registry.digitalocean.com/registry3ie/angular_ngrx_material_starter