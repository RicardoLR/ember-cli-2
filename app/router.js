import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.resource('users', function() {});
});

export default Router;

/*

en un ruta,
 Ember espera encontrar otros tipos asociados como una ruta, un controlador y una plantilla.
  Podríamos decidir crear estos tipos de forma explícita o permitir que Ember los cree para nosotros. 


> ember new contactmanager
NOTA: si sale You cannot use the new command inside an ember-cli project.
	Borrar package.json
*/
