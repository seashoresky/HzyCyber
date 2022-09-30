export default function handler(req, res) {
    if(req.method === 'GET') {
        res.status(200).json({ 
            code: 0,
            msg: '',
            data: {
                msg: 'pong'
            }
         })
    }
  }
  