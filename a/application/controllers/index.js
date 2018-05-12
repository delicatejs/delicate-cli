module.exports = class extends MY_Controller { 	
	async index() {				
		await this.view('index')		
	}
}