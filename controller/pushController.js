
const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;
const webPush = require('web-push');
webPush.setVapidDetails('mailto:test@example.com', publicVapidKey, privateVapidKey);

class pushController {

    static async subscribe(req, res) {
        try {
            
            const subscription = req.body;
            res.status(201).json({});
            const payload = JSON.stringify({
                title: 'test test test',
            });
            webPush.sendNotification(subscription, payload)
                .catch(error => console.error(error));
        } catch (err) {
            errHandler.Error(res, err);
        };
    }
}

module.exports = pushController;