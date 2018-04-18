const passport = require('passport');

module.exports = app => {
    //Passport attempts to authenicate the user when they go to the /auth/google route
    //In the scope area we are asking Google to provide us the profile and email information for the user
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    //Passport attempts to  
    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/#');
        }
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (res, req) => {
        res.send(req.user);
    });
};