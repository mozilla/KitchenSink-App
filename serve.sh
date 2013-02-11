#!/bin/bash

pushd www
zip -r -9 -q KitchenSink-App.zip ./*
popd
volo serve
