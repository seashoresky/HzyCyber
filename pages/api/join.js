import jwt from "jsonwebtoken"
import connectMongo from '../../utlis/connectMongo'
import User from '../../models/schema'

let numOfActiveUser = 0

export default async function handler(req, res) {

    // 1.连接数据库
    console.log('正在连接远程数据库...')
    await connectMongo()
    console.log('远程数据库已连接!')

    // 2.如果用户没有输入id，返回错误101
        //不过吧，客户端form有validation，下面这种情况其实不会发生了
    if(req.body.id === undefined) {
        res.status(200).json({
            code: 101,
            msg: 'should provide game ID'
        })
    }

    // 3.查询目前活跃的用户
    let activeUsers = await User.find({ activeUser: true})
    let numOfActiveUser = activeUsers.length
    console.log(`用户进入之前房间里的人数${numOfActiveUser}`)

    // 4.如果活跃用户已经有两个了则返回错误100
    if(numOfActiveUser >= 2) {
        res.status(200).json({
            code: 100,
            msg:'Game has already started',
        })
        console.log(`房间满了，已经拒绝用户加入`)
        return
    }

    // 5.用户可以进入对局后，先收集用户信息
     //公钥
     const KEY = 'seashore'
     //从响应中解析用户名，根据用户名和公钥生成token
     const { id } = req.body
     const token = jwt.sign({ id }, KEY)
     //封装传递给数据库的用户信息对象，包含 用户名、token、是否为活跃用户
     const passData = {
				id: id,
				token: token,
				activeUser: true,
				state:'waiting'
     }
    // 6.然后根据User schema以及User对象创建document，将用户信息存储进数据库
    console.log('正在将用户信息录入数据库...')
    const user = new User(passData)
    console.log(user)
    await user.save()
    console.log('用户信息已录入数据库！')  

     // 7.更新目前活跃用户的数量    
		 	activeUsers = await User.find({ activeUser: true})
			numOfActiveUser = activeUsers.length
     	console.log(`用户进入之后房间里的人数${numOfActiveUser}`) 

		// 8.如果目前有两个用户进入了房间，那么给token是
		if(numOfActiveUser === 2 ) {

		}
    // 9.如果目前只有当前用户一个人进入房间则告诉用户请等待另一个人加入
    if(numOfActiveUser === 1) {
        res.status(200).json({
            code: 102,
            msg:'Please wait',
						data: {
							user_token: user.token
						}  
        }) 
        return
    }

    // 10.响应请求，返回user_token
    res.status(200).json({
        code: 0,
        msg:'',
        data: {
          user_token: user.token
        }  
    })
  }
  