export const getCompletedChallenges = (data: object) => {

    const output = Object.values(data).flat().length

    return output

}

export const getCompletedLevel = (data: object) => {
    return Object.entries(data)
        .filter(([_, items]) => items.length > 0)
        .map(([level]) => level)
        .length


}