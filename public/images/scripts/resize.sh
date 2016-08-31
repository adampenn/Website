#!/bin/bash

ARGC=$#

if [ $ARGC -ne 1 ]
then
  echo 'usage: ./resize.se folder_of_files_to_convert'
  exit
fi

cd $1

for i in $( ls ); do
  `convert $i -quality 10 $i.small`
done
