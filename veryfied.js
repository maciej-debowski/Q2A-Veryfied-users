/*
	VeryfiedUsers Q2A Plugin.
	Created by: Maciej "Facio" Dębowski
*/
// TO CONFIGURATE THIS PLUGIN GO DOWN.
// DON'T EDIT CODE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let VeryfiedUsers = [] // don't change it here.
let VeryfiedRanks = [] // don't change it here.

function addVeryfiedUser(userfullname){
	VeryfiedUsers.push(userfullname)
}

function addVeryfiedRank(rankname){
	VeryfiedRanks.push(rankname)
}
console.log(VeryfiedRanks)
window.addEventListener('load', function() {

	let event_elements = document.querySelector('#userfield-1')

	let event_element_2 = event_elements.querySelector('.qa-form-wide-data')
	let event_injector_name = event_element_2.querySelector('.qa-form-wide-static')
	let username = event_injector_name.textContent

	// I Can't add veryfied on userpoints because points on userpage have ex: 1,200. This , is stuff what we won't want.
	// let userpoints_obj = document.querySelector('.qa-uf-user-points')
	// let userpoints = userpoints_obj.textContent

	let title_row = document.querySelector('#title')
	let title_wide_data = title_row.querySelector('.qa-form-wide-data')
	let title_wide_stat = title_wide_data.querySelector('.qa-form-wide-static')

	let user_title = title_wide_stat.textContent

	console.log(user_title)
	for(let j = 0; j < VeryfiedRanks.length; j++){
		if(user_title == VeryfiedRanks[j]){
			event_injector_name.innerHTML = `${username} <span title="Veryficated user"> ✔ </span>`
			break;
		}
	}

	for(let i = 0; i < VeryfiedUsers.length; i++){
		if(username == VeryfiedUsers[i]){
			event_injector_name.innerHTML = `${username} <span title="Veryficated user"> ✔ </span>`
			break;
		}
	}

}); 


/* CONFIG */

// use addVeryfiedUser function

// addVeryfiedUser('User nick name')
addVeryfiedUser('Maciej D')
addVeryfiedUser('Maciej Dēbowski')

// use addVeryfiedRank('Rank name')
// veryfiedRank is title. ex: human 
// title you can add/remove in admin page in section users on bottom

addVeryfiedRank('Weteran')
addVeryfiedRank('Jerzy Urban')
addVeryfiedRank('Bóg dyskusji')
addVeryfiedRank('Gebels 2020')



