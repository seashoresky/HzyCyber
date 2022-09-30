// import sqlite3 from 'sqlite3'
// import { open } from 'sqlite'
// import SQL from 'sql-template-strings'

//创建数据库
	// const db = new sqlite3.Database(
	// 	'../../migrations/user.sql', 
	// 	sqlite3.OPEN_READWRITE, 
	// 	err => {
	// 		if (err) {
	// 			console.error(err.message)
	// 		}
	// 	}
	// )
	// const createCommand = `CREATE TABLE User (
	// 	id INTEGER PRIMARY KEY AUTOINCREMENT,
	// 	token TEXT,
  //   name TEXT
 	// )`
	// db.run(createCommand)
	// console.log(db)
	// db.run(SQL
	// 	`INSERT INTO Users(token,name) VALUES (1,1,1)`
	// )
	// db.run(`SELECT * FROM Users`,[], (err, rows) => {
	// 	if(err) return console.log(err.message)
	// 	rows.forEach((row) => {
	// 		console.log(row)
	// 	})
	// })

// async function getAllUser(db) {
//     const result = await db.all('SELECT * FROM tbl')
//     return result
// }