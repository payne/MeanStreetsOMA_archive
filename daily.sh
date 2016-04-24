#!/bin/sh
. /Users/mpayne/.bash_profile
cd /Users/mpayne/MeanStreetsOMA_archive
id=`tail -1 tweet.data  | awk ' { print $1;  }'`
echo "last ID is $id"
wc -l tweet.data;t timeline MeanStreetsOMA   -l -r -n 9000 -s $id   >> tweet.data ;wc -l tweet.data
