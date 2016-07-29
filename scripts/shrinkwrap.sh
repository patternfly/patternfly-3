#/bin/sh

if [[ `npm -v` != 3* ]];
then
    npm i -g npm@3;
fi

npm install --production
npm prune --production
npm shrinkwrap
