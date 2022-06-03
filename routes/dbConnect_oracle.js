var oracledb = require('oracledb');

var dbConfig = {
    user : 'gldj',
    password : 'gldj',
    connectString : 'jdbc:oracle:thin:@sdedu.tplinkdns.com:1521:xe'
}
var express = require('express'), http = require('http'), path = require('path');

var app = express();


app.set('port', process.env.PORT || 3000);


var bodyPaser = require('body-parser');
const { response } = require('../server');

app.use(bodyPaser.urlencoded({extended:true}));
app.use(bodyPaser.json())

var router = express.Router();

oracledb.autoCommit = true;

router.post('/select', function(req, res){
    oracledb.getConnection({
    user : 'gldj',
    password : 'gldj',
    connectString : 'jdbc:oracle:thin:@sdedu.tplinkdns.com:1521:xe'
    },
    function(err,connection){
        if(err){
            console.error(err.message);
            return;
        }
        let q = 'select p_name, p_cate, p_price from jan16_product'

        connection.execute(q, [], function(err, result){
            if(err){
                console.error(err.message);
                doRelease(connection);
                return;
            }
            console.log(result.rows);
            doRelease(connection, result.rows);
        });
    });

    function doRelease(connection, rowLisr){
        connection.release(function(err){
            if(err){
                console.error(err.message);
            }
            console.log('list size' + rowLisr.length)
            response.send(rowLisr)
        });
    }

})

app.use('/', router);

app.all('*', function(req, res) { res.status(404).send('<h1>ERROR - 페이지를 찾을 수 없습니다.</h1>'); }); 
// Express 서버 시작 
http.createServer(app).listen(app.get('port'), function(){ console.log('Express server listening on port ' + app.get('port')); });

