var SparkleToken = artifacts.require('./SparkleToken.sol');

module.exports = function(deployer) {
	deployer.deploy(SparkleToken);
};
