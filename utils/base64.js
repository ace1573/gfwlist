'use strict'
const fs = require('fs')
const path = require('path')

const base64Path = path.join(__dirname, '../gfwlist.txt')
const srcPath = path.join(__dirname, '../gfwlist.txt.src')


const cmds = {
  decode,
  encode,
}


let cmd = process.argv[2]
if(!cmd){
  console.info(`
!!!how to use!!!
[decode]: node utils/base64.js decode
[encode]: node utils/base64.js encode
  `)
  return
}

if(!cmds[cmd]){
  console.error(`can not find command: ${cmd}`)
  return
}
cmds[cmd].apply(this)



function decode(){

  let src = Buffer.from(fs.readFileSync(base64Path, 'utf-8'), 'base64').toString('utf-8')

  fs.writeFileSync(srcPath, src, { encoding: 'utf-8' })

  console.log('decode success')
}



function encode(){

  let src = Buffer.from(fs.readFileSync(srcPath)).toString('base64')

  fs.writeFileSync(base64Path, src, { encoding: 'utf-8' })

  console.log('encode success')
}