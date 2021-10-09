var  client  = require('scp2')

client.scp('./dist/', {
    host: '119.3.108.18',
    username: 'root',
    password: 'Wslh200024wslh',
    path: '/workspace/web/easy-blog-web'
  }, function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log('文件上传完毕!\n')
    }
  })
