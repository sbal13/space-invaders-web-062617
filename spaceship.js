const Spaceship = (function createSpaceship(){

	let crewMembers = []

	return class Spaceship{
		constructor(name, crewMembers, phasers, shields){
			this.name = name
			this.crewMembers = crewMembers
			this.phasers = phasers
			this.shields = shields
			this.cloaked = false
			this.warpDrive = "disengaged"
			this.crewMembers.length ? this.docked = false : this.docked = true
			this.phasersCharge = "uncharged"

			this.crewMembers.forEach( element => {
				element.currentShip = this
			})
		}



	}
})()