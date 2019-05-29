//Look for statics first
app.use(express.static(path.join(__dirname, '')));
//Return the index for any other GET request
app.get('/*', function (req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});