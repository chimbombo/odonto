const Doctor = require('../models/doctor')
const moment = require('moment')
const _ = require('underscore')

const saveDoctor = (req, res) => {
    const body = req.body

    const doctor = new Doctor({
        name: body.name,
        surName: body.surname,
        surName2: body.surname2,
        rut: body.rut,
        email: body.email,
        phone: body.phone,
        incorporationDate: moment().format()
    })

    doctor.save((err, doctorDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            doctor: doctorDB
        })
    })
}

module.exports = {
    saveDoctor
}