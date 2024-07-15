const Mechanic = require('../models/Mechanic');

// Kurti meistrą
exports.createMechanic = async (req, res) => {
    const { firstName, lastName, specialization, image, city, garage } = req.body;
    try {
        const newMechanic = new Mechanic({
            firstName,
            lastName,
            specialization,
            image,
            city,
            garage
        });
        const mechanic = await newMechanic.save();
        res.json(mechanic);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Serverio klaida');
    }
};

// Gauti visus meistrus
exports.getAllMechanics = async (req, res) => {
    try {
        const mechanics = await Mechanic.find().populate('garage');
        res.json(mechanics);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Serverio klaida');
    }
};

// Gauti konkretų meistrą pagal ID
exports.getMechanicById = async (req, res) => {
    try {
        const mechanic = await Mechanic.findById(req.params.id).populate('garage');
        if (!mechanic) {
            return res.status(404).json({ msg: 'Meistras nerastas' });
        }
        res.json(mechanic);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Serverio klaida');
    }
};

// Atnaujinti meistrą
exports.updateMechanic = async (req, res) => {
    const { firstName, lastName, specialization, image, city, garage } = req.body;
    try {
        let mechanic = await Mechanic.findById(req.params.id);
        if (!mechanic) {
            return res.status(404).json({ msg: 'Meistras nerastas' });
        }

        mechanic.firstName = firstName || mechanic.firstName;
        mechanic.lastName = lastName || mechanic.lastName;
        mechanic.specialization = specialization || mechanic.specialization;
        mechanic.image = image || mechanic.image;
        mechanic.city = city || mechanic.city;
        mechanic.garage = garage || mechanic.garage;

        mechanic = await mechanic.save();
        res.json(mechanic);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Serverio klaida');
    }
};

// Ištrinti meistrą
exports.deleteMechanic = async (req, res) => {
    try {
        const mechanic = await Mechanic.findById(req.params.id);
        if (!mechanic) {
            return res.status(404).json({ msg: 'Meistras nerastas' });
        }

        await mechanic.remove();
        res.json({ msg: 'Meistras pašalintas' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Serverio klaida');
    }
};

// Vertinti meistrą
exports.rateMechanic = async (req, res) => {
    try {
        let mechanic = await Mechanic.findById(req.params.id);
        if (!mechanic) {
            return res.status(404).json({ msg: 'Meistras nerastas' });
        }

        mechanic.rating += 1;
        mechanic = await mechanic.save();
        res.json(mechanic);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Serverio klaida');
    }
};
