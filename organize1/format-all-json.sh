#!/bin/sh
for f in *.json
do
  cat ${f} | jq '.' > tmp; mv tmp ${f}
done
