import restify from 'restify';

const app = restify.createServer({
    name: 'myapp',
    version: '1.0.0'
});

app.use(restify.plugins.acceptParser(app.acceptable));
app.use(restify.plugins.queryParser());
app.use(restify.plugins.bodyParser());

app.get('/', function (req, res, next) {
    res.send('OK');
    return next();
});
const { PORT = 8007 } = process.env;
app.listen(PORT, function () {
    console.log('We are live on port:', PORT);
});