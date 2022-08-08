const credentials = {
    username: encodeURIComponent('khushi'),
    password: encodeURIComponent("Abc@1234"),
}

module.exports.config = {
    dbUrl: `mongodb+srv://${credentials.username}:${credentials.password}@cluster0.lw57ol3.mongodb.net/chat?retryWrites=true&w=majority`,
    secrets: {
        
    },
}