#!/bin/bash

docker tag angular_ngrx_material_starter 3ieregistry.azurecr.io/angular_ngrx_material_starter:${TRAVIS_BRANCH/\//_}_${TRAVIS_BUILD_NUMBER}
docker push 3ieregistry.azurecr.io/angular_ngrx_material_starter