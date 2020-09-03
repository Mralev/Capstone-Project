
module.exports = (app) => {

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        next();
    });

    app.use('/api/users', require('./user.route'));
    app.use('/api/admin', require('./admin.route'));
    app.use('/api/login', require('./login.route'));
    app.use('/api/clinics', require('./clinics.route'));
    app.use('/api/clinic-billing', require('./clinic_billing.route'));
    app.use('/api/clinic-notes', require('./clinic_notes.route'));
    app.use('/api/clinic-favorite', require('./favorite_clinic.route'));
    app.use('/api/clinic-aging', require('./clinic_aging.route'));
    app.use('/api/clinic-hours', require('./clinic_office_hours.route'));
    app.use('/api/insurance-company', require('./insurance_company.route'));
    app.use('/api/clinic-website-login', require('./clinic_website_logins.route'));
    app.use('/api/clinic-patient-statement', require('./clinic_patient_statement.route'));
    app.use('/api/clinic-deposit-entry', require('./clinic_deposit_entry.route'));
    app.use('/api/clinic-month-end', require('./clinic_month_end.route'));
    app.use('/api/clinic-remit', require('./clinic_remits.route'));
    app.use('/api/clinic-network', require('./clinic_network.route'));
    app.use('/api/clinic-contact', require('./clinic_contact.route'));
    app.use('/api/mtb-distribution', require('./mtb_distribution.route'));
    app.use('/api/drop-box', require('./dropbox.route'));
};
