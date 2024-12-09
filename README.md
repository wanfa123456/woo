# Mintlify Starter Kit

Click on `Use this template` to copy the Mintlify starter kit. The starter kit contains examples including

- Guide pages
- Navigation
- Customizations
- API Reference pages
- Use of popular components

### Development

Install the [Mintlify CLI](https://www.npmjs.com/package/mintlify) to preview the documentation changes locally. To install, use the following command

```
npm i -g mintlify
```

Run the following command at the root of your documentation (where mint.json is)

```
mintlify dev
```

### Publishing Changes

Install our Github App to auto propagate changes from your repo to your deployment. Changes will be deployed to production automatically after pushing to the default branch. Find the link to install on your dashboard. 

#### Troubleshooting

- Mintlify dev isn't running - Run `mintlify install` it'll re-install dependencies.
- Page loads as a 404 - Make sure you are running in a folder with `mint.json`




check openapi.json格式
```
mintlify openapi-check api-reference/openapi.json 

mintlify openapi-check openapi-merged.json

swagger-cli validate  openapi-merged.json
```


swagger 不支持ref 引用外部文件  所以需要 merge 合并 引用文件到 openapi.json里

```
npm install -g @redocly/openapi-cli

openapi bundle api-reference/openapi.json  --output openapi-merged.json

```

```
npm install -g nodemon
```

local start 
```
nodemon --watch api-reference/ --ext json,yaml --exec "node merge-openapi.js" & mintlify dev  --verbose 
```

https://wootraders.atlassian.net/wiki/spaces/PEng/pages/333578505/V3+API





