const { ethers } = require("ethers");
const ABI = require("./contract_abi.json");

var url:string = "https://bsc-dataseed1.binance.org/";

const daiAddress:string = "0xC0ECB8499D8dA2771aBCbF4091DB7f65158f1468";

const provider:any = new ethers.JsonRpcProvider(url);

var addresses:string[] = [
    "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
    "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
    "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392"
]

async function contract() {
    // The Contract object
    const daiContract:any = new ethers.Contract(daiAddress, ABI, provider);
    var decimals:BigInt = await daiContract.decimals();
    
    var number_format:any = Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: Number(decimals)
    });
    
    var result:BigInteger;
    var amount:number;
    let ans = "";

    for(var i = 0; i < addresses.length; i++){
        result = await daiContract.balanceOf(addresses[i]);
        amount = ethers.formatUnits(result, decimals);
        ans += addresses[i] + " " + number_format.format(amount);
        i+1 < addresses.length ? ans += "\n" : ans
    }
    console.log(ans)
}

contract();