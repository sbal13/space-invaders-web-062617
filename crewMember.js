const CrewMember = (function createCrewMember(){

	return class CrewMember{
		constructor(position){
			this.engageWarpDrive = () => null
			this.setsInvisibility = () => null
			this.chargePhasers = () => null

			this.position = position
			this.currentShip = 'Looking for a Rig'
			this.assignSpecial()

		}


		assignSpecial(){

			switch (this.position){
				case 'Pilot':
					this.engageWarpDrive = function (){
						return (typeof this.currentShip === 'string') ? 'had no effect' : this.currentShip.warpDrive = 'engaged!'
					};
					break;
				case 'Defender':
					this.setsInvisibility = function (){
						return typeof this.currentShip === 'string' ? 'had no effect' : this.currentShip.cloaked = true
					};
					break;
				case 'Gunner':
					this.chargePhasers = function (){
						return typeof this.currentShip === 'string' ? 'had no effect' : this.currentShip.phasersCharge = 'charged!'
					};
					break;
			}
		}



		

	}
})()