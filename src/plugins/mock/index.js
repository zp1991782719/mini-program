import config from './config'
import api from './api'

import Mock from 'mockjs'

const Random = Mock.Random

Mock.mock('/api/z/p/user/userList', 'get', {
  code: 0,
  msg: '',
  'content|20': [
    {
      avatar: Random.image('200x200', '#50B347', '#FFF', '头像'),
      name: Random.cname(),
      article: Random.cparagraph(60, 120),
      imgs: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531996965677&di=86dc9bf49eb9866e449873d3dfd2f523&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201408%2F12%2F20140812102945_anHrL.jpeg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532023095731&di=4b189ec02e76303b074c7415df141e03&imgtype=0&src=http%3A%2F%2Fpic.yesky.com%2FuploadImages%2F2016%2F342%2F49%2F5DY56992PG2D.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532023130033&di=8215d336148a1c45d77693b4360354b2&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D1649847555%2C3026466189%26fm%3D214%26gp%3D0.jpg'],
      addr: Random.city(),
      time: Random.integer(1, 59) + '分钟前',
      zan: Random.integer(0, 100),
      comments: []
    }
  ]
})