const testFolder = './src/design-system';
const glob = require('glob')
const fs = require('fs');

// options is optional
glob(`${testFolder}/**/*.vue`, function (er, files) {
    // files is an array of filenames.
    // If the `nonull` option is set, and nothing
    // was found, then files is ["**/*.js"]
    // er is an error object or null.

    files.map(file => {
        const splitedPath = file.split('/')
        const component = splitedPath.pop()
        const componentPath = splitedPath.join('/').replace('./src/','')
        const samplePath = `./exemplos/${componentPath}`

        console.info(`### Creating sample for ${component} ###`)
        fs.rmdir(samplePath, { recursive: true }, (err) => {
            fs.mkdir(samplePath, { recursive: true }, (err) => {

                fs.copyFile(file, `${samplePath}/${component}`, (err) => {
                    if (err) throw err;
                    console.log(`${file} copied!`);
                  });

                const data = {
                    'readme.md': 'This folders were created automatically',
                    'index.html': '<div id="app"></div>',
                    'package.json': `{
                    "name": "Design System",
                    "version": "0.1.0",
                    "private": true,
                    "scripts": {
                      "serve": "vue-cli-service serve",
                      "build": "vue-cli-service build",
                      "lint": "vue-cli-service lint"
                    },
                    "dependencies": {
                      "vue": "^2.6.11"
                    },
                    "devDependencies": {},
                    "browserslist": [
                      "> 1%",
                      "last 2 versions",
                      "not ie <= 8"
                    ],
                    "keywords": [],
                    "description": "Item do Design System"
                  }
                  `,
                    'index.js': `import Vue from "vue";import App from "./${component.replace('.vue', '')}";Vue.config.productionTip = false;new Vue({el: "#app",template: "<App/>",components: { App }});`
                }

                // creating files
                for (fileName in data) {
                    const fileContent = new Uint8Array(Buffer.from(data[fileName]))
                    const sampleName = `${samplePath}/${fileName}`

                    fs.writeFile(sampleName, fileContent, (err) => {
                        if (err) throw err;
                        console.log(`${sampleName} created!`)
                    });
                }
            });
        })

        return file
    })
})