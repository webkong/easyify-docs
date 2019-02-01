![logo](https://easyify.webkong.cn/_media/logo.png)

![CircleCI](https://img.shields.io/circleci/project/github/webkong/easyify.svg)[![npm package](https://img.shields.io/npm/v/easyify.svg)](https://www.npmjs.com/package/easyify)![npm](https://img.shields.io/npm/l/easyify.svg)![node](https://img.shields.io/node/v/easyify.svg)![webpack](https://img.shields.io/badge/webpack-4.16+-green.svg)


>前端的开发编译工具,用webpack4x构建。编译速度更快更智能,使工作更容易。

### what is easyify

用webpack构建的工作流工具，用来解决前端工程化的问题，支持H5项目和Vue项目的调试、打包和部署。
未来将兼容React项目的构建。

### Feature

* node 8.11+
* Webpack 4.x
* Vue/H5 application
* Sigle-page/Multi-page application
* Multi-project in one repository
* Configurable environment variable
* Hot reload
* Gzip
* Dll bundle
* One-click deployment
* Flow

### 安装

```bash
clone && cd easyify
npm i #or yarn install
```

### 目录结构

```bash
├── README.md # readme
├── build  # build library
├── dist   # distribution folder
├── easyify.png # logo
├── jsconfig.json 
├── package-lock.json
├── package.json 
└── src # source code folder
```

### 如何使用？

#### 创建项目

> 你可以使用 `easyify-cli` 来快速创建项目。也可以手动创建项目，但是目录结构要跟之前的结构一致。

```bash
npm i -g easyify-cli

cd <easyifyPath>/src

easyify init <template> <projectName>

# template list web / vuejs

easyify list # View avialable templates
easyify help  # View help
```


### 配置

进入项目目录，可以看到`config.js` 文件：
```javascript
{
  env: { // 环境变量可以通过 `process.env.NODE_ENV` `process.env.API` 方式来使用
      prod: {
          NODE_ENV: '"production"',
          API: ''
      },
      dev: {
          NODE_ENV: '"development"',
          API: ''
      },
      alpha: {
          NODE_ENV: '"production"',
          API: ''
      }
  },
  vendor:[
  ], // 需要单独打成dll的前端库
  vue: false // 是否是vue项目
  multi: false // 是否是多页面项目
}
```

### 使用

#### 命令行

```
npm run help
```

```
Usage: npm run <command> -- <options>

  egs: 
  npm run start -- --project=test
  npm run start:multi -- --project=test

  Options:

    -V, --version  output the version number
    -P, --project  project name that will be operated.
    -E, --env      project compilation environment.default:dev, [prod/alpha/dev]
    -G, --gzip     build application use gizp compress
    -h, --help     output usage information

  Commands:

    dll            dll bundle
    start         development mode -- sigle-page
    start:multi   development mode -- multi-page
    build          packaged project, env prod. -- sigle-page
    build:multi    packaged project, env prod. -- multi-page
    deploy:cli     deploy dist to s3. "npm run deploy:cli <profileName> <sourcePaht> <S3Path>"
    help [cmd]     display help for [cmd]

```

#### 打包 dll 文件

```
npm run dll <options>
```

#### 开发环境

```
npm run start <options>
```
#### 打正式包


```
npm run build  <options>
```

#### 示例

```bash
git clone <easyify repo path>
cd src
easyify init web test
...
# open test use your code tool
# edit config.js if necessary
# if need dll bundle
# run `npm run dll -- -P=test` first.

npm run dll -- -P=test

npm run start -- -P=test

npm run build -- -P=test

or

npm run build -- -P=test -E=alpha

```



### 发布

#### 发布到亚马逊的s3桶

> install AWSCLI, Configuration and Credential Files
> [AWACLI document](https://docs.aws.amazon.com/cli/latest/userguide/cli-config-files.html)

```bash
npm run deploy:cli <profileName> <sourcePath> <s3Path>
 
npm run deploy:cli cdn ./dist/vue-multi/ s3://shareit.cdn.app/w/test/

# run commend: aws --profile cdn s3 sync ./dist/vue-multi/ s3://s3Path --delete --exclude=".*"
# sync success to s3://s3Path
```

### Other

[easyify document](https://easyify.webkong.cn)

[easyify template](https://github.com/easyify)

[easyify-cli](https://github.com/webkong/easyify-cli)