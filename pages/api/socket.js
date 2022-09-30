import { Server } from "socket.io";

export default function Sockethandler(req, res) {
    // 检查socket是否已经初始化
  if (res.socket.server.io) {
    console.log("socket已经创建过了");
    res.end();
    return;
  }

  const io = new Server(res.socket.server);
  let player = [] // player用于存储目前进入房间的用户，（后续可能会改为对象or数据库存储
  let room = ''
  res.socket.server.io = io;

  io.on('connection', (socket) => {
    console.log(`用户 ${socket.id} 已上线`);
    // 接受client加入房间的请求
    socket.on("join_room", (data) => {
        socket.join(data);
    });
    // 将用户放入对应的用户database
    socket.on("PlayerJoin", (data) => {
        player.push(data.id)
        console.log(player)
        socket.emit("newPlayerComeIn",player);
        //向所有用户发送新用户加入的消息 to(room)? .broadcast?
    });  
  })

  console.log('socket创建成功！')
  res.end();
}