const express = require('express')
const readFiles = require('./readFiles')
const router = express.Router()

/**
 * 获取文件列表
 */
router.get('/files', function (req, res) {
// 同步遍历目录下的所有文件
  res.json({
    'code': 0,
    'msg': 'success',
    'data': readFiles('code')
  })
})

module.exports = router
