
// ANTES
// import DS from 'ember-data';
import Model from 'ember-data/model';


// ANTES
//export default DS.Model.extend({

export default Model.extend({

	firstName: Model.attr(),
	lastName: Model.attr(),
	addressLine: Model.attr(),
	postCode: Model.attr(),
	country: Model.attr()

});



/** 

> ember generate model user


*/