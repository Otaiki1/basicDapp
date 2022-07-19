// SPDX-License-Identifier: MIT
pragma solidity 0.8.2;

contract Emotion{
    string emotion; //This is our state variable

    //This function below gets the state of the Variable
    function getEmotion() public view returns(string memory){
        return emotion;
    }
    //This function below sets the state of the Variable
    function setEmotion(string memory _emotion) public {
        emotion = _emotion;
    }
}