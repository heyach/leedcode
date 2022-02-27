function singleNumber(nums) {
    return nums.reduce((final, cur) => {
        return final ^ cur
    })
}