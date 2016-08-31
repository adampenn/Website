#!/bin/bash

ARGC=$#

if [ $ARGC -ne 1 ]
then
  echo 'usage: ./rename.sh folder_of_files_to_rename'
  exit
fi

cd $1

j=0

for i in $( ls ); do
  mv $i $j.jpg
  j=$((j + 1))
done

echo $j items renamed

