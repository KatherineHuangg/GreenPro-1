const mysql = require('mysql');
const config = require('./config.js');
var dbpool = mysql.createPool(config);

const test=dbpool.getConnection((err, connection) => {
    if(err) throw err;
    console.log('connected as id ' + connection.threadId);
    dbpool.query('SELECT * from store LIMIT 1', (err2, rows) => {
        connection.release(); 
        if(err2) throw err2;
        console.log('The data from users table are: \n', rows);
    });
});

const TableCreate =()=>{
    dbpool.getConnection((err, connection) => {
        if(err) throw err;
        console.log('connected as id ' + connection.threadId);
        dbpool.query('SELECT * from store LIMIT 1', (err2, rows) => {
            connection.release(); 
            if(err2) throw err2;
            console.log('The data from users table are: \n', rows);
        });
    });
}

const insertProduct =(storekind,name,date,pic,number)=>{
    dbpool.getConnection((err, connection) => {
        if(err) throw err;
        let sql =`INSERT INTO product (name,storekind,pic,number,date) VALUES ('${name}','${storekind}', '${pic}', ${number},'${date}');`
        dbpool.query(sql, (err2, rows) => {
            connection.release(); 
            if(err2) throw err2;
            console.log('Insert: \n', rows);
        });
    });
}

const udpateProduct =(id,storekind,name,date,pic,number)=>{
    dbpool.getConnection((err, connection) => {
        if(err) throw err;
        let sql =`UPDATE product SET storekind=${storekind},name=${name} ,date=${date},pic=${pic} ,number=${number} WHERE id=${id};`
        dbpool.query(sql, (err2, rows) => {
            connection.release(); 
            if(err2) throw err2;
            console.log('UPDate: \n', rows);
        });
    });
}

const deleteProduct=(id)=>{
    dbpool.getConnection((err, connection) => {
        if(err) throw err;
        let sql =`DELETE FROM product WHERE id=${id};`
        dbpool.query(sql, (err2, rows) => {
            connection.release(); 
            if(err2) throw err2;
            console.log('Delete: \n', rows);
        });
    });
}

const addStore =(name,address,tel,kind)=>{
    dbpool.getConnection((err, connection) => {
        if(err) throw err;
        let sql =`INSERT INTO store (name,address,tel,kind) VALUES ('${name}','${address}', '${tel}', ${kind});`
        dbpool.query(sql, (err2, rows) => {
            connection.release(); 
            if(err2) throw err2;
            console.log('AddStore: \n', rows);
        });
    });
}

const deleteStore =(id)=>{
    dbpool.getConnection((err, connection) => {
        if(err) throw err;
        let sql =`DELETE FROM store WHERE id=${id};`
        dbpool.query(sql, (err2, rows) => {
            connection.release(); 
            if(err2) throw err2;
            console.log('DeleteStore: \n', rows);
        });
    });
}

const updateStore=(name,address,tel,kind)=>{
    dbpool.getConnection((err, connection) => {
        if(err) throw err;
        let sql =`UPDATE store SET name=${name},address=${address} ,tel=${tel},kind=${kind};`
        dbpool.query(sql, (err2, rows) => {
            connection.release(); 
            if(err2) throw err2;
            console.log('Update Store: \n', rows);
        });
    });
}

module.exports = {
    udpateProduct,
    deleteProduct,
    insertProduct,
    addStore,
    deleteStore,
    updateStore,
    test
};