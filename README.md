# Website
This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.


### Update node
```sh
npm cache clean -f
npm install -g n
sudo n 14
node -v
sudo npm install -g npm@latest
npm -v
npm install -g yarn
yarn -v
```
https://www.npmjs.com/package/react-chartjs-2
npm install --save react-chartjs-2 chart.js
https://jsonplaceholder.typicode.com/

GIT_USER=haritkumar yarn deploy


### Triggering deployment with GitHub Actions

```sh
#Generate a new SSH key.
ssh-keygen -t rsa -b 4096 -C "haritkumar@hotmail.com"
#/Users/haritkumar/Desktop/id_rsa
#harit
#id_rsa.pub to Deploy Keys of repo
#Check the box for Allow write access
#copy id_rsa and paste a GitHub secret with name GH_PAGES_DEPLOY
mkdir -p .github/workflows
touch .github/workflows/documentation.yml
```