const EmotionContractAddress = "0x49E438fc7b7e799CCdd184633f1F7b43e9a26970";
const EmotionContractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_emotion",
				"type": "string"
			}
		],
		"name": "setEmotion",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getEmotion",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let EmotionContract;
let signer;

const provider = new ethers.providers.Web3Provider(window.ethereum, "ropsten");// we define provider here
provider.send("eth_requestAccounts", [])
    .then(() =>{
        provider.listAccounts().then((accounts) =>{
            signer = provider.getSigner(accounts[0]);
            EmotionContract = new ethers.Contract(
                EmotionContractAddress, EmotionContractABI, signer
            )
        })
    })

async function getEmotion(){
    const getEmotionPromise = EmotionContract.getEmotion()
    const Emotion = await getEmotionPromise;
    console.log(Emotion)
}

async function setEmotion(){
    const Emotion = document.getElementById("emotion").value;
    const setEmotionPromise = EmotionContract.setEmotion(Emotion);
    await setEmotionPromise;
    console.log("successfully set Emotion")
}