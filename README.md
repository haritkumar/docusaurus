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

```html
https://www.npmjs.com/package/react-chartjs-2
npm install --save react-chartjs-2 chart.js
https://jsonplaceholder.typicode.com/

GIT_USER=haritkumar yarn deploy
```

### Triggering deployment with GitHub Actions

```sh
#Generate a new SSH key.
mkdir .ssh
sudo ssh-keygen -t rsa -b 4096 -C "haritkumar@hotmail.com"
#/Users/haritkumar/Downloads/docusaurus/facebook/.ssh/id_rsa
#harit
sudo cat .ssh/id_rsa
#id_rsa.pub to Deploy Keys of repo with title id_rsa
#Check the box for Allow write access
#copy id_rsa and paste a GitHub secret with name GH_PAGES_DEPLOY
mkdir -p .github/workflows
touch .github/workflows/documentation.yml
```

- Now when a new pull request arrives towards your repository in branch documentation it will automatically ensure that Docusaurus build is successful.
- When pull request is merged to documentation branch or someone pushes to documentation branch directly it will be built and deployed to gh-pages branch.
- After this step, your updated documentation will be available on the GitHub pages.