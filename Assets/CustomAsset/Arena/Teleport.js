#pragma strict
var LevelName : String;

function OnTriggerEnter(){
    yield WaitForSeconds(3);
    Application.LoadLevel(LevelName);
}