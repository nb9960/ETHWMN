/* globals artifacts */
const myToken = artifacts.require('DeadManSwitch')

module.exports = function(deployer) {
    deployer.deploy(myToken)
}
