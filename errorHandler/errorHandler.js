class ErrorHandler {
    static Error(res, err) {
        console.log(err);
        if (!err)
            res.stauts(500).send('Something went wrong!');
        else {
            if (!err.status)
                err.status = 500;
            if (!err.message)
                err.message = 'Something went wrong';

            res.status(err.status).send(err.message);
        }
    }
}

module.exports = ErrorHandler;