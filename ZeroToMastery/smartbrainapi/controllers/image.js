const clarifai = require('clarifai');

const clarifaiApp = new Clarifai.App({
  apiKey: 'cd9b15c6541846ed8ef8d3cd276ace10'
});
const handleApiCall = (req, res) => {
	clarifaiApp.models.predict(
		Clarifai.FACE_DETECT_MODEL, 
		req.body.input
	).then(data => {
		res.json(data);
	})
	.catch(err => res.status(400).json('unable to work with API :,('));
}

const handleImagePut = db => (req, res) => {
	const {id} = req.body;
	db('users')
		.where('id', '=', id)
		.increment('entries', 1)
		.returning('entries')
		.then(entries => {
			res.json(entries[0]);
		})
		.catch(err => {
			res.status(400).json('Unable to get entries');
		});
}

module.exports = {
	handleImagePut,
	handleApiCall
}