import RoamPrivateApi from '../';
import { graph, email, password } from '../secrets.json';

const api = new RoamPrivateApi( graph, email, password, {
	headless: false,
	folder: './tmp/',
} );
api.import( [
	{ title: 'test', children: [ { string: 'Test child' }, { string: 'Another test child' } ] },
] );
