#!/bin/bash

cd Photos

for i in $( ls ); do
  `convert $i -quality 10 $i.small`
done
