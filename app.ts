const profileDataArgs = process.argv.slice(2, process.argv.length)

interface profileData {
    // stuff
}

const printProfile = profileDataArr => {
    profileDataArr.forEach(profileItem => console.log(profileItem))
}
