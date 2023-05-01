export const ladingPage = {
    profile: "profile",
    user: "user"
}
export const setUserDetailsfromLocalStorage = (data) => {
    const details = localStorage.setItem("profileDetails", JSON.stringify(data))
    return details
}
export const getUserDetailsfromLocalStorage = () => {
    const userList = JSON.parse(localStorage.getItem("profileDetails"))
    return userList

}

export const clearLocalStorage=()=>{
    const revomeDetails=localStorage.clear()
    return revomeDetails
}

