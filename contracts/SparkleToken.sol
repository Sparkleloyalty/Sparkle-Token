pragma solidity 0.4.25;

/**
 * @dev OpenZeppelin Solidity v2.0.0 imports (Using: npm openzeppelin-solidity@2.0.0)
 */
import 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol';
import 'openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol';
import 'openzeppelin-solidity/contracts/ownership/Ownable.sol';

/**
 * @title SparkleToken
 * @dev Fully compliant ERC20 Token contract.
 * Inherits Ownable, ERC20 and ERC20Detailed from OpenZeppelin-Solidity v2.0.0
 */
contract SparkleToken is Ownable, ERC20, ERC20Detailed {
	/**
	 * @dev ERC20 Compliance variables
	 */
	string public _tokenName      = "Sparkle";
	string public _tokenSymbol    = "SPRKL";
	string public _tokenVersion   = "v1.00";
	uint8  public _tokenDecimals  = 8;

	/**
	 * @dev Max supply to be minted at Sparkle Token creation
	 */
	uint256 public _tokenMaxSupply = 70000000 * (10 ** 8);

	/**
	 * @dev The FFS constructor specifies ERC20 details
	 * to be used.
	 */
	constructor()
	Ownable()
	ERC20()
	ERC20Detailed(_tokenName, _tokenSymbol, _tokenDecimals) 
	public {
		/**
		 * @dev Mint the total maximum supply of tokens at creation time
		 */
		_mint(owner(), _tokenMaxSupply);
	}

}