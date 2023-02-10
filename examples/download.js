import RoamPrivateApi from '../';
import { graph, email, password } from '../secrets.json';

const api = new RoamPrivateApi( graph, email, password, {
	headless: false,
	folder: './tmp/',
	nodownload: false,
} );
api.getExportData().then( data => console.log( 'success', data ) );
