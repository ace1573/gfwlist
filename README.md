
#### GFWList

GFWList URL(Github): https://raw.githubusercontent.com/ace1573/gfwlist/master/gfwlist.txt


#### Using in v2ray
1. config gfwlist url
2. update pac file
3. restart service
4. reopen system proxy config


#### Develop
1. decode `gfwlist.txt`: 
```
node utils/base64.js decode
```
2. edit `gfwlist.txt.src`
3. encode `gfwlist.txt.src`
```
node utils/base64.js encode
```


#### Changes from official gfwlist
- add `github.com`
- add `kh.google.com`(google earth)
