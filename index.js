// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array,value){
    return  array.filter( function (user) {
        return user.toUpperCase() === value.toUpperCase()
    })
}
findMatching(drivers, 'Bobby');
findMatching( ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'], 'Susan');
findMatching(drivers, 'Sammy');


function fuzzyMatch(drivers,start){


    const startsWithSa = drivers.filter((x) => x.toLowerCase().startsWith(start.toLowerCase()));
    return startsWithSa
;
}

fuzzyMatch(['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'],"Sa")

function matchName(drivers,name){
    const findDriver = drivers.filter((x) => x.name.toLowerCase().startsWith(name.toLowerCase()));
    return findDriver   
}

matchName([
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ],"Bobby")