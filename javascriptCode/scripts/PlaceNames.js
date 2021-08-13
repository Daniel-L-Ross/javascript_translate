const names = ["Nashville", "Hong Kong", "The back yard", "Earth",
"London", "The mall", "Ryman Auditorium", "The Great Wall of China"]

const filterNames = names.filter(place => place.startsWith('The'))

export const placeNames = () => {
    names.forEach(place => console.log(place))
    
    console.log("")
    
    filterNames.forEach(place => console.log(place))
}