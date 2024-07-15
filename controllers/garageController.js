const Garage = require('../models/Garage');

// Kurti servisą
exports.createGarage = async (req, res) => {
    const { name, address, head } = req.body;
    try {
        const newGarage = new Garage({
            name, 
            address, 
            head
        });
        const garage = await newGarage.save();
        res.json(garage);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Serverio klaida');
    }
};

// Gauti visus servisus
exports.getAllGarages = async (req, res) => {
    try {
        const garages = await Garage.find();
        res.json(garages);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Serverio klaida');
    }
};

// Gauti konkretų servisą pagal ID
exports.getGarageById = async (req, res) => {
    try {
        const garage = await Garage.findById(req.params.id);
        if (!garage) {
            return res.status(404).json({ msg: 'Servisas nerastas' });
        }
        res.json(garage);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Serverio klaida');
    }
};

// Atnaujinti servisą
exports.updateGarage = async (req, res) => {
    const { name, address, head } = req.body;
    try {
        let garage = await Garage.findById(req.params.id);
        if (!garage) {
            return res.status(404).json({ msg: 'Servisas nerastas' });
        }

        garage.name = name || garage.name;
        garage.address = address || garage.address;
        garage.head = head || garage.head;

        garage = await garage.save();
        res.json(garage);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Serverio klaida');
    }
};

// Ištrinti servisą
exports.deleteGarage = async (req, res) => {
    try {
        const garage = await Garage.findById(req.params.id);
        if (!garage) {
            return res.status(404).json({ msg: 'Servisas nerastas' });
        }

        await garage.remove();
        res.json({ msg: 'Servisas pašalintas' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Serverio klaida');
    }
};
